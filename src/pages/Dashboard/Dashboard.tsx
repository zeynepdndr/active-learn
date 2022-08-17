import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../Login/Login";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      {true && <Login />}
      {false && <>welcome to dashboard</>}
    </>
  );
};

export default Dashboard;
