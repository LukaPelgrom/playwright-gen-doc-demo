import { Browser, Page, chromium } from 'playwright';
import BaseHTML, { BaseHTMLComponent } from '../components/BaseHTML';
import { HtmlEscapedString } from 'hono/utils/html';
import { PDFOptions, PageOptions } from '../types/pdf';
import { expect } from '@playwright/test';
import { html } from 'hono/html';

export type GeneratePDF = {
    browser?: Browser;
    closeBrowser?: boolean;
    pdfOptions?: PDFOptions;
    pageOptions?: PageOptions;
    baseHTML?: BaseHTMLComponent;
    pdfHTML: HtmlEscapedString | string;
    test?: (page: Page, pdfHTML: string) => Promise<void>;
}

export type TestGeneratePDF = GeneratePDF["test"]

export const defaultGeneratePDFTest: TestGeneratePDF = async (page, pdfHTML) => {
    expect(pdfHTML).toMatchSnapshot();
    await page.pdf()
    expect(await page.screenshot({
        fullPage: true,
        type: 'png',
    })).toMatchSnapshot({

    });
}

async function generatePDF({
    browser,
    closeBrowser = true,
    pdfOptions,
    pageOptions,
    baseHTML = BaseHTML,
    pdfHTML,
    test,

}: GeneratePDF): Promise<Buffer> {
    // initialize the browser
    if (!browser) {
        browser = await chromium.launch({ headless: true });
    }

    // create a new page
    const page = await browser.newPage();

    // set the page content
    await page.setContent(
        baseHTML({
            children: pdfHTML
        }).toString()
        , pageOptions);


    // run the test function if it exists
    test && await test(page, baseHTML({
        children: pdfHTML
    }).toString());

    // generate the pdf buffer
    const pdfBuffer = await page.pdf(pdfOptions);



    if (closeBrowser) {
        await browser.close();
    }

    return pdfBuffer;
}

export default generatePDF;