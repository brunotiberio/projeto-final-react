import { BoxArea, Content } from "./script";
import Add from "@mui/icons-material/Add";

export const PostComments = () => {
  //pegar os comments com context

  return (
    <Content>
      <h1>Comentários</h1>

      <BoxArea>
        <textarea
          name="comment"
          id="comment"
          cols="33"
          rows="5"
          placeholder="Mande uma mensagem..."
        ></textarea>
        <div>
          <button>
            <Add />
          </button>
        </div>
      </BoxArea>
    </Content>
  );
};
