import Header from './src/Header';
import Footer from './src/Footer';
import TestPDF from './src/TestPDF';
import puppeteer from 'puppeteer';
console.time('Execution Time');

const browser = await puppeteer.launch({ headless: "new",});
const page = await browser.newPage();
await page.setContent(
  TestPDF({ amount: 100 })
  , {

  });

await page.pdf({
  path: 'test.pdf',
  displayHeaderFooter: true,
  headerTemplate: Header({ title: "Test title" }),
  footerTemplate: Footer({}),
  format: 'A4',
  margin: {
    top: '100px',
    bottom: '100px',
    left: '30px',
    right: '30px',
  },
  printBackground: false
})
await browser.close();

console.timeEnd('Execution Time');
