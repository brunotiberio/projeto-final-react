import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { Button, FormControl } from "@mui/material";
import { Box } from "@mui/system";

import React, { useEffect, useState } from "react";

import { NavButtons } from "../navbar";
import { StyledHeader } from "./style";
import TemporaryDrawer from "../drawer";
import SearchDrawer from "../searchDrawer";

export const Header = () => {
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
          <TemporaryDrawer />
          <h1>logo</h1>
          <SearchDrawer/>
        </>
      ) : (
        <>
          <h1>Logo</h1>
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
            <Button variant="contained" size="small">
              Login
            </Button>
            <Button variant="contained" size="small">
              Cadastro
            </Button>
          </Box>
        </>
      )}
    </StyledHeader>
  );
};