import React, { useState } from "react";
import Navbar from "./Navbar";
import Jumbotrom from "./Jumbotrom";
import CardProfile from "./CardProfile";
import CardStats from "./CardStats";
import Table from "./Table";
import $ from "jquery";
import { profileInfo } from "./accountDate";

export default function App() {
  const [profile, setProfile] = useState(profileInfo);

  function handleSubmit(event) {
    const e = event.target;
    const fields = e.querySelectorAll("input");
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
      <Jumbotrom />
      <div className="row" style={{ width: "100%" }}>
        <CardProfile profileInfo={profile} handleSubmit={handleSubmit} />
        <CardStats />
      </div>
      <Table />
    </>
  );
}
