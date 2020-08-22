import React from "react";
import JumbotromModalForm from "./JumbotromModalForm";

export default function JumbotromModal() {
  return (
    <div
      className="modal fade"
      id="jumbotromModal"
      data-backdrop="static"
      data-keyboard="false"
      tabIndex="-1"
      aria-labelledby="jumbotromModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="jumbotromModalLabel">
              Новая работа
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
            <JumbotromModalForm />
          </div>
        </div>
      </div>
    </div>
  );
}
