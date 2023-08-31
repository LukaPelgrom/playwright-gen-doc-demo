import { chromium } from 'playwright';
import Header from './src/Header';
import Footer from './src/Footer';
import TestPDF from './src/TestPDF';

(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()

  await page.setContent(
    TestPDF({ amount: 100 })
    , {
      //https://playwright.dev/docs/api/class-page#page-set-content
      waitUntil: "networkidle", //https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
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

  await browser.close()
})()
