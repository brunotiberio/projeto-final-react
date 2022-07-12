import Button from "@mui/material/Button";
import "./styles.css";

function ContentCreator({ name, avatar, city, state }) {
  return (
    <div className="teste--deletarr">
      <img src={avatar} alt="" />
      <p>{name}</p>
      {city ? (
        <p>
          {city}/{state}
        </p>
      ) : (
        <p>-</p>
      )}
      <p></p>
      <Button variant="contained" size="small" type="submit">
        Postagens
      </Button>
    </div>
  );
}

export default ContentCreator;
