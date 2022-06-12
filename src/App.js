import React, { useState } from "react";
import { ReactDOM } from "react";
import "./App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Popover from "react-bootstrap/Popover";

function App() {
  const [numberOne, setNumberOne] = useState("");
  const [numberTwo, setNumberTwo] = useState("");
  const [operation, setOperation] = useState("+");
  const [resultValue, setResultValue] = useState("");

  const OnSubmitClick = (e) => {
    let evaluation = "";
    try {
      evaluation = eval(numberOne + operation + numberTwo);
    } catch (error) {
      evaluation = "ERROR";
    }
    setResultValue(evaluation);
  };
  return (
    <div className="formcomponents-centered">
      <div className="text-alligned">
        <h1>Calculator Operations</h1>
      </div>
      <div className="component-maxwidth">
        <Form.Label htmlFor="NumOne">Number One</Form.Label>
        <Form.Control type="text" onChange={(e) => {setNumberOne(e.target.value);}} value={numberOne} id="NumOne"/>
      </div>
      <div className="component-maxwidth">
        <Form.Label htmlFor="NumTwo">Number Two</Form.Label>
        <Form.Control type="text" onChange={(e) => {setNumberTwo(e.target.value);}} value={numberTwo} id="NumTwo"/>
      </div>
      <div className="component-maxwidth">
        <Form.Label htmlFor="operation">Operation</Form.Label>
        <Form.Select aria-label="Default select example" onChange={(e) => {setOperation(e.target.value);}} value={operation} id="operation">
          <option value="+">ADD</option>
          <option value="-">SUB</option>
          <option value="*">MUL</option>
          <option value="/">DIV</option>
        </Form.Select>
      </div>
      <div className="center">
        <Button variant="warning" disabled={!(operation !== undefined && numberTwo !== undefined && numberOne !== undefined)}
          onClick={(e) => {OnSubmitClick(e.target.value); }}> Calculate </Button>
      </div>

      <div className="text-alligned">
        <h2>
          {" "}
          {numberOne} {operation} {numberTwo} is {resultValue}
        </h2>
      </div>
      
    </div>
  );
}

export default App;
