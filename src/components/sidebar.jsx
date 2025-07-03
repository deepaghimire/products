import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import CartItem from "../components/CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, itemAmount, total } = useContext(CartContext);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(
    "Select Payment Method"
  );

  const paymentMethods = [
    "Credit Card",
    "PayPal",
    "Bank Transfer",
    "Cash on Delivery",
  ];

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] lg:w-[40vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] flex flex-col`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount})
        </div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>

      {/* Products Section */}
      <div className="flex-1 overflow-y-auto">
        <div className="py-4 border-b pb-4">
          <h3 className="font-semibold text-lg mb-2">Your Products</h3>
          {cart.length === 0 ? (
            <div className="text-center py-8">
              <p>Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 border-b pb-8"
                >
                  <div className="w-20 h-20 bg-gray-100 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm line-clamp-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm">Qty: {item.amount}</p>
                    <p className="font-semibold">${item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Cart Items Section (existing functionality) */}
        <div className="h-[200px] overflow-y-auto border-b">
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
      </div>

      {/* Summary and Payment Section */}
      <div className="py-4 border-t">
        <div className="flex justify-between items-center mb-4">
          <span className="font-semibold">Subtotal:</span>
          <span className="font-bold">${parseFloat(total).toFixed(2)}</span>
        </div>

        {/* Payment Dropdown */}
        <div className="relative mb-4">
          <button
            onClick={() => setIsPaymentOpen(!isPaymentOpen)}
            className="bg-gray-100 flex p-3 justify-between items-center text-black w-full font-medium rounded"
          >
            {selectedPayment}
            {isPaymentOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>

          {isPaymentOpen && (
            <div className="absolute bg-white w-full shadow-lg z-10 border rounded mt-1">
              {paymentMethods.map((method) => (
                <div
                  key={method}
                  className="p-3 hover:bg-gray-100 cursor-pointer border-b last:border-b-0"
                  onClick={() => {
                    setSelectedPayment(method);
                    setIsPaymentOpen(false);
                  }}
                >
                  {method}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <button
            onClick={clearCart}
            className="flex items-center justify-center gap-2 w-full bg-red-500 text-white p-3 rounded font-medium"
          >
            <FiTrash2 /> Clear Cart
          </button>

          <Link
            to={
              selectedPayment !== "Select Payment Method" ? "/paymentpage" : "#"
            }
            className={`block text-center p-3 rounded font-medium ${
              selectedPayment !== "Select Payment Method"
                ? "bg-primary text-black cursor-pointer"
                : "bg-blue-300 text-gray-500 cursor-not-allowed"
            }`}
            onClick={(e) => {
              if (selectedPayment === "Select Payment Method") {
                e.preventDefault();
                alert("Please select a payment method first");
              }
            }}
          >
            Proceed to Payment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

// import React, { useContext } from "react";
// import { Link } from "react-router";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// import { IoMdArrowForward } from "react-icons/io";
// import { FiTrash2 } from "react-icons/fi";
// import CartItem from "../components/CartItem";
// import { SidebarContext } from "../contexts/SidebarContext";
// import { CartContext } from "../contexts/CartContext";

// const Sidebar = () => {
//   const { isOpen, handleClose } = useContext(SidebarContext);
//   const { cart, clearCart, itemAmount, total } = useContext(CartContext);

//   return (
//     <div
//       className={`${
//         isOpen ? "right-0" : "-right-full"
//       } "w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] lg:w-[40vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]"`}
//     >
//       <div className="flex items-center justify-between py-6 border-b">
//         <div className="uppercase text-sm font-semibold">
//           No. of items ({itemAmount})
//         </div>
//         <div
//           onClick={handleClose}
//           className="cursor-poniter w-8 h-8 flex justify-center items-center"
//         >
//           <IoMdArrowForward className="text-2xl" />
//         </div>
//       </div>
//       <div className="flex flex-col gap-y-2 h-[360px] md:h-[480px] lg:h-[420px] overflow-y-auto overflow-x-hidden border-b">
//         {cart.map((item) => {
//           return <CartItem item={item} key={item.id} />;
//         })}
//       </div>
//       <div className="flex flex-col gap-y-3  mt-4">
//         <div className="flex w-full justify-between items-center">
//           {/* total */}
//           <div className="font-semibold">
//             <span className="mr-2">Subtotal:</span> ${" "}
//             {parseFloat(total).toFixed(2)}
//           </div>
//           {/* clear cart icon */}
//           <div
//             onClick={clearCart}
//             className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
//           >
//             <FiTrash2 />
//           </div>
//         </div>
//         <Link
//           to={"/"}
//           className="bg-gray-200 flex p-3 justify-center items-center text-primary w-full font-medium"
//         >
//           View Cart
//         </Link>
//         <Link
//           to={"/paymentpage"}
//           className="bg-gray-200 flex p-3 justify-center items-center text-black w-full font-medium"
//         >
//           payment
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
