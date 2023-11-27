import { jsPDF } from "jspdf";

const HtmlToPdf = () => {
  const doc = new jsPDF();
  const htmlString =
    "<b>This is bold text</b>, <i>this is italic text</i>.<br />Here are some special characters: &copy; &lt;3 &amp;.<br />This is a new line.";
  doc.html(htmlString, {
    x: 10,
    y: 10,
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
