/* eslint-disable react/prop-types */
import React from "react";

export default function CardProfileModalForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <div className="form-group">
                <label className="form-label">ФИО:</label>
                <input type="text" className="form-control" defaultValue={props.profileInfo.name} required></input>
            </div>
            <div className="form-group">
                <label className="form-label">Научная степень:</label>
                <input type="text" className="form-control" defaultValue={props.profileInfo.scientificDegree} required></input>
            </div>
            <div className="form-group">
                <label className="form-label">Специализация:</label>
                <input type="text" className="form-control" defaultValue={props.profileInfo.specialization} required></input>
            </div>
            <button type="submit" className="btn btn-primary">Подтвердить изменеия</button>
        </form>
    );
}