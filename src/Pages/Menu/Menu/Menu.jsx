import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import menubg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      {/* Main cover */}
      <Cover img={menubg} title="Our Menu"></Cover>
      <SectionTitle
        subHeading="Don't Miss"
        heading="Today's Offer"
      ></SectionTitle>
      {/* Offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* Dessert menu items */}
      <MenuCategory
        items={dessert}
        title="Dessert"
        img={dessertImg}
      ></MenuCategory>
      {/* Pizza menu items */}
      <MenuCategory items={pizza} title="Pizza" img={pizzaImg}></MenuCategory>
      {/* Salad menu items */}
      <MenuCategory items={salad} title="Salad" img={saladImg}></MenuCategory>
      {/* Soup menu items */}
      <MenuCategory items={soup} title="Soup" img={soupImg}></MenuCategory>
    </>
  );
};

export default Menu;
