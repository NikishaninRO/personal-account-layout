import React from "react";

export default function JumbotromModalForm() {
  return (
    <form>
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
        Подтвердить изменеия
      </button>
    </form>
  );
}
