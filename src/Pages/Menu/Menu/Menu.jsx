import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menubg from "../../../assets/menu/banner3.jpg";

const Menu = () => {
  return (
    <>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover img={menubg} title="Our Menu"></Cover>
    </>
  );
};

export default Menu;
