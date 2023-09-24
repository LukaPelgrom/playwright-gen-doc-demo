import { Page } from "playwright";
import { TestGeneratePDF } from "../functions/generatePDF";

export type PDFOptions = Page["pdf"] extends (options: infer T) => Promise<infer R> ? T : never;
export type PageOptions = Parameters<Page["setContent"]>[1];

export type PDF = (test?: TestGeneratePDF) => Promise<Buffer>;