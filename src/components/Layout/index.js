import React from "react";
import Navbar from "./Navbar";
import getConfig from "../../config";
const { networkId } = getConfig(process.env.NODE_ENV || "development");

const Layout = (props) => {
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

export default Layout;
