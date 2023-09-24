export default function Footer({marginLeft = 30, marginRight = 30, marginTop = 0, marginBottom = 15}: {marginLeft?: number, marginRight?: number, marginTop?: number, marginBottom?: number}) {
  return `
    <html>
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style type="text/css">
    #footer {
      padding: 0;
    }
    .content-footer {
      width: 100%;
      color: black;
      padding: 5px;
      -webkit-print-color-adjust: exact;
      vertical-align: middle;
      font-size: 15px;
      margin-top: ${marginTop}px;
      margin-bottom: ${marginBottom}px;
      margin-left: ${marginLeft}px;
      margin-right: ${marginRight}px;
      display: inline-block;
      text-align: right;
    }
  </style>
  </head>
      <div class="content-footer">
        <span class="pageNumber"></span> / <span class="totalPages"></span>
      </div>
    </html>`;
}
