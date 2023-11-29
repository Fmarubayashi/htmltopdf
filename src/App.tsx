import "./App.css";
import HtmlToPdf from "./htmltopdf";
import logo from "./logo.svg";

function App() {
  const { getDataUrl, downloadPdf } = HtmlToPdf();
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => console.log(getDataUrl())}>Get PDF here!</button>
        <br />
        <img src={logo} alt="logo" width={120} />
        <button onClick={downloadPdf}>
          Or click here to download the PDF!
        </button>
      </header>
    </div>
  );
}

export default App;
