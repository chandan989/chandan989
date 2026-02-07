
import fs from 'fs';

const projects = JSON.parse(fs.readFileSync('projects_final.json', 'utf-8'));
const projectsTsx = fs.readFileSync('src/components/Projects.tsx', 'utf-8');

function formatTopic(topic) {
    return topic.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

// Function to extract existing data for a url
function getExistingData(url) {
    // Look for url: '...'
    const urlIndex = projectsTsx.indexOf(`url: '${url}'`);
    if (urlIndex === -1) return null;

    // We are inside an object. scan backwards for title, description. scan forwards for tags.
    // This is hacky.
    // Let's just Regex capture the whole object?
    // { ... url: '...' ... }
    // Regex is hard across lines.

    // Strategy: Split file by `url:`.
    // The content BEFORE the url contains the title and description.
    // The content AFTER contains tags.

    const relevantBlock = projectsTsx.substring(Math.max(0, urlIndex - 500), Math.min(projectsTsx.length, urlIndex + 500));

    const titleMatch = relevantBlock.match(/title:\s*'([^']+)'/);
    const descMatch = relevantBlock.match(/description:\s*'([^']+)'/);
    // tags: ['...', '...']
    const tagsMatch = relevantBlock.match(/tags:\s*\[([^\]]+)\]/);

    return {
        title: titleMatch ? titleMatch[1] : null,
        description: descMatch ? descMatch[1] : null,
        tags: tagsMatch ? tagsMatch[1].split(',').map(s => s.trim().replace(/'/g, '')) : []
    };
}

const mergedProjects = projects.filter(p => !p.deployUrl.includes('placeholder')).map(p => {
    const existing = getExistingData(p.deployUrl) || {};

    // Description: GitHub > Existing > Fallback
    let description = p.description || existing.description || "Experimental project.";

    // Tags: GitHub > Existing > Fallback
    let tags = p.topics && p.topics.length > 0 ? p.topics.slice(0, 4).map(formatTopic) : existing.tags;
    if (!tags || tags.length === 0) tags = ['Web App'];

    // Title: Existing > Auto
    // I prefer existing Title structure (with tagline) if available, unless I have a better one.
    // But wait, the user said "update information based on github links".
    // If I keep existing title, am I updating it?
    // If GitHub description is missing, likely GitHub title is also just the repo name.
    // So existing title is probably better (hand-crafted).
    // If GitHub HAS description, maybe I should use GitHub Name?
    // The user prompt is ambiguous on "conflict".
    // But generally, "update ... based on github" implies "Get new info".
    // If GitHub info is empty, "No update" is the logical fallback.
    // So I'll keep existing if GitHub is empty.

    let title = existing.title || p.name.replace(/-/g, ' ').replace(/_/g, ' ');

    // If GitHub has description, should I overwrite title's tagline?
    // Existing: "Loopin | Where Reality Becomes Territory"
    // GitHub name: "Loopin".
    // If I use GitHub name, I lose tagline.
    // I will KEEP existing title if it matches the repo name partially?
    // Or just always prefer existing title?
    // If the project is NEW (not in projects.tsx), I use `p.name`.
    // Since all seem to be in projects.tsx (based on `urls.txt` being the source), I'll prefer existing title.

    return {
        title: title,
        description: description,
        url: p.deployUrl,
        tags: tags,
        screenshot: p.screenshot
    };
});

console.log(JSON.stringify(mergedProjects, null, 2));
