const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

async function generatePDF() {
  const markdownPath = path.join(__dirname, 'manual.md');
  const markdown = fs.readFileSync(markdownPath, 'utf-8');

  // Extraer bloque <style> del markdown
  let styleBlock = '';
  let mdContent = markdown;
  const styleMatch = markdown.match(/<style>([\s\S]*?)<\/style>/);
  if (styleMatch) {
    styleBlock = styleMatch[1];
    mdContent = markdown.replace(/<style>[\s\S]*?<\/style>/, '');
  }

  const htmlContent = marked.parse(mdContent);

  const finalHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        ${styleBlock}
      </style>
    </head>
    <body>
      ${htmlContent}
    </body>
    </html>
  `;

  const tempHtmlPath = path.join(__dirname, 'temp.html');
  fs.writeFileSync(tempHtmlPath, finalHtml);

  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();

  const fileUrl = 'file:///' + __dirname.replace(/\\/g, '/') + '/temp.html';
  await page.goto(fileUrl, { waitUntil: 'networkidle0' });

  const outputPath = path.join(__dirname, 'Manual_Viaje360.pdf');
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '0px', right: '0px', bottom: '20px', left: '0px' }
  });

  await browser.close();
  fs.unlinkSync(tempHtmlPath);
  console.log('✅ PDF generado exitosamente: Manual_Viaje360.pdf');
}

generatePDF().catch(console.error);
