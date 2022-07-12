import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function BasicMenu({ profile, home, mynews, createNews, contentCreators, logOut }) {
  const { user } = useContext(UserContext);
  const [anchorCreator, setanchorCreator] = React.useState(null);
  const [anchorCompany, setanchorCompany] = React.useState(null);
  const [anchorReader, setanchorReader] = React.useState(null);
  const open = Boolean(anchorCreator);
  const openCompany = Boolean(anchorCompany);
  const openReader = Boolean(anchorReader);
  
  const handleClickCreator = (event) => {
    setanchorCreator(event.currentTarget);
  };
  const handleCloseCreator = () => {
    setanchorCreator(null);
  };
  const handleClickCompany = (event) => {
    setanchorCompany(event.currentTarget);
  };
  const handleCloseCompany = () => {
    setanchorCompany(null);
  };
  const handleClickReader = (event) => {
    setanchorReader(event.currentTarget);
  };
  const handleCloseReader = () => {
    setanchorReader(null);
  };

  return (
    <div>
      {user.type === "content creator" && (
        <>
          <Button variant="contained" size="small" onClick={createNews} >Postar Noticias</Button>
          <Avatar alt="foto de perfil" src={user.avatar} onClick={handleClickCreator} />
        </>
      ) }
      
      {user.type ==="company" && (
        <>
        <Button variant="contained" size="small" onClick={contentCreators}>Ver Perfis</Button>
        <Avatar alt="foto de perfil" src={user.avatar} onClick={handleClickCompany} />
        </>
      )}

      {user.type === "reader" && (
        <Avatar alt="foto de perfil" src={user.avatar} onClick={handleClickReader} />
      )
      }
      
      <Menu
        id="basic-menu"
        anchorEl={anchorCreator}
        open={open}
        onClose={handleCloseCreator}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={profile}>Profile</MenuItem>
        <MenuItem onClick={mynews}>my news</MenuItem>
        <MenuItem onClick={logOut}>logOut</MenuItem>
      </Menu>
      
      <Menu
        id="basic-menu"
        anchorEl={anchorCompany}
        open={openCompany}
        onClose={handleCloseCompany}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={profile}>Profile</MenuItem>
        <MenuItem onClick={logOut}>logOut</MenuItem>
      </Menu>

      <Menu
        id="basic-menu"
        anchorEl={anchorReader}
        open={openReader}
        onClose={handleCloseReader}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={profile}>Profile</MenuItem>
        <MenuItem onClick={logOut}>logOut</MenuItem>
      </Menu>
    </div>
  );
}
