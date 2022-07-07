import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";

import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

import { StyledHeader, StyledHeaderList } from "./style";
import { Button, FormControl } from "@mui/material";
import { Box } from "@mui/system";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
export const Header = () => {
  return (
    <StyledHeader>

      <h1>Logo</h1>

      <StyledHeaderList role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Novas Noticias
          </Link>
          <Link underline="hover" color="inherit" href="/">
            Mais Votadas
          </Link>
          <Link underline="hover" color="inherit" href="/">
            Saúde
          </Link>
          <Link underline="hover" color="inherit" href="/">
            Tecnologia
          </Link>
          <Link underline="hover" color="inherit" href="/">
            Esporte
          </Link>
          <Link underline="hover" color="inherit" href="/">
            Entretenimento
          </Link>
          <Link underline="hover" color="inherit" href="/">
            Gastronomia
          </Link>
        </Breadcrumbs>
      </StyledHeaderList>

      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">pesquisa</InputLabel>
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
            width:100
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

    </StyledHeader>
  );
};
