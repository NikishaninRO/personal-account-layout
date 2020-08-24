/* eslint-disable react/prop-types */
import React from "react";
import "./CardProfile.css";
import CardProfileModal from "./CardProfileModal";

export default function CardProfile(props) {
  return (
    <div className="col-lg-7 col-md-7 col-sm-12">
      <div className="card profile">
        <div className="card-header">Ваш профиль</div>
        <div className="card-body">
          <h5 className="card-title">{props.profileInfo.name}</h5>
          <div className="card-text">
            <span className="title">Научная степень:</span>{" "}
            {props.profileInfo.scientificDegree} <br />
            <span className="title">Специализация:</span>{" "}
            {props.profileInfo.specialization} <br />
            <button
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#cardProfileModal"
            >
              Редактировать
            </button>
            <CardProfileModal profileInfo={props.profileInfo} handleSubmit={props.handleSubmit}/>
          </div>
        </div>
      </div>
    </div>
  );
}
