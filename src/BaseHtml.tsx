import * as elements from "typed-html";

export default function BaseHtml({ children }: elements.Children) {
  return `
  <html>
     <head>
        <link href="https://cdn.jsdelivr.net/npm/daisyui@3.6.4/dist/full.css" rel="stylesheet" type="text/css" />
     </head>
        <script src="https://cdn.tailwindcss.com"></script>
     <body>
        ${children}
     </body>
   </html>
        `;
}
// export default function BaseHtml({ children }: elements.Children) {
//   return `
//         <!DOCTYPE html>
//         <html lang="en">

//         <head>
//           <meta charset="UTF-8">
//           <meta name="viewport" content="width=device-width, initial-scale=1.0">
//           <link href="styles.css" rel="stylesheet">
//           <link href="https://cdn.jsdelivr.net/npm/daisyui@3.6.4/dist/full.css" rel="stylesheet" type="text/css" />
//           </head>
//           <script src="https://cdn.tailwindcss.com"></script>
//           <body>

//         ${children}
//         </body>
//         </html>
//         `;
// }
