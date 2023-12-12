import "./App.css";
import HtmlToPdf from "./htmltopdf";
import { pathImg } from "./constants";

function App() {
  const { downloadPdf } = HtmlToPdf();
  return (
    <div id="test">
      <div className="App">
        <header className="App-header">
          <h1>testing h1</h1>
          <h2>testing h2</h2>
          <p>
            <b>This is bold text</b>, <i>this is italic text</i>.
          </p>
          <p>Here are some special characters: &copy; &lt;3 &amp;</p>
          This is a new line.
          <img src={pathImg} width="100" height="66" alt="something" />
          <button onClick={downloadPdf}>
            Or click here to download the PDF!
          </button>
        </header>
      </div>
    </div>
  );
}

export default App;
