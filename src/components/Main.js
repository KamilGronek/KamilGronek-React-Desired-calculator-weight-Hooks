import React from "react";

import Article from "./Article";
import Results from "./Results";

const Main = ({
  handleCountButton,
  handleChangeEvent,
  initialWeight,
  desiredWeight,
  height,
  looseWeight,
  gainWeight,
  currentBMI,
  desiredBMI,
  currentDate,
  endDate,
  numbersOfDays,
  getCurrentBmiText,
  getDesiredBmiText,
  isClickedCountButton,
}) => {
  return (
    <>
      <main className="calculator_content">
        <section className="progress_session">
          <Article
            handleChangeEvent={handleChangeEvent}
            initialWeight={initialWeight}
            desiredWeight={desiredWeight}
            height={height}
            currentDate={currentDate}
            endDate={endDate}
          />
          <button onClick={handleCountButton} className="button">
            Count
          </button>
          <Results
            looseWeight={looseWeight}
            gainWeight={gainWeight}
            initialWeight={initialWeight}
            desiredWeight={desiredWeight}
            height={height}
            currentBMI={currentBMI}
            desiredBMI={desiredBMI}
            currentDate={currentDate}
            endDate={endDate}
            numbersOfDays={numbersOfDays}
            getCurrentBmiText={getCurrentBmiText}
            getDesiredBmiText={getDesiredBmiText}
            isClickedCountButton={isClickedCountButton}
          />
        </section>
      </main>
    </>
  );
};

export default Main;
