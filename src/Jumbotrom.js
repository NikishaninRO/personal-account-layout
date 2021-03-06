/* eslint-disable react/prop-types */
import React from "react";
import "./Jumbortom.css";
import JumbortomModal from "./JumbotromModal";

export default function Jumbotrom(props) {
  return (
    <div className="container-fluid jumbotrom" id="jumbotrom">
      <h1>Портфолио</h1>
      <p>
        Это место, где собраны ваши научные публикации. Здесь вы можете
        добавлять свои научные работы, получать информацию об их уникальности и
        смотреть отзывы ваших научных руководителей.
      </p>
      <button
        type="button"
        className="btn btn-primary jumbotrom"
        data-toggle="modal"
        data-target="#jumbotromModal"
      >
        Добавить работу
      </button>
      <JumbortomModal handleSubmit={props.handleSubmit}/>
    </div>
  );
}
