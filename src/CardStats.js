import React from "react";
import "./CardStats.css";

export default function CardStats(props) {
  return (
    <div className="col-lg-5 col-md-5 col-sm-12">
      <div className="card stats">
        <div className="card-header">Статистика</div>
        <div className="card-body">
          <div className="card-text">
            <span className="title">На платформе:</span> 2 года. <br />
            <span className="title">Добавлено работ:</span> {`${props.worksNumber}.`} <br />
            <span className="title">Средняя уникальность:</span> {props.averUniqueness > 0 ? `${props.averUniqueness}%.` : "-"} <br />
            <span className="title">Языки работ:</span> русский, английский.
          </div>
        </div>
      </div>
    </div>
  );
}
