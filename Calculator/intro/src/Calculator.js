import React from "react";
import { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import NumberFormat from "react-number-format";
function Calculator() {
   
  const [preState, setPreState] = useState("");
  const [curState, setCurState] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  const inputNum = (e) => {
    if (curState.includes(".") && e.target.innerText === ".") return;

    if (total) {
      setPreState("");
    }

    curState
      ? setCurState((pre) => pre + e.target.innerText)
      : setCurState(e.target.innerText);
    setTotal(false);
  };

  useEffect(() => {
    setInput(curState);
  }, [curState]);

  useEffect(() => {
    setInput("0");
  }, []);








  const operatorType = (e) =>{
 setTotal(false);
    setOperator(e.target.innerText);
    if (curState === "") return;
    if (preState !== "") {
      equals();
    } else {
      setPreState(curState);
      setCurState("");
    }
  }



  const equals = (e) =>{
    if (e?.target.innerText === "=") {
      setTotal(true);
    }
    let cal;
    switch (operator) {
      case "/":
        cal = String(parseFloat(preState) / parseFloat(curState));
        break;

      case "+":
        cal = String(parseFloat(preState) + parseFloat(curState));
        break;
      case "*":
        cal = String(parseFloat(preState) * parseFloat(curState));
        break;
      case "-":
        cal = String(parseFloat(preState) - parseFloat(curState));
        break;
      default:
        return;
    }
    setInput("");
    setPreState(cal);
    setCurState("");
  }
  
  const minusPlus = (e) =>{
    if (curState.charAt(0) === "-") {
      setCurState(curState.substring(1));
    } else {
      setCurState("-" + curState);
    }
  }
  const percent = (e) =>{
    preState
    ? setCurState(String((parseFloat(curState) / 100) * preState))
    : setCurState(String(parseFloat(curState) / 100));
  }
  
  const reset = (e) =>{
    setPreState("");
    setCurState("");
    setInput("0");
  }
  

  
   return (
    <div>
      <table className="Table">
        <tr className="th">
          <th colSpan="4">
          {input !== "" || input === "0" ? (
            <NumberFormat
              value={input}
              displayType={"text"}
              thousandSeparator={true}
            />
          ) : (
            <NumberFormat
              value={preState}
              displayType={"text"}
              thousandSeparator={true}
            />
          )}
          
          </th>
        </tr>
        <tr>
          <td className="islemler"> <Button onClick={reset} className="button-islem">AC</Button> </td>
          <td className="islemler"> <Button onClick={percent}  className="button-islem">%</Button> </td>
          <td className="islemler"> <Button onClick={minusPlus}  className="button-islem">+/-</Button> </td>
          <td className="islemler"> <Button onClick={operatorType}  className="button-islem">/</Button> </td>
        </tr>
        <tr>
          <td className="rakamlar"><Button onClick={inputNum}  className="button-rakam">7</Button></td>
          <td className="rakamlar"><Button onClick={inputNum} className="button-rakam">8</Button></td>
          <td className="rakamlar"><Button onClick={inputNum} className="button-rakam">9</Button></td>
          <td className="islemler"><Button onClick={operatorType}  className="button-islem">*</Button></td>
        </tr>
        <tr >
          <td className="rakamlar"><Button onClick={inputNum} className="button-rakam">4</Button></td>
          <td className="rakamlar"><Button onClick={inputNum} className="button-rakam">5</Button></td>
          <td className="rakamlar"><Button onClick={inputNum}  className="button-rakam">6</Button></td>
          <td className="islemler"><Button onClick={operatorType}  className="button-islem">-</Button></td>
        </tr>
        <tr >
          <td className="rakamlar"><Button onClick={inputNum}  className="button-rakam">1</Button></td>
          <td className="rakamlar"><Button onClick={inputNum}  className="button-rakam">2</Button></td>
          <td className="rakamlar"><Button onClick={inputNum}  className="button-rakam">3</Button></td>
          <td className="islemler"><Button onClick={operatorType}  className="button-islem">+</Button></td>
        </tr>
        <tr >
          <td colSpan="2" className="rakamlar"><Button onClick={inputNum}  className="button-rakam">0</Button></td>
          <td className="rakamlar"><Button onClick={inputNum}  className="button-rakam">.</Button></td>
          <td className="islemler"><Button onClick={equals}  className="button-islem">=</Button></td>
        </tr>
      </table>
      
      
      

    </div>

  );

  
}
export default Calculator