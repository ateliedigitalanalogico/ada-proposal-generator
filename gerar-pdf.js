/**
 * ADA — Gerador de PDF
 * Uso: node gerar-pdf.js <caminho-do-html>
 * Exemplo: node gerar-pdf.js db/prestige_imersivo/proposta_prestige_imersivo.html
 */

const puppeteer = require('C:/Users/fazol/.ada-tools/node_modules/puppeteer-core');
const path = require('path');
const fs = require('fs');

const htmlArg = process.argv[2];

if (!htmlArg) {
  console.error('Uso: node gerar-pdf.js <caminho-do-html>');
  console.error('Ex:  node gerar-pdf.js db/prestige_imersivo/proposta_prestige_imersivo.html');
  process.exit(1);
}

const htmlPath = path.resolve(__dirname, htmlArg);
const pdfPath  = htmlPath.replace(/\.html$/, '.pdf');

if (!fs.existsSync(htmlPath)) {
  console.error('Arquivo não encontrado:', htmlPath);
  process.exit(1);
}

(async () => {
  console.log('Abrindo Chrome...');
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
  });

  const page = await browser.newPage();

  console.log('Carregando:', htmlPath);
  await page.goto('file:///' + htmlPath.replace(/\\/g, '/'), {
    waitUntil: 'networkidle0',
  });

  // Espera fontes carregarem
  await page.evaluateHandle('document.fonts.ready');

  console.log('Gerando PDF...');
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    landscape: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    printBackground: true,
    preferCSSPageSize: true,
  });

  await browser.close();
  console.log('PDF salvo em:', pdfPath);
})();
