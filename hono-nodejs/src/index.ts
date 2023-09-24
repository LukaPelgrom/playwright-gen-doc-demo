import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import DynamicTest from './pdfs/DynamicTest';
import Content from './table';
import { generateFakeData } from './functions/data';

import { handle } from '@hono/node-server/vercel'

const app = new Hono()

app.get('/', (c) => c.json(generateFakeData(100)))
console.log(typeof Content({ siteData: { description: "description", title: "test" }, name: "Luka" }).toString())

app.get('/test', async (c) => {
    console.time('Execution Time');

    // Ensure that DynamicTest() returns a PDF buffer
    const pdfBuffer = await DynamicTest();

    console.timeEnd('Execution Time');

    // Set the response headers
    c.header('Content-Type', 'application/pdf')
    c.header('Content-Disposition', 'attachment; filename=test.pdf');

    // Send the PDF buffer as the response
    return c.body(pdfBuffer);
});


// serve({
//     fetch: app.fetch,
//     port: 3001,
// }, (info) => {
//     console.log(`Listening on http://localhost:${info.port}`) // Listening on http://localhost:3000
// })

export default handle(app)


