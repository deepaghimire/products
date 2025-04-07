// import { useCart } from "../context/CartContext";
// import CartItem from "../components/CartItem";

// const Cart = () => {
//   const { cartItems, cartTotal, removeFromCart, updateQuantity } = useCart();

//   if (cartItems.length === 0) {
//     return (
//       <div className="empty-cart">
//         <h2>Your cart is empty</h2>
//         <p>Continue shopping to add items to your cart</p>
//       </div>
//     );
//   }

//   return (
//     <div className="cart-container">
//       <h1 className="cart-title">Your Shopping Cart</h1>
//       <div className="cart-items">
//         {cartItems.map((item) => (
//           <CartItem
//             key={item.id}
//             item={item}
//             onRemove={removeFromCart}
//             onUpdateQuantity={updateQuantity}
//           />
//         ))}
//       </div>
//       <div className="cart-summary">
//         <h3>Total: ${cartTotal.toFixed(2)}</h3>
//         <button className="checkout-btn">Proceed to Checkout</button>
//       </div>
//     </div>
//   );
// };

// export default Cart;
