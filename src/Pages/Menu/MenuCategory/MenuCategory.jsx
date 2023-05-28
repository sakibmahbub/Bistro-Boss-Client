import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/Menuitem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="my-16">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-12 mt-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-0 border-b-4 border-gray-900">
            Order Your Favourite Food
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
