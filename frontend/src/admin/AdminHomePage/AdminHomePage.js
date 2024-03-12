import React, { useState } from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import "./AdminHomePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import AdminFooter from "../AdminFooter/AdminFooter";

function AdminHomePage() {

  return (
    <div>
      <AdminNavbar />

      <AdminFooter/>
    </div>
  );
}

export default AdminHomePage;
