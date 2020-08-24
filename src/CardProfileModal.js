/* eslint-disable react/prop-types */
import React from "react";
import CardProfileModalForm from "./CardProfileModalForm";

export default function CardProfileModal(props) {
  return (
    <div
      className="modal fade"
      id="cardProfileModal"
      data-backdrop="static"
      data-keyboard="false"
      tabIndex="-1"
      aria-labelledby="cardProfileModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="cardProfileModalLabel">
              Изменение профиля
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <CardProfileModalForm
              profileInfo={props.profileInfo}
              onSubmit={props.handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
