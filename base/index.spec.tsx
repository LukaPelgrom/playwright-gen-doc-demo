import Header from './src/Header';
import Footer from './src/Footer';
import puppeteer from 'puppeteer';
// import {webkit,Browser, firefox, chromium} from 'playwright';
// import { test, expect } from '@playwright/test';
import {
  renderToString,
  renderToStringAsync,
  renderToStream
} from "solid-js/web";
// import TestPDF from './src/TestPDF';
import * as elements from "typed-html";
import htm from 'htm';
import * as htmlparser2 from "htmlparser2";
import {html, render} from 'lit-html';
import TestPDF from './src/TestPDF';

import { expect, test } from "bun:test";

// const TestPDF = () => {
//   return (
//     /*html*/
//     `<html lang="en">
//       <head>
//         <title>🔥 Solid SSR 🔥</title>
//         <meta charset="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <link rel="stylesheet" href="/styles.css" />
//       </head>
//       <body>
//       ${/*html*/ Array(100).map((_, i) => /*html*/`<div>${i} noob </div>`)}
//        <div>hall22o</div>
//       </body>
//     </html>`
//   );
// };


test('example test', async ({  }) => {
  const browser = await puppeteer.launch({ headless: true,});
  const page = await browser.newPage();
  

  await page.setContent(
    TestPDF({amount: 100})
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
  
  // expect(await page.title()).toBe('🔥 Solid SSR 🔥');
  // expect(await page.screenshot()).toMatchSnapshot({
  //   name: 'example.png',
  //   threshold: 0.2,
  // });
  await browser.close();
});