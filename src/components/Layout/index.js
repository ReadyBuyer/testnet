import React from "react";
import Navbar from "./Navbar";
import React from "react";
import getConfig from "./config";
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

index.propTypes = {};

export default Layout;
