import PersonRegistration from "../../components/person-registration";
import undraw_hologram_re_7ppw from "../../assets/undraw_hologram_re_7ppw.svg";

function PersonRegisterPage() {
  return (
    <div>
      <PersonRegistration />
      <img
        src={undraw_hologram_re_7ppw}
        alt="imagem da tela registro de pessoas"
      />
    </div>
  );
}

export default PersonRegisterPage;
