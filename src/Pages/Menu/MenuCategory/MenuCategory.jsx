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
    </div>
  );
};

export default MenuCategory;
