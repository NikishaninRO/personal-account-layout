import React from "react";
import "./Table.css";

export default function Table() {
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
              <tr>
                <td>Привлечение инвестиций как фактор развития экономики</td>
                <td className="date">21.05.2019</td>
                <td>Асаншоева А.М.</td>
                <td>89%</td>
              </tr>
              <tr>
                <td>The role of accounting in sustainable development</td>
                <td className="date">11.02.2019</td>
                <td>Шаляпина В.С.</td>
                <td>78%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
