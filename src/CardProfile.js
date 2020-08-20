import React from "react";
import "./CardProfile.css";

export default function CardProfile() {
  return (
    <div className="col-lg-7 col-md-7 col-sm-12">
      <div className="card profile">
        <div className="card-header">Ваш профиль</div>
        <div className="card-body">
          <h5 className="card-title">Сергей Павлович Фролов</h5>
          <div className="card-text">
            <span className="title">Научная степень:</span> Магистр. <br />
            <span className="title">Специализация:</span> Инвестиционные
            проблемы экономически развивающихся рынков. <br />
            <button className="btn btn-primary">Редактировать</button>
          </div>
        </div>
      </div>
    </div>
  );
}
