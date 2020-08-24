import React, { useState, useReducer } from "react";
import Navbar from "./Navbar";
import Jumbotrom from "./Jumbotrom";
import CardProfile from "./CardProfile";
import CardStats from "./CardStats";
import Table from "./Table";
import Footer from "./Footer";
import $ from "jquery";
import { profileInfo, worksInfo } from "./accountDate";

function getUniquenessSum() {
  let sum = 0;
  for (const work of worksInfo.values()) {
    sum += parseInt(work.uniqueness);
  }
  return sum;
}

function worksReducer(state, action) {
  let newWorks = new Map(state[0]);
  let uniqueness;
  switch (action.type) {
    case "ADD":
      const date = new Date();
      uniqueness = Math.ceil(Math.random() * 100);
      newWorks.set(action.payload[0], {
        downloadDate: `${date.getDate()}.${
          date.getMonth() + 1 >= 10
            ? date.getMonth() + 1
            : "0" + (date.getMonth() + 1)
        }.${date.getFullYear()}`,
        scientificАdviser: action.payload[1],
        uniqueness: uniqueness + "%",
      });
      return [newWorks, state[1] + uniqueness];
    case "REMOVE":
      uniqueness = parseInt(newWorks.get(action.payload).uniqueness);
      newWorks.delete(action.payload);
      return [newWorks, state[1] - uniqueness];
    default:
      return [newWorks, state[1]];
  }
}

export default function App() {
  const [profile, setProfile] = useState(profileInfo);
  const [works, dispatchWorks] = useReducer(worksReducer, [
    worksInfo,
    getUniquenessSum(),
  ]);

  function handleSubmitJumbotrom(event) {
    const target = event.target;
    const fields = target.querySelectorAll("input");
    dispatchWorks({
      type: "ADD",
      payload: [fields[0].value, fields[1].value],
    });
    fields[0].value = "";
    fields[1].value = "";

    event.preventDefault();

    $("#jumbotromModal").modal("hide");
  }

  function handleClick(event) {
    const target = event.target.closest("button");
    console.log(target);
    dispatchWorks({
      type: "REMOVE",
      payload: target.dataset.work,
    });
  }

  function handleSubmitCardProfile(event) {
    const target = event.target;
    const fields = target.querySelectorAll("input");
    setProfile({
      name: fields[0].value,
      scientificDegree: fields[1].value,
      specialization: fields[2].value,
    });

    event.preventDefault();

    $("#cardProfileModal").modal("hide");
  }

  return (
    <>
      <Navbar />
      <Jumbotrom handleSubmit={handleSubmitJumbotrom} />
      <div className="row" style={{ width: "100%" }}>
        <CardProfile
          profileInfo={profile}
          handleSubmit={handleSubmitCardProfile}
        />
        <CardStats
          worksNumber={Array.from(works[0]).length}
          averUniqueness={Array.from(works[0]).length > 0 ? Math.round(works[1] / Array.from(works[0]).length) : 0}
        />
      </div>
      {Array.from(works[0]).length > 0 ? (
        <Table worksInfo={works[0]} onClick={handleClick} />
      ) : (
        <div className="container">
          <div className="alert alert-primary" role="alert">
            Вы еще не опубликовали ни одной работы.{" "}
            <a className="alert-link" href={"#jumbotrom"}>
              Опубликовать новую работу
            </a>
          </div>
        </div>
      )}
      <Footer/>
    </>
  );
}
