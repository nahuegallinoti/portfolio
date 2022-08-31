import React, { useState, useEffect } from "react";
import Context from "./Context";
import {
  projects as currentProjects,
  TimeLineData as timeline,
} from "../constants/constants";

const Provider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [timeLine, setTimeLine] = useState([]);

  useEffect(() => {
    setProjects(currentProjects);
    setTimeLine(timeline);
  }, []);

  return (
    <Context.Provider value={{ projects, setProjects, timeLine, setTimeLine }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
