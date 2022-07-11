import CompanyRegistration from "../../components/company-registration";
import undraw_business_shop_re_ruf4 from "../../assets/undraw_business_shop_re_ruf4.svg";

function CompanyRegisterPage() {
  return (
    <div>
      <CompanyRegistration />
      <img
        src={undraw_business_shop_re_ruf4}
        alt="imagem da tela de registro de empresa"
      />
    </div>
  );
}

export default CompanyRegisterPage;
