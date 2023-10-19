import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";

function App() {
  const [calcState, setCalcState] = useState("0");
  const [currState, setCurrState] = useState("0");

  function addCalculation(value) {
    if (value === "CLEAR") {
      setCalcState("0");
      setCurrState("0");
      return;
    }
    if (value === "/" || value === "*" || value === "+") {
      if (calcState === "0") return;
      if (calcState.includes("=")) {
        setCalcState(calcState.slice(calcState.indexOf("=") + 1) + value);
        setCurrState(value);
        return;
      }
      if (
        calcState.at(-1) === "/" ||
        calcState.at(-1) === "*" ||
        calcState.at(-1) === "-" ||
        calcState.at(-1) === "+"
      ) {
        if (
          calcState.at(-2) === "/" ||
          calcState.at(-2) === "*" ||
          calcState.at(-2) === "-" ||
          calcState.at(-2) === "+"
        ) {
          setCalcState(calcState.slice(0, -2) + value);
          setCurrState(value);
          return;
        }
        setCalcState(calcState.replace(calcState.at(-1), value));
        setCurrState(value);
        return;
      }
    }
    if (value === "-") {
      if (
        calcState.at(-1) === "/" ||
        calcState.at(-1) === "*" ||
        calcState.at(-1) === "-" ||
        calcState.at(-1) === "+"
      ) {
        setCalcState(calcState + value);
        setCurrState(value);
        return;
      }
    }
    if (
      currState === "/" ||
      currState === "*" ||
      currState === "-" ||
      currState === "+"
    ) {
      if (currState === value) return;
      if (value === "/" || value === "*" || value === "-" || value === "+") {
        setCalcState(calcState.replace(calcState.at(-1), value));
        setCurrState(value);
        return;
      }

      if (value === ".") {
        setCalcState(calcState + "0.");
        setCurrState("0.");
        return;
      }
      setCalcState(calcState + value);
      setCurrState(value);
      return;
    }
    if (calcState.includes("=")) {
      if (
        value === "EQUALS" ||
        value === "/" ||
        value === "*" ||
        value === "-" ||
        value === "+"
      )
        return;
      setCalcState(value);
      setCurrState(value);
      return;
    }
    if (value === "EQUALS") {
      if (calcState.includes("=")) return;
      setCalcState(calcState + "=" + eval(calcState));
      setCurrState(eval(calcState));
      return;
    }
    if (currState !== "0") {
      if (value === "/" || value === "*" || value === "-" || value === "+") {
        setCalcState(calcState + value);
        setCurrState(value);
        return;
      }
    }
    if (currState === "0") {
      if (value === "0") return;
      if (value === ".") {
        setCalcState(calcState + value);
        setCurrState(currState + value);
        return;
      }
      if (calcState === "") {
        setCurrState(value);
        return;
      }
      setCalcState(value);
      setCurrState(value);
      return;
    }
    if (currState.includes(".") && value === ".") return;
    setCalcState(calcState + value);
    setCurrState(currState + value);
    return;
  }

  return (
    <div className="App">
      <main>
        <section className="container" style={{ maxWidth: 450 }}>
          <div className="fs-4 fw-bold text-end">{calcState}</div>
          <div className="fs-3 fw-bold text-end" id="display">
            {currState}
          </div>
          <div id="buttons">
            <div className="row g-2 mb-2">
              <div className="col-6">
                <button
                  type="button"
                  className="w-100 btn btn-danger fs-2 fw-bold"
                  style={{ aspectRatio: 2 / 1 }}
                  id="clear"
                  onClick={() => addCalculation("CLEAR")}
                >
                  AC
                </button>
              </div>
              <div className="col-3">
                <button
                  type="button"
                  className="w-100 btn btn-info fs-2 fw-bold"
                  style={{ aspectRatio: 1 }}
                  id="divide"
                  onClick={() => addCalculation("/")}
                >
                  /
                </button>
              </div>
              <div className="col-3">
                <button
                  type="button"
                  className="w-100 btn btn-info fs-2 fw-bold"
                  style={{ aspectRatio: 1 }}
                  id="multiply"
                  onClick={() => addCalculation("*")}
                >
                  X
                </button>
              </div>
            </div>
            <div className="row g-2 mb-2">
              <div className="col-3">
                <button
                  type="button"
                  className="w-100 btn btn-secondary fs-2 fw-bold"
                  style={{ aspectRatio: 1 }}
                  id="seven"
                  onClick={() => addCalculation("7")}
                >
                  7
                </button>
              </div>
              <div className="col-3">
                <button
                  type="button"
                  className="w-100 btn btn-secondary fs-2 fw-bold"
                  style={{ aspectRatio: 1 }}
                  id="eight"
                  onClick={() => addCalculation("8")}
                >
                  8
                </button>
              </div>
              <div className="col-3">
                <button
                  type="button"
                  className="w-100 btn btn-secondary fs-2 fw-bold"
                  style={{ aspectRatio: 1 }}
                  id="nine"
                  onClick={() => addCalculation("9")}
                >
                  9
                </button>
              </div>
              <div className="col-3">
                <button
                  type="button"
                  className="w-100 btn btn-info fs-2 fw-bold"
                  style={{ aspectRatio: 1 }}
                  id="subtract"
                  onClick={() => addCalculation("-")}
                >
                  -
                </button>
              </div>
            </div>
            <div className="row g-2 mb-2">
              <div className="col-3">
                <button
                  type="button"
                  className="w-100 btn btn-secondary fs-2 fw-bold"
                  style={{ aspectRatio: 1 }}
                  id="four"
                  onClick={() => addCalculation("4")}
                >
                  4
                </button>
              </div>
              <div className="col-3">
                <button
                  type="button"
                  className="w-100 btn btn-secondary fs-2 fw-bold"
                  style={{ aspectRatio: 1 }}
                  id="five"
                  onClick={() => addCalculation("5")}
                >
                  5
                </button>
              </div>
              <div className="col-3">
                <button
                  type="button"
                  className="w-100 btn btn-secondary fs-2 fw-bold"
                  style={{ aspectRatio: 1 }}
                  id="six"
                  onClick={() => addCalculation("6")}
                >
                  6
                </button>
              </div>
              <div className="col-3">
                <button
                  type="button"
                  className="w-100 btn btn-info fs-2 fw-bold"
                  style={{ aspectRatio: 1 }}
                  id="add"
                  onClick={() => addCalculation("+")}
                >
                  +
                </button>
              </div>
            </div>
            <div className="row g-2 mb-2">
              <div className="col-9">
                <div className="row g-2 mb-2">
                  <div className="col-4">
                    <button
                      type="button"
                      className="w-100 btn btn-secondary fs-2 fw-bold"
                      style={{ aspectRatio: 1 }}
                      id="one"
                      onClick={() => addCalculation("1")}
                    >
                      1
                    </button>
                  </div>
                  <div className="col-4">
                    <button
                      type="button"
                      className="w-100 btn btn-secondary fs-2 fw-bold"
                      style={{ aspectRatio: 1 }}
                      id="two"
                      onClick={() => addCalculation("2")}
                    >
                      2
                    </button>
                  </div>
                  <div className="col-4">
                    <button
                      type="button"
                      className="w-100 btn btn-secondary fs-2 fw-bold"
                      style={{ aspectRatio: 1 }}
                      id="three"
                      onClick={() => addCalculation("3")}
                    >
                      3
                    </button>
                  </div>
                </div>
                <div className="row g-2 mb-2">
                  <div className="col-8">
                    <button
                      type="button"
                      className="w-100 btn btn-secondary fs-2 fw-bold"
                      style={{ aspectRatio: 2 / 1 }}
                      id="zero"
                      onClick={() => addCalculation("0")}
                    >
                      0
                    </button>
                  </div>
                  <div className="col-4">
                    <button
                      type="button"
                      className="w-100 btn btn-secondary fs-2 fw-bold"
                      style={{ aspectRatio: 1 }}
                      id="decimal"
                      onClick={() => addCalculation(".")}
                    >
                      .
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-3 pb-2">
                <button
                  type="button"
                  className="w-100 h-100 btn btn-warning fs-2 fw-bold"
                  id="equals"
                  onClick={() => addCalculation("EQUALS")}
                >
                  =
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
