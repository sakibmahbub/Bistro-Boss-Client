import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/Menuitem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="my-24">
      <SectionTitle
        heading="From Our Menu"
        subHeading="Popular items here"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-12">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div
        className="flex justify-center mt-5
      "
      >
        <button className="flex justify-center mt-5 btn btn-outline border-0 border-b-4 border-gray-900">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
