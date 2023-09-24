import { test } from "@playwright/test";
import { defaultGeneratePDFTest } from "../src/functions/generatePDF";
import DynamicTest from "../src/pdfs/DynamicTest";

test("example test", async () => {
  await DynamicTest(defaultGeneratePDFTest);
});
