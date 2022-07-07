import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { StyledHeaderList } from "../header/style";
export const NavButtons = () => {
    function handleClick(event) {
        event.preventDefault();
        console.info("You clicked a breadcrumb.");
      }
  return (
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
  )
  };