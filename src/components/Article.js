import React from "react";

function Article({
  initialWeight,
  desiredWeight,
  height,
  currentDate,
  endDate,
  handleChangeEvent,
}) {
  return (
    <>
      <article className="progress_section_item">
        <label className="progress_section_label">Initial weight :</label>
        <div className="progress_section_data">
          <input
            className="progress_bar_input"
            type="range"
            step="1"
            min="30"
            max="130"
            name="initialWeight"
            value={initialWeight}
            onChange={handleChangeEvent}
          />
          <p className="progress_bar_result">{initialWeight}kg</p>
        </div>
      </article>
      <article className="progess_section_item">
        <label className="progess_section_label">Desired weight :</label>
        <div className="progress_section_data">
          <input
            className="progress_bar_input"
            type="range"
            step="1"
            min="30"
            max="130"
            name="desiredWeight"
            value={desiredWeight}
            onChange={handleChangeEvent}
          />
          <p className="progress_bar_result">{desiredWeight}kg</p>
        </div>
      </article>
      <article className="progress_section_item">
        <label className="progress_section_label">Height :</label>
        <div className="progress_section_data">
          <input
            className="progress_bar_input"
            type="range"
            step="1"
            min="150"
            max="200"
            name="height"
            value={height}
            onChange={handleChangeEvent}
          />
          <p className="progress_bar_result">{height}cm</p>
        </div>
      </article>

      <article className="progess_section_item">
        <label htmlFor="date" name="start-date">
          Start date:
        </label>
        <div className="progress_section_data">
          <input
            className="progress_bar_input"
            type="date"
            name="currentDate"
            defaultValue={currentDate}
            min={currentDate}
            onChange={handleChangeEvent}
          />
        </div>
      </article>

      <article className="progress_section_item">
        <label htmlFor="date" name="end-date">
          End date:
        </label>
        <div className="progress_section_data">
          <input
            className="progress_bar_input"
            type="date"
            name="endDate"
            defaultValue={endDate}
            min={currentDate}
            onChange={handleChangeEvent}
          />
        </div>
      </article>
    </>
  );
}
export default Article;
