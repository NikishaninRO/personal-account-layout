/* eslint-disable react/prop-types */
import React from "react";
import "./Table.css";

export default function Table(props) {
  const worksArray = Array.from(props.worksInfo);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <table className="table table-bordered">
            <thead className="thead-light">
              <tr>
                <th>Название работы</th>
                <th>Дата загрузки</th>
                <th>Научный руководитель</th>
                <th>Уникальность</th>
              </tr>
            </thead>
            <tbody>
              {worksArray.map((work) => (
                <tr key={work[0]}>
                  <td>{work[0]}</td>
                  <td data-date>{work[1].downloadDate}</td>
                  <td>{work[1].scientificАdviser}</td>
                  <td>{work[1].uniqueness}</td>
                  <td data-close>
                    <button type="button" className="close" data-work={work[0]} onClick={props.onClick}>
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
