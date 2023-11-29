import { jsPDF } from "jspdf";
import { pathImg } from "./constants";

const HtmlToPdf = () => {
  const doc = new jsPDF("p", "mm", [297, 210]);
  const htmlString = `
    <div style="font-size: 5px; color: red; display: flex; flex-direction: row; align-items: center;">
      <p style="color: blue"><b>This is bold text</b>, <i>this is italic text</i>.</p>
      <p>Here are some special characters: &copy; &lt;3 &amp;</p>
      This is a new line.
    </div>
    <img src=${pathImg} width="100" height="66"/>
`;
  doc.html(htmlString, {
    margin: [27, 16, 27, 16],
    autoPaging: "text",
  });

  function downloadPdf() {
    doc.save("pdftest");
  }
  function getDataUrl() {
    return doc.output("dataurlstring", {
      filename: "myGeneratedPdfTest",
    });
  }
  return {
    downloadPdf,
    getDataUrl,
  };
};

export default HtmlToPdf;
