import React, { useEffect, useState } from "react";
import { Switch, useLocation } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";
const CustomSwitch = (props) => {
  const [progress, setProgress] = useState(false);
  const [prevLoc, setPrevLoc] = useState("");
  const location = useLocation();
  useEffect(() => {
    setPrevLoc(location.pathname);
    if (prevLoc === location.pathname) {
      return;
    }
    setProgress(true);
  }, [location, prevLoc]);

  useEffect(() => {
    setProgress(false);
  }, [prevLoc]);
  return (
    <>
      {progress && <TopBarProgress />}
      <Switch>{props.children}</Switch>
    </>
  );
};

export default CustomSwitch;
