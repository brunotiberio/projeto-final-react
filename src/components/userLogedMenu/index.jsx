import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";




export default function BasicMenu({ profile, home, mynews }) {
  const { user } = useContext(UserContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {user !== null ? (
        <Avatar alt="foto de perfil" src={user.avatar} onClick={handleClick} />
      ) : (
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Dashboard
        </Button>
      )}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={profile}>Profile</MenuItem>
        {user.type==="content creator" && (<MenuItem onClick={mynews}>my news</MenuItem>)}
        <MenuItem onClick={() => {localStorage.clear(); home()}}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
