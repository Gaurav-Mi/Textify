import React from "react";

export default function About(props) {
  const themeClass = `bg-${props.mode} text-${
    props.mode === "light" ? "dark" : "light"
  }`;

  return (
    <div className="container mt-3">
      <div className="accordion my-3" id="accordionExample">
        <div className={`accordion-item ${themeClass}`}>
          <h1 className="text-center my-3">About Textify</h1>
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${themeClass}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What is Textify?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Textify</strong> is a simple text utility tool that allows
              you to modify and enhance text quickly. You can convert text to
              uppercase, lowercase, copy it, clear it, and even rephrase it with
              AI suggestions.
            </div>
          </div>
        </div>

        <div className={`accordion-item ${themeClass}`}>
          <h2 className="accordion-header">
            <button
              className={`accordion-button collapsed ${themeClass}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Key Features of Textify
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul>
                <li>
                  🔹 Convert text to <strong>uppercase</strong> or{" "}
                  <strong>lowercase</strong>.
                </li>
                <li>
                  🔹 <strong>Copy</strong> text to the clipboard.
                </li>
                <li>
                  🔹 <strong>Clear</strong> the input field instantly.
                </li>
                <li>
                  🔹 Generate <strong>AI-powered rephrased text</strong> for
                  better readability.
                </li>
                <li>
                  🔹 Get a quick <strong>word & character count</strong>.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={`accordion-item ${themeClass}`}>
          <h2 className="accordion-header">
            <button
              className={`accordion-button collapsed ${themeClass}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              How does Textify work?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Just enter your text in the provided text area, then use the
              available buttons to apply transformations. The AI-powered
              rephrasing feature generates alternative sentences to improve
              clarity and engagement.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
