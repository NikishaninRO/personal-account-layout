/* eslint-disable react/prop-types */
import React from "react";

export default function JumbotromModalForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="form-group">
        <label className="form-label">Название работы:</label>
        <input
          type="text"
          className="form-control"
          defaultValue={""}
          required
        ></input>
      </div>
      <div className="form-group">
        <label className="form-label">Научный руководитель:</label>
        <input
          type="text"
          className="form-control"
          defaultValue={""}
          required
        ></input>
      </div>
      <button type="submit" className="btn btn-primary">
        Добавить
      </button>
    </form>
  );
}
