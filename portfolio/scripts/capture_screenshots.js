
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

const projects = JSON.parse(fs.readFileSync('projects_data.json', 'utf-8'));
const outputDir = path.resolve('public/projects');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

async function capture() {
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const updatedProjects = [];

    for (const project of projects) {
        const page = await browser.newPage();
        await page.setViewport({ width: 1280, height: 720 });

        // Create a safe filename
        const safeName = project.name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
        const screenshotFilename = `${safeName}.png`;
        const screenshotPath = path.join(outputDir, screenshotFilename);
        const publicPath = `/projects/${screenshotFilename}`;

        console.log(`Navigating to ${project.deployUrl}...`);
        try {
            await page.goto(project.deployUrl, { waitUntil: 'networkidle0', timeout: 30000 });
            // Add a small delay for animations
            await new Promise(r => setTimeout(r, 2000));

            await page.screenshot({ path: screenshotPath });
            console.log(`Saved screenshot to ${screenshotPath}`);

            updatedProjects.push({
                ...project,
                screenshot: publicPath
            });
        } catch (e) {
            console.error(`Failed to screenshot ${project.deployUrl}:`, e.message);
            // Keep project but without new screenshot (or use null to indicate fallback)
            updatedProjects.push({
                ...project,
                screenshot: null // Will fall back to thum.io or placeholder
            });
        } finally {
            await page.close();
        }
    }

    await browser.close();

    fs.writeFileSync('projects_final.json', JSON.stringify(updatedProjects, null, 2));
    console.log('Saved projects_final.json');
}

capture();
