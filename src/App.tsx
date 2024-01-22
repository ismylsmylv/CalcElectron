import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/electron-vite.animate.svg";
import Navbar from "./components/Navbar/index.jsx";
import { useAppSelector, useAppDispatch } from "./redux/hooks.js";
import "./App.scss";
import {
  getNumber,
  addition,
  subtraction,
  result,
  multiplication,
  division,
  reset,
} from "./redux/slice.js";

function App() {
  const value = useAppSelector((state) => state.calc.value);
  const number = useAppSelector((state) => state.calc.number);
  const number2 = useAppSelector((state) => state.calc.number2);
  const type = useAppSelector((state) => state.calc.type);
  const dispatch = useAppDispatch();
  console.log(value);
  return (
    <div className="calc">
      <div className="heading">Calculator</div>
      <div className="result">
        <div className="resultNumber">
          {value &&
            (number ||
              type ||
              (value && <div className="predict">{value}</div>))}
        </div>
        <button
          className="action reset"
          onClick={() => {
            dispatch(reset());
          }}
        >
          C
        </button>
      </div>

      <div className="inputs">
        <div className="row">
          <button
            className="number"
            onClick={() => {
              dispatch(getNumber("1"));
            }}
          >
            1
          </button>
          <button
            className="number"
            onClick={() => {
              dispatch(getNumber("2"));
            }}
          >
            2
          </button>
          <button
            className="number"
            onClick={() => {
              dispatch(getNumber("3"));
            }}
          >
            3
          </button>
          <button
            className="action"
            onClick={() => {
              dispatch(addition());
            }}
          >
            +
          </button>
        </div>
        <div className="row">
          <button
            className="number"
            onClick={() => {
              dispatch(getNumber("4"));
            }}
          >
            4
          </button>
          <button
            className="number"
            onClick={() => {
              dispatch(getNumber("5"));
            }}
          >
            5
          </button>
          <button
            className="number"
            onClick={() => {
              dispatch(getNumber("6"));
            }}
          >
            6
          </button>
          <button
            className="action"
            onClick={() => {
              dispatch(subtraction());
            }}
          >
            -
          </button>
        </div>
        <div className="row">
          <button
            className="number"
            onClick={() => {
              dispatch(getNumber("7"));
            }}
          >
            7
          </button>
          <button
            className="number"
            onClick={() => {
              dispatch(getNumber("8"));
            }}
          >
            8
          </button>
          <button
            className="action"
            onClick={() => {
              dispatch(multiplication());
            }}
          >
            *
          </button>
          <button
            className="action"
            onClick={() => {
              dispatch(division());
            }}
          >
            /
          </button>
        </div>
        <div className="row row4">
          <button
            className="number"
            onClick={() => {
              dispatch(getNumber("0"));
            }}
          >
            0
          </button>
          <button
            className="number"
            onClick={() => {
              dispatch(getNumber("9"));
            }}
          >
            9
          </button>
          <button
            className="action equal"
            onClick={() => {
              dispatch(result());
            }}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
