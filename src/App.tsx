import "./App.css";
import HtmlToPdf from "./htmltopdf";

function App() {
  const { getDataUrl, downloadPdf } = HtmlToPdf();
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => console.log(getDataUrl())}>Get PDF here!</button>
        <br />
        <button onClick={downloadPdf}>
          Or click here to download the PDF!
        </button>
      </header>
    </div>
  );
}

export default App;
