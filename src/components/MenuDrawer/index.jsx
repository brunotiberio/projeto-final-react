import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { NewsContext } from "../../contexts/NewsContext";

export default function MenuDrawer({ logOut, contentCreators,createNews,profile}) {
  const { user } = useContext(UserContext);
  const { setFilter }  = useContext(NewsContext)
  const [state, setState] = React.useState({
    left: false,
  });
  function handleClick(type){
    setFilter(type)
  }
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
    sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 150 }}
    role="presentation"
    onClick={toggleDrawer(anchor, false)}
    onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          "saúde",
          "tecnologia",
          "esporte",
          "entretenimento",
          "gastronomia",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} onClick={()=>handleClick(text)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      {user?.type==="content creator" && (
        <List>
        <ListItem key={"postar noticias"} disablePadding>
          <ListItemButton>
            <ListItemText primary={"Postar Noticia"} onClick={createNews} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"profile"} disablePadding>
          <ListItemButton>
            <ListItemText primary={"profile"} onClick={profile} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"logOut"} disablePadding>
          <ListItemButton>
            <ListItemText primary={"logOut"} onClick={logOut} />
          </ListItemButton>
        </ListItem>
      </List>
      )}
      {user?.type==="company" && (
        <List>
        <ListItem key={"ver perfis"} disablePadding>
          <ListItemButton>
            <ListItemText primary={"ver perfis"} onClick={contentCreators} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"profile"} disablePadding>
          <ListItemButton>
            <ListItemText primary={"profile"} onClick={profile} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"logOut"} disablePadding>
          <ListItemButton>
            <ListItemText primary={"logOut"} onClick={logOut} />
          </ListItemButton>
        </ListItem>
      </List>
      )}
      {user?.type==="reader" && (
        <List>
        <ListItem key={"profile"} disablePadding>
          <ListItemButton>
            <ListItemText primary={"profile"} onClick={profile} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"logOut"} disablePadding>
          <ListItemButton>
            <ListItemText primary={"logOut"} onClick={logOut} />
          </ListItemButton>
        </ListItem>
      </List>
      )}
    </Box>
  );
  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            {" "}
            <DensityMediumIcon />{" "}
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );

}
