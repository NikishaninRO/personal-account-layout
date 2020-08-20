import React from "react";
import "./Jumbortom.css";

export default function Jumbotrom() {
  return (
    <div className="container-fluid jumbotrom">
      <h1>Портфолио</h1>
      <p>
        Это место, где собраны ваши научные публикации. Здесь вы можете
        добавлять свои научные работы, получать информацию об их уникальности и
        смотреть отзывы ваших научных руководителей.
      </p>
      <button className="btn btn-primary">Добавить работу</button>
    </div>
  );
}
