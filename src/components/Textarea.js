import { useState, useEffect } from "react";
import { generateRephrasedText } from "../ai";

export function Textarea(props) {
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [loading, setLoading] = useState(false);

  function getTexts(e) {
    setText(e.target.value);
  }

  function convertToUpper() {
    if (!text.trim()) {
      props.showAlert("Enter some text first!", "warning");
      return;
    }
    setText(text.toUpperCase());
    props.showAlert("Converted To Capital Letters", "success");
  }

  function convertToSmall() {
    if (!text.trim()) {
      props.showAlert("Enter some text first!", "warning");
      return;
    }
    setText(text.toLowerCase());
    props.showAlert("Converted To Small Letters", "success");
  }

  function Clear() {
    if (!text.trim()) {
      props.showAlert("Enter some text first!", "warning");
      return;
    }
    setText("");
    setSuggestions("");
    props.showAlert("Cleared", "success");
  }

  function copy() {
    if (!text.trim()) {
      props.showAlert("Enter some text first!", "warning");
      return;
    }
    navigator.clipboard.writeText(text);
    props.showAlert("Copied To Clipboard", "success");
  }

  async function handleRephrase() {
    if (!text.trim()) {
      props.showAlert("Enter some text first!", "warning");
      return;
    }

    setLoading(true);
    setSuggestions("");

    const results = await generateRephrasedText(text);
    setTimeout(() => {
      setSuggestions(results);
      setLoading(false);
      props.showAlert("Generated multiple rephrased versions!", "success");
    }, 1000);
  }

  const [displaySuggestions, setDisplaySuggestions] = useState("");

  useEffect(() => {
    if (suggestions) {
      const timeout = setTimeout(() => {
        setDisplaySuggestions(suggestions);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [suggestions]);

  return (
    <div className="container-fluid py-4">
      <div className="row d-flex justify-content-center align-items-start">
        <div className="col-md-6 rounded-3">
          <h2 className="text-center text-uppercase fw-bold text-primary mb-3 fs-4">
            Enter Your Text Below:
          </h2>
          <textarea
            className={`form-control card p-4 shadow-sm rounded-3 ${
              props.mode === "dark"
                ? "bg-dark text-light placeholder-light"
                : "bg-light text-dark"
            }`}
            rows="12"
            placeholder="Type your text here..."
            value={text}
            onChange={getTexts}
          ></textarea>
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
            <button className="btn btn-primary" onClick={convertToUpper}>
              Capitalize
            </button>
            <button className="btn btn-success" onClick={convertToSmall}>
              Lowercase
            </button>
            <button className="btn btn-warning" onClick={copy}>
              Copy
            </button>
            <button
              className="btn btn-info"
              onClick={handleRephrase}
              disabled={loading}
            >
              {loading ? "Rephrasing..." : "Rephrase"}
            </button>
            <button className="btn btn-danger" onClick={Clear}>
              Clear
            </button>
          </div>
        </div>

        <div className="col-md-6 d-flex flex-column p-3 justify-content-start">
          <h2 className="text-center text-uppercase fw-bold text-primary mb-3 fs-4">
            Rephrased Sentences
          </h2>
          <div className="position-relative">
            <textarea
              className={`form-control shadow-lg rounded-3 ${
                props.mode === "dark"
                  ? "bg-dark text-light placeholder-light"
                  : "bg-light text-dark"
              }`}
              rows="12"
              placeholder="Rephrased text will appear here..."
              value={displaySuggestions}
              disabled
            ></textarea>

            {loading && (
              <div className="position-absolute top-50 start-50 translate-middle">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>


      <div className="container mt-5 col-md-6">
        <div
          className={`card p-3 shadow-lg rounded-3 ${
            props.mode === "dark" ? "bg-dark text-light" : "bg-light text-dark"
          }`}
        >
          <h2 className="text-center text-uppercase fw-bold text-primary mb-3">
            Text Summary
          </h2>
          <p className="fs-5 fw-bold text-primary">
            Words:{" "}
            <span>{text.trim() ? text.trim().split(/\s+/).length : 0}</span>
          </p>
          <p className="fs-5 fw-bold text-success">
            Characters (excluding spaces):{" "}
            <span>{text.replace(/\s/g, "").length}</span>
          </p>
          <p className="fs-5 fw-bold text-danger">
            Estimated Read Time:{" "}
            <span>
              {text.trim()
                ? (text.trim().split(/\s+/).length / 200).toFixed(2)
                : "0.00"}{" "}
              min
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
