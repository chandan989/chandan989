
import fs from 'fs';
import path from 'path';

const urlsPath = path.resolve('../urls.txt');
const content = fs.readFileSync(urlsPath, 'utf-8');
const lines = content.split('\n').filter(line => line.trim() !== '');

const projects = [];

async function fetchRepoInfo(githubUrl) {
    try {
        const match = githubUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);
        if (!match) return null;
        const [_, owner, repo] = match;
        const apiUrl = `https://api.github.com/repos/${owner}/${repo}`;

        const res = await fetch(apiUrl);
        if (!res.ok) {
            if (res.status === 404) console.warn(`404 for ${apiUrl}`);
            return null;
        }
        return await res.json();
    } catch (e) {
        console.error(`Error fetching ${githubUrl}:`, e);
        return null;
    }
}

async function main() {
    for (const line of lines) {
        const parts = line.trim().split(/\s+/);
        if (parts.length < 2) continue;

        const deployUrl = parts[0];
        const githubUrl = parts[1];

        console.log(`Processing ${githubUrl}...`);
        const repoData = await fetchRepoInfo(githubUrl);

        // Determine name from repo url if data is missing
        const repoName = githubUrl.split('/').pop();

        projects.push({
            deployUrl,
            githubUrl,
            name: repoData?.name || repoName,
            full_name: repoData?.full_name || null,
            description: repoData?.description || null,
            topics: repoData?.topics || [],
            homepage: repoData?.homepage || deployUrl // Fallback to deployUrl
        });
    }

    fs.writeFileSync('projects_data.json', JSON.stringify(projects, null, 2));
    console.log('Done. Saved to projects_data.json');
}

main();
