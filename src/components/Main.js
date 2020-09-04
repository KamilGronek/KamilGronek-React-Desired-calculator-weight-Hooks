import React from "react";
import Article from "./Article";
import Results from "./Results";

const Main = ({
  handleCountButton,
  handleChangeEvent,
  initialWeight,
  desiredWeight,
  height,
  currentDate,
  endDate,
  getCurrentBmiText,
  getDesiredBmiText,
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
            initialWeight={initialWeight}
            desiredWeight={desiredWeight}
            height={height}
            currentDate={currentDate}
            endDate={endDate}
            getCurrentBmiText={getCurrentBmiText}
            getDesiredBmiText={getDesiredBmiText}
          />
        </section>
      </main>
    </>
  );
};

export default Main;
