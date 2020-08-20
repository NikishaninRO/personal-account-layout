import React from "react";
import Navbar from "./Navbar";
import Jumbotrom from "./Jumbotrom";
import CardProfile from "./CardProfile";
import CardStats from "./CardStats";
import Table from "./Table";

export default function App() {
  return (
    <>
      <Navbar />
      <Jumbotrom />
      <div className="row">
        <CardProfile />
        <CardStats />
      </div>
      <Table />
    </>
  );
}
