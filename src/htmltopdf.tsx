import { jsPDF } from "jspdf";

const HtmlToPdf = () => {
  function downloadPdf(): void {
    const element = document.getElementById("test");
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4",
      precision: 100,
    });
    doc.html(element!, {
      callback: function (jsPdf) {
        jsPdf.save("Test.pdf");
      },
      width: 560,
      windowWidth: 560,
      margin: [27, 16, 27, 16],
      autoPaging: "text",
      html2canvas: {
        allowTaint: true,
        logging: false,
        letterRendering: true,
        scale: 1,
        width: 560,
        windowWidth: 560,
      },
    });
  }

  return {
    downloadPdf,
  };
};

export default HtmlToPdf;
