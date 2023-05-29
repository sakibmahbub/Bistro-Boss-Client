import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    console.log(item);
    if (user) {
      fetch(`http://localhost:5000/carts`)
        .then((res) => res.json())
        .then((data) => {
          if (data.insertId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Added to cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to order food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <p className="bg-slate-900 absolute right-0 mr-4 mt-4 p-1 text-white">
          ${price}
        </p>

        <div className="card-body text-center">
          <h2 className="card-title flex justify-center">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center mt-3">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-outline border-0 border-b-4 border-gray-900"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
