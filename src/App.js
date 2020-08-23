import React, { useState, useReducer } from "react";
import Navbar from "./Navbar";
import Jumbotrom from "./Jumbotrom";
import CardProfile from "./CardProfile";
import CardStats from "./CardStats";
import Table from "./Table";
import $ from "jquery";
import { profileInfo, worksInfo } from "./accountDate";

function worksReducer(state, action) {
  let newState = new Map(state);
  switch (action.type) {
    case "ADD":
      const date = new Date();
      newState.set(action.payload[0], {
        downloadDate: `${date.getDate()}.${
          date.getMonth() + 1 >= 10
            ? date.getMonth() + 1
            : "0" + (date.getMonth() + 1)
        }.${date.getFullYear()}`,
        scientificАdviser: action.payload[1],
        uniqueness: Math.ceil(Math.random() * 100) + "%",
      });
      return newState;
    case "REMOVE":
      newState.delete(action.payload);
      return newState;
    default:
      return newState;
  }
}

export default function App() {
  const [profile, setProfile] = useState(profileInfo);
  const [works, dispatchWorks] = useReducer(worksReducer, worksInfo);

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
        <CardStats />
      </div>
      {Array.from(works).length > 0 ? (
        <Table worksInfo={works} onClick={handleClick} />
      ) : (
        <div className="container">
          <div className="alert alert-primary" role="alert">
            Вы еще не опубликовали ни одной работы. <a href={"#jumbotrom"}>Опубликовать новую работу</a>
          </div>
        </div>
      )}
    </>
  );
}
