import React, { useState, useContext } from "react";
import AuthenticationContext from "../context/AuthenticationContext";

const Results = ({
  initialWeight,
  desiredWeight,
  height,
  currentDate,
  endDate,
  getCurrentBmiText,
  getDesiredBmiText,
}) => {
  let cache = "";

  const [result] = useState("0");

  const messages = {
    EmptyDescAndValue: "Incorrectly set values",
  };

  const validCalendarDate = () => {
    return currentDate < endDate;
  };

  const validInitialWeight = () => {
    return parseInt(initialWeight) > 30;
  };

  const validDesiredWeight = () => {
    return parseInt(desiredWeight) > 30;
  };

  const validHeigt = () => {
    return parseInt(height) > 150;
  };

  const validInputValues = () => {
    return (
      validCalendarDate() &&
      validInitialWeight() &&
      validDesiredWeight() &&
      validHeigt()
    );
  };

  const {
    looseWeight,
    gainWeight,
    currentBMI,
    desiredBMI,
    numbersOfDays,
    isClickedCountButton,
  } = useContext(AuthenticationContext);

  const loosedWeight = looseWeight > 0;
  const text = loosedWeight ? "loose" : "gain";
  const gainedWeight = gainWeight > 0;
  const changeWeight = loosedWeight || gainedWeight;

  const KilogPerDay = looseWeight / numbersOfDays;

  const oneWeek = 7;

  const WeightPerDay = Math.abs(KilogPerDay).toFixed(2);
  const KiloPerWeek = Math.abs(looseWeight / (numbersOfDays / oneWeek)).toFixed(
    2
  );

  return (
    <>
      {isClickedCountButton()
        ? validInputValues()
          ? (cache = (
              <section className="results">
                <p className="resultParagraf">
                  {changeWeight ? "You want " + text + " " : ""}
                  <strong>
                    {loosedWeight ? Math.abs(looseWeight) + " kg" : ""}
                  </strong>
                  <strong>
                    {gainedWeight ? Math.abs(gainWeight) + " kg " : ""}
                  </strong>
                </p>
                <p className="resultParagraf">
                  {getCurrentBmiText() === "" ? "" : "Your current BMI is"}{" "}
                  <strong>{result ? currentBMI : true}</strong> {"("}
                  {getCurrentBmiText()}
                  {")"}
                </p>
                <p className="resultParagraf">
                  {getDesiredBmiText() === "" ? "" : "Your desired BMI is"}{" "}
                  <strong>
                    <strong>{result ? desiredBMI : true}</strong>{" "}
                  </strong>{" "}
                  {"("}
                  {getDesiredBmiText()}
                  {")"}
                </p>
                <p className="resultParagraf">
                  {"You should"} {changeWeight ? text : ""}{" "}
                  <strong>
                    {changeWeight ? WeightPerDay : ""} {"kg"}
                  </strong>{" "}
                  {"per day"}
                </p>
                <p className="resultParagraf">
                  {"You should"} {changeWeight ? text : ""}{" "}
                  <strong>
                    {changeWeight ? KiloPerWeek : ""} {"kg"}
                  </strong>{" "}
                  {"per week"}
                </p>
              </section>
            ))
          : (cache = (
              <p className="results" style={{ color: "red" }}>
                {" "}
                {messages.EmptyDescAndValue}
              </p>
            ))
        : cache}
    </>
  );
};
export default Results;
