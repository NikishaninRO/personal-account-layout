import React from "react";
import Navbar from "./Navbar";
import Jumbotrom from "./Jumbotrom";
import CardProfile from "./CardProfile";
import CardStats from "./CardStats";
import Table from "./Table";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Jumbotrom />
      <div className="row" style ={{width: "100%"}}>
        <CardProfile />
        <CardStats />
      </div>
      <Table />
      <Footer/>
    </>
  );
}
