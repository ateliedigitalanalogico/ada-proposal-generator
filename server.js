/**
 * ADA — Servidor local de geração de PDF
 * Iniciado por iniciar.bat — fica rodando em background durante a sessão
 */
const http       = require('http');
const { exec }   = require('child_process');
const puppeteer  = require('C:/Users/fazol/.ada-tools/node_modules/puppeteer-core');
const path       = require('path');
const fs         = require('fs');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg':  'image/svg+xml',
  '.woff2':'font/woff2',
  '.woff': 'font/woff',
  '.pdf':  'application/pdf',
};

const PORT = 3333;
const BASE = __dirname;

const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

  const reqUrl = new URL(req.url, 'http://localhost');
  const pathname = reqUrl.pathname;
  const query = Object.fromEntries(reqUrl.searchParams);

  // GET /ping — checa se servidor está vivo
  if (pathname === '/ping') {
    res.writeHead(200);
    res.end(JSON.stringify({ ok: true }));
    return;
  }

  // GET /gerar-pdf?html=db/cliente/proposta.html
  if (pathname === '/gerar-pdf') {
    const htmlRel = query.html;
    if (!htmlRel) {
      res.writeHead(400);
      res.end(JSON.stringify({ error: 'Parâmetro html ausente' }));
      return;
    }

    const htmlPath = path.resolve(BASE, htmlRel);
    const pdfPath  = htmlPath.replace(/\.html$/i, '.pdf');

    if (!fs.existsSync(htmlPath)) {
      res.writeHead(404);
      res.end(JSON.stringify({ error: 'HTML não encontrado: ' + htmlPath }));
      return;
    }

    try {
      console.log('[ADA] Gerando PDF:', htmlPath);

      const browser = await puppeteer.launch({
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        headless: true,
        args: ['--no-sandbox'],
      });

      const page = await browser.newPage();
      await page.goto('file:///' + htmlPath.replace(/\\/g, '/'), { waitUntil: 'networkidle0' });
      await page.evaluateHandle('document.fonts.ready');

      await page.pdf({
        path: pdfPath,
        format: 'A4',
        landscape: true,
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
        printBackground: true,
        preferCSSPageSize: true,
      });

      await browser.close();

      // Abre pasta com o PDF selecionado (Windows)
      exec(`explorer /select,"${pdfPath}"`);

      console.log('[ADA] PDF salvo:', pdfPath);
      res.writeHead(200);
      res.end(JSON.stringify({ ok: true, pdf: path.basename(pdfPath) }));

    } catch (e) {
      console.error('[ADA] Erro:', e.message);
      res.writeHead(500);
      res.end(JSON.stringify({ error: e.message }));
    }
    return;
  }

  // Servir arquivos estáticos
  const filePath = path.join(BASE, pathname === '/' ? '/index.html' : pathname);
  const ext = path.extname(filePath).toLowerCase();
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
    return;
  }

  res.writeHead(404);
  res.end('404');
});

server.listen(PORT, '127.0.0.1', () => {
  console.log('');
  console.log('  ADA PDF Server — http://localhost:' + PORT);
  console.log('  Deixe esta janela aberta enquanto trabalha.');
  console.log('  Feche quando terminar.');
  console.log('');
});
