import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { StyledAvatarContainer } from "./style";

export default function BasicMenu({
  profile,
  mynews,
  createNews,
  contentCreators,
  logOut,
}) {
  const { user } = useContext(UserContext);
  const [anchorCreator, setAnchorCreator] = React.useState(null);
  const [anchorCompany, setAnchorCompany] = React.useState(null);
  const [anchorReader, setAnchorReader] = React.useState(null);
  const open = Boolean(anchorCreator);
  const openCompany = Boolean(anchorCompany);
  const openReader = Boolean(anchorReader);

  const handleClickCreator = (event) => {
    setAnchorCreator(event.currentTarget);
  };
  const handleCloseCreator = () => {
    setAnchorCreator(null);
  };
  const handleClickCompany = (event) => {
    setAnchorCompany(event.currentTarget);
  };
  const handleCloseCompany = () => {
    setAnchorCompany(null);
  };
  const handleClickReader = (event) => {
    setAnchorReader(event.currentTarget);
  };
  const handleCloseReader = () => {
    setAnchorReader(null);
  };

  return (
    <div>
      {user?.type === "content creator" && (
        <StyledAvatarContainer>
          <Button
            variant="contained"
            size="small"
            sx={{ width: "130px" }}
            onClick={createNews}
          >
            criar Noticias
          </Button>
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
          <Avatar
            alt="foto de perfil"
            src={user.avatar}
            onClick={handleClickCreator}
          />
        </StyledAvatarContainer>
      )}

      {user?.type === "company" && (
        <StyledAvatarContainer>
          <Button
            variant="contained"
            size="small"
            sx={{ width: 100 }}
            onClick={contentCreators}
          >
            Ver Perfis
          </Button>
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
          <Avatar
            alt="foto de perfil"
            src={user.avatar}
            onClick={handleClickCompany}
          />
        </StyledAvatarContainer>
      )}

      {user?.type === "reader" && (
        <StyledAvatarContainer>
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
          <Avatar
            alt="foto de perfil"
            src={user.avatar}
            onClick={handleClickReader}
          />
        </StyledAvatarContainer>
      )}
    </div>
  );
}
