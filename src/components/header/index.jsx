import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { Button, FormControl } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router";

import React, { useEffect, useState } from "react";

import { NavButtons } from "../navbar";
import { StyledHeader } from "./style";
import MenuDrawer from "../MenuDrawer";

import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import BasicMenu from "../userLogedMenu";
import SearchDrawer from "../searchDrawer";

export const Header = () => {
  const { user } = useContext(UserContext);
  
  const navigate = useNavigate();

  function login() {
    navigate("/login");
  }

  function register() {
    navigate("/register");
  }

  function home() {
    navigate("/");
  }
  function profile(){
    navigate("/profile")
  }
  function mynews(){
    navigate("/mynews")
  }

  const [mQuery, setMQuery] = useState({
    matches: window.innerWidth > 800 ? true : false,
  });

  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 800px)");
    mediaQuery.addEventListener("change", () => setMQuery(mediaQuery));
  }, []);

  return (
    <StyledHeader>
      {mQuery && !mQuery.matches ? (
        <>
          <MenuDrawer profile={profile} />
          <h1>logo</h1>
          <SearchDrawer/>
        </>
      ) : (
        <>
          <h1 onClick={() => home()}>Logo</h1>
          <NavButtons />
          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
              pesquisa
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              endAdornment={
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <Box
            sx={{
              "& button": {
                m: 1,
                borderRadius: 8,
                backgroundColor: "#ffff",
                color: "black",
                margin: "15px 8px",
                width: 100,
              },
            }}
          >
            {user === null ? (
              <>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => login()}
                >
                  Login
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => register()}
                >
                  Cadastro
                </Button>
              </>
            )
            :(
              <BasicMenu mynews={mynews} profile={profile} home={home}/>
            )
          
          }
          </Box>
        </>
      )}
    </StyledHeader>
  );
};
