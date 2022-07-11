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

export default function MenuDrawer({profile}) {
  
  const { user } = useContext(UserContext);
  const [state, setState] = React.useState({
    left: false,
  });

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
          "Novas Noticias",
          "Mais Votadas",
          "Saúde",
          "Tecnologia",
          "Esporte",
          "Entretenimento",
          "Gastronomia",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      {user!==null ? (
        <List>
          <ListItem key={"Perfil"} disablePadding>
            <ListItemButton onClick={profile}>
              <ListItemText primary={"Perfil"} />
            </ListItemButton>
          </ListItem>
      </List>
      ):(
        <p>a</p>
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
