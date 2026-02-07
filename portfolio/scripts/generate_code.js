
import fs from 'fs';

const projects = JSON.parse(fs.readFileSync('projects_final.json', 'utf-8'));

function formatTopic(topic) {
    // Replace hyphens with spaces and capitalize words
    return topic.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

const projectsCode = projects.filter(p => !p.deployUrl.includes('placeholder')).map(p => {
    let tags = p.topics || [];
    if (tags.length === 0) {
        // Default tags if none from GitHub?
        // Maybe infer from name?
        tags = ['Web App'];
    } else {
        tags = tags.slice(0, 4).map(formatTopic);
    }

    // Clean title
    let title = p.name.replace(/-/g, ' ').replace(/_/g, ' ');

    // Clean description
    let description = p.description || "Experimental project.";

    return {
        title: title,
        description: description,
        url: p.deployUrl,
        tags: tags,
        screenshot: p.screenshot
    };
});

console.log(JSON.stringify(projectsCode, null, 2));
