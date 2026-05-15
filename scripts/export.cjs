const puppeteer = require('puppeteer-core');

async function exportToHtml() {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'load', timeout: 30000 });
  await page.waitForSelector('header', { timeout: 10000 });

  const html = await page.content();
  
  const fs = require('fs');
  fs.writeFileSync('dist/exported.html', html);
  console.log('HTML exported to dist/exported.html');

  await browser.close();
}

exportToHtml().catch(console.error);