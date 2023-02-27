const MJML = require("mjml");
const htmlToPdf = require("html-pdf-node");
const { writeFile } = require("fs/promises");
const { randomUUID } = require("crypto");

async function main() {
  const mjml = MJML(
    `<mjml>
    <mj-body>
      <mj-section>
        <mj-column>
          <mj-divider border-color="#F45E43"></mj-divider>
          <mj-text font-size="20px" color="#F45E43" font-family="helvetica">Olha ai o comprovante!!!</mj-text>
          <mj-divider border-color="#F45E43"></mj-divider>
          <mj-text font-size="20px" color="#F45E43" font-family="helvetica">Código: ${randomUUID()}</mj-text>
        </mj-column>
      </mj-section>
    </mj-body>
  </mjml>`
  );

  let file = { content: mjml.html };
  let options = { format: "A4" };

  await htmlToPdf
    .generatePdf(file, options)
    .then((buff) => writeFile("comprovante.pdf", buff));
}
main();
