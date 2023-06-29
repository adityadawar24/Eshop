import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const Cart = () => {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const carts = JSON.parse(localStorage.getItem("cart")) || [];
  const [promoCode1, setPromoCode1] = useState(false);
  const [promoCode2, setPromoCode2] = useState(false);
  

 


  

  const handleSignUp = () => {
    navigate(`/payment`);
  };


  useEffect(() => {
    const total = carts.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotal(total);
    
  }, [carts]);

  const handleIncrement = (id) => {
    const updatedCart = carts.map((item) => {
      if (item.id === id) {
        const updatedQuantity = item.quantity + 1;
        if (updatedQuantity > 5) {
          alert("You can't add more than 5 items.");
          return item;
        }
        return {
          ...item,
          quantity: updatedQuantity,
        };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/cart");
  };

  const handleDecrement = (id) => {
    const updatedCart = carts.map((item) => {
      if (item.id === id) {
        const updatedQuantity = item.quantity - 1;
        if (updatedQuantity < 1) {
          alert("Item quantity cannot be less than 1.");
          return item;
        }
        return {
          ...item,
          quantity: updatedQuantity,
        };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/cart");
  };

  const removeProduct = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to remove this item?"
    );
    if (!confirmed) {
      return;
    }

    const updatedCart = carts.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/cart");
    toast.error("Item removed from Cart", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  if (carts.length === 0) {
    return (
      <div className=" h-[55vh] flex justify-center items-center text-4xl ">
        Cart is Empty
      </div>
    );
  }

  const totalCost = total + 10 - (promoCode1 ? 10 : 0) - (promoCode2 ? 25 : 0);
  localStorage.setItem("totalCost", totalCost); 

  return (
    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10">
        <div className="w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl"> Items</h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Product Details
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
              Quantity
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
              Price
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
              Total
            </h3>
          </div>
        
          {carts?.map((cart) => {
            return (
              <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                <div className="flex w-2/5">
                  <div className="w-20">
                    <img className="h-24" src={cart?.image} alt={cart?.title} />
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">{cart?.title}</span>
                    <span className="text-red-500 text-xs capitalize">
                      {cart?.category}
                    </span>
                    <div
                      className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer"
                      onClick={() => removeProduct(cart?.id)}
                    >
                      Remove <ToastContainer />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center w-1/5">
                  <svg
                    className="fill-current text-gray-600 w-3 cursor-pointer"
                    viewBox="0 0 448 512"
                    onClick={() => handleDecrement(cart?.id)}
                  >
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>

                  <input
                    className="mx-2 border text-center w-8"
                    type="text"
                    value={cart?.quantity}
                  />

                  <svg
                    className="fill-current text-gray-600 w-3 cursor-pointer"
                    onClick={() => handleIncrement(cart?.id)}
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </div>
                <span className="text-center w-1/5 font-semibold text-sm">
                  ${cart?.price}
                </span>
                <span className="text-center w-1/5 font-semibold text-sm">
                  ${cart?.price * cart?.quantity}
                </span>
              </div>
            );
          })}

          
        </div>

        <div id="summary" className="w-1/4 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">
            Order Summary
          </h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">
              Items {carts?.length}
            </span>
            <span className="font-semibold text-sm">{total?.toFixed(2)}$</span>
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">
              Shipping Charges
            </label>
            <select className="block p-2 text-gray-600 w-full text-sm">
              <option>Standard shipping - $15.91</option>
            </select>
          </div>
          <div className="py-10">
            <label
              for="promo"
              className="font-semibold inline-block mb-3 text-sm uppercase"
            >
              Promo Code
            </label>
            <div>
              <input
                type="checkbox"
                id="promo1"
                checked={promoCode1}
                onChange={() => setPromoCode1(!promoCode1)}
                className="mr-2"
              />
              <label htmlFor="promo1" className="mr-6">
                PC1
              </label>

              <input
                type="checkbox"
                id="promo2"
                checked={promoCode2}
                onChange={() => setPromoCode2(!promoCode2)}
                className="mr-2"
              />
              <label htmlFor="promo2" className="mr-6">
                PC2
              </label>
            </div>
          </div>

          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span className="font-semibold text-sm">
                {totalCost.toFixed(2)}$
              </span>
            </div>
            <button
          className="bg-yellow-500 font-semibold hover:bg-yellow-600 py-3 text-sm text-white uppercase w-full"
          onClick={handleSignUp}
        >
          Checkout
        </button>
        <br/>
        <Link to ="/payment" ><button style={{marginTop:"5px" }} className="flex ml-auto text-white bg-indigo-500 border-0 py-13 px-20 focus:outline-none hover:bg-indigo-600 rounded mr-10">PayNow</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
