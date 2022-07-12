import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export function DeleteModal() {
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button
        variant="standard"
        sx={{ color: "red", fontSize: 16 }}
        onClick={handleModal}
      >
        Excluir
      </Button>
      <Dialog
        open={open}
        onClose={handleModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{ backgroundColor: "white", color: "black" }}
        >
          {"Você quer excluir esta notícia?"}
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: "white" }}>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ color: "black" }}
          >
            Excluindo esta notícia pessoas irão parar de ver e comentar esta
            publicação. Assim como empresas também irão parar de ver esta
            publicação.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "white" }}>
          <Button
            onClick={() => console.log("excluir")}
            sx={{
              "&:hover": {
                background: "red",
                color: "white",
              },
            }}
          >
            Excluir
          </Button>
          <Button
            onClick={handleModal}
            sx={{ "&:hover": { background: "blue", color: "white" } }}
          >
            Voltar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
