import React, { useState } from "react";
import Main from "./components/Main";
import AuthenticationContext from "./context/AuthenticationContext";

import "./App.css";

const App = (props) => {
  // const [initialWeight, setInitialWeight] = useState("30");
  // const [desiredWeight, setDesiredWeight] = useState("30");
  // const [height, setHeight] = useState("150");

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const todayISO = today.toISOString().slice(0, 10);
  const tomorrowISO = tomorrow.toISOString().slice(0, 10);

  const [values, setValues] = useState({
    initialWeight: "30",
    desiredWeight: "30",
    height: "150",
  });

  const [looseWeight, setLooseWeight] = useState("");
  const [gainWeight, setGainWeight] = useState("");
  const [currentBMI, setCurrentBMI] = useState("");
  const [desiredBMI, setDesiredBMI] = useState("");
  const [currentDate, setCurrentDate] = useState(todayISO);
  const [endDate, setEndDate] = useState(tomorrowISO);
  const [numbersOfDays, setNumbersOfDays] = useState("");
  const [clickedCountButton, setClickedCountButton] = useState(false);

  const handleChangeEvent = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleCountButton = () => {
    getLoseandGain();
    getNumberofDays();
    getBMI();
    setClickedCountButton(true);
  };

  const isClickedCountButton = () => {
    return clickedCountButton;
  };

  const getLoseandGain = () => {
    const looseWeight = values.initialWeight - values.desiredWeight;
    const gainWeight = values.desiredWeight - values.initialWeight;

    setLooseWeight(looseWeight);
    setGainWeight(gainWeight);
  };

  const getNumberofDays = () => {
    const oneDay = 24 * 60 * 60 * 1000;
    const dateDiffrence = new Date(currentDate) - new Date(endDate);
    const numbersOfDays = Math.round(Math.abs(dateDiffrence / oneDay));

    setCurrentDate(currentDate);
    setEndDate(endDate);
    setNumbersOfDays(numbersOfDays);
  };

  const getBMI = () => {
    const currentBMI = (
      values.initialWeight /
      (values.height / 100) ** 2
    ).toFixed(1);

    const desiredBMI = (
      values.desiredWeight /
      (values.height / 100) ** 2
    ).toFixed(1);

    setCurrentBMI(currentBMI);
    setDesiredBMI(desiredBMI);
  };

  const getCurrentBmiText = () => {
    if (currentBMI <= 0) {
      return "";
    } else if (currentBMI < "15") {
      return "Very severely underweight";
    } else if (currentBMI < "16") {
      return "Severely underweight";
    } else if (currentBMI < "18,5") {
      return "Underweight";
    } else if (currentBMI < "25") {
      return "Normal";
    } else if (currentBMI < "30") {
      return "Overweight";
    } else if (currentBMI < "35") {
      return "Moderately obese ";
    } else if (currentBMI < "40") {
      return "Severely obese ";
    } else {
      return "Very severely obese ";
    }
  };

  const getDesiredBmiText = () => {
    if (desiredBMI <= 0) {
      return "";
    } else if (desiredBMI < "15") {
      return "Very severely underweight";
    } else if (desiredBMI < "16") {
      return "Severely underweight";
    } else if (desiredBMI < "18,5") {
      return "Underweight";
    } else if (desiredBMI < "25") {
      return "Normal";
    } else if (desiredBMI < "30") {
      return "Overweight";
    } else if (desiredBMI < "35") {
      return "Moderately obese ";
    } else if (desiredBMI < "40") {
      return "Severely obese ";
    } else {
      return "Very severely obese ";
    }
  };

  return (
    <div className="App">
      <header className="header">Desired web calculator</header>
      <AuthenticationContext.Provider
        value={{
          looseWeight,
          gainWeight,
          currentBMI,
          desiredBMI,
          numbersOfDays,
          isClickedCountButton,
        }}
      >
        <Main
          handleCountButton={handleCountButton}
          handleChangeEvent={handleChangeEvent}
          initialWeight={values.initialWeight}
          desiredWeight={values.desiredWeight}
          height={values.height}
          currentDate={currentDate}
          endDate={endDate}
          getCurrentBmiText={getCurrentBmiText}
          getDesiredBmiText={getDesiredBmiText}
        />
      </AuthenticationContext.Provider>
    </div>
  );
};

export default App;
