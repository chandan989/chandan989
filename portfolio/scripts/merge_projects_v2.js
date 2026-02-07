
import fs from 'fs';

const projects = JSON.parse(fs.readFileSync('projects_final.json', 'utf-8'));
const projectsTsx = fs.readFileSync('src/components/Projects.tsx', 'utf-8');

function formatTopic(topic) {
    return topic.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

// Extract all projects from TSX
// Pattern: { title: '...', description: '...', url: '...', tags: ... }
// We use a regex that captures title and url.
// Note: description is optional in TS interface but present in the file for all items?
// Let's assume consistent formatting as seen in view_file.

const extracted = [];
const regex = /title:\s*'([^']*)'[\s\S]*?description:\s*'([^']*)'[\s\S]*?url:\s*'([^']*)'[\s\S]*?tags:\s*\[([\s\S]*?)\]/g;

let match;
while ((match = regex.exec(projectsTsx)) !== null) {
    extracted.push({
        title: match[1],
        description: match[2],
        url: match[3],
        tagsString: match[4]
    });
}

// Map entries
const mergedProjects = projects.filter(p => !p.deployUrl.includes('placeholder')).map(p => {
    const existing = extracted.find(e => e.url === p.deployUrl);

    // Use existing title if available, else new name
    let title = existing ? existing.title : p.name.replace(/-/g, ' ').replace(/_/g, ' ');

    // Use new description if valid (length > 0?), else existing
    let description = (p.description && p.description.length > 0) ? p.description : (existing ? existing.description : "Experimental project.");

    // Tags: New topics > Existing tags > Default
    let tags = [];
    if (p.topics && p.topics.length > 0) {
        tags = p.topics.slice(0, 4).map(formatTopic);
    } else if (existing) {
        // Parse existing tags string: "'Tag1', 'Tag2'"
        tags = existing.tagsString.split(',').map(s => s.trim().replace(/'/g, '').replace(/"/g, '')).filter(s => s);
    } else {
        tags = ['Web App'];
    }

    // Handle case where GitHub description is "Experimetal project." placeholder?
    // No, p.description comes from GitHub API. It would be null/empty.

    // Special handle for "Agentia Protocol" - GitHub description is long. Existing is short.
    // User said "update information based on github". So long description is PREFERRED.

    return {
        title: title,
        description: description,
        url: p.deployUrl,
        tags: tags,
        screenshot: p.screenshot
    };
});

console.log(JSON.stringify(mergedProjects, null, 2));
