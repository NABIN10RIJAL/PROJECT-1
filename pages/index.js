import * as React from "react";

import Appbar from "../src/components/Appbar";
import Drawer from "../src/components/Drawer";
import Header from "../src/components/Header";

export default function Index() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => {
    setState(open);
  };
  return (
    <>
      <Appbar toggleDrawer={toggleDrawer} />
      <Drawer state={state} toggleDrawer={toggleDrawer} />
      <Header/>
    </>
  );
}
