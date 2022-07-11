import { BoxArea, Content } from "./script";
import Add from "@mui/icons-material/Add";
import { useForm, useInput } from "lx-react-form";
import { TextField } from "@mui/material";
import { useContext } from "react";
import { NewsContext } from "../../contexts/NewsContext";

export function PostComments() {

  const {createComment} = useContext(NewsContext)

  //pegar o id do User pelo context


  const content = useInput({
    content: "content",
  });

  const form = useForm({
    clearFields: true,
    formFields: [content],
    submitCallback: (body) => {
      createComment(body.undefined);
    },
  });

  return (
    <Content>
      <h1>Comentários</h1>

      <BoxArea onSubmit={form.handleSubmit}>
        <TextField
          type="text"
          multiline
          maxRows={5}
          sx={{
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
            background: "#ffffff",
            width: "15rem",
            height: "100%",
          }}
          {...content.inputProps}
        />
        <div>
          <button>
            <Add />
          </button>
        </div>
      </BoxArea>
    </Content>
  );
}
