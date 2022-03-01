import * as React from "react";
import Box from "@mui/material/Box";

// import Image from "next/image";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
// import Appbar from "./Appbar";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import AppsIcon from "@mui/icons-material/Apps";
import { Button } from "@mui/material";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
// import { flexbox, height } from "@mui/system";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import Avatar from "@mui/material/Avatar";
// import Stack from "@mui/material/Stack";

const TemporaryDrawer = ({ menubar, state, toggleDrawer }) => {
  const list = (anchor = "right") => (
    <Box role="presentation" onClick={() => toggleDrawer(false)}>
      <div
      // style={{
      //   display: "flex",
      //   flexDirection: "column",
      //   justifyContent: "space-between",
      //   height: "99vh",
      // }}
      >
        {/* <Image sx={imageSrc}
            src="/NABIN.jpg"
            alt="Picture of the author"

        /> */}
        <List sx={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              alt="NABIN PIC"
              src="/NABIN.jpg"
              sx={{ width: 100, height: 100, justifyContent: "center" }}
            />
          </div>

          <Divider />
          <Button sx={btnDrawer} className="btnDrawer">
            <HomeIcon /> Home
          </Button>
          <Divider />
          <Button className="btnDrawer" sx={btnDrawer}>
            <AssignmentIndIcon /> Resume
          </Button>
          <Divider />
          <Button className="btnDrawer" sx={btnDrawer}>
            <AppsIcon /> portfolio
          </Button>
          <Divider />
          <Button className="btnDrawer" sx={btnDrawer}>
            <ContactPhoneIcon /> Contact Me
          </Button>
        </List>
        <Divider />

        <List
        
          sx={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "35em",
          }}
        >
    
          <LinkedInIcon sx={accounts} className="accounts" />

          <FacebookIcon sx={accounts} className="accounts" />
          <GitHubIcon sx={accounts} className="accounts" />
        </List>
        <Divider />
      </div>
      {/* <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <React.Fragment>
      <Drawer anchor={"right"} open={state} onClose={() => toggleDrawer(false)}>
        {list("right")}
      </Drawer>
    </React.Fragment>
  );
};
export default TemporaryDrawer;

const btnDrawer = {
  minHeight: "auto",
  minWidth: "auto",
  backgroundColor: "green",
  color: "#FFFFFF",
  boxShadow:
    "0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)",
  border: "none",
  borderRadius: "3px",
  position: "relative",
  padding: "12px 30px",
  margin: ".3125rem 1px",
  fontSize: "12px",
  fontWeight: "400",
  textTransform: "uppercase",
  letterSpacing: "0",
  willChange: "box-shadow, transform",
  transition:
    "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
  lineHeight: "1.42857143",
  textAlign: "center",
  whiteSpace: "nowrap",
  verticalAlign: "middle",
  touchAction: "manipulation",
  cursor: "pointer",
};
const accounts = {
  cursor: "pointer",
};
// const imageSrc = {
//   width: "200",
//   height: "200",
// };
