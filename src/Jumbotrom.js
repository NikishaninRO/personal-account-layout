import React from "react";
import "./Jumbortom.css";
import JumbortomModal from "./jumbotromModal";

export default function Jumbotrom() {
  return (
    <div className="container-fluid jumbotrom">
      <h1>Портфолио</h1>
      <p>
        Это место, где собраны ваши научные публикации. Здесь вы можете
        добавлять свои научные работы, получать информацию об их уникальности и
        смотреть отзывы ваших научных руководителей.
      </p>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#jumbotromModal">Добавить работу</button>
      <JumbortomModal />
    </div>
  );
}
