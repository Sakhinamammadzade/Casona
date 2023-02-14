// import './CartAside.scss';
// import { AiOutlineClose } from 'react-icons/ai';
// import { Link } from 'react-router-dom';

// import bowl from '../../assets/images/bowl.jpg';


// import { RootState } from '../../store/store';
// import { closeCart } from '../header/headerAsideSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import CartAsideElements from '../CartAsideElements/CartAsideElements';
// import React from 'react';
// import rightArrow from '../../assets/images/rightArrow.svg';
// import shoppingbag from '../../assets/images/shoppingbagx.svg';


// export default function CartAside() {
//   const asideOpener = useSelector((state: RootState) => state.asideOpener);
//   const dispatch = useDispatch();

//   const closeCartAside = () => dispatch(closeCart());

//   return (

//     <>
//       <aside className="cart-aside-field">
//         <div className="cart-aside-part">
//           <div className="cart-aside-header">
//             <h3>SHOPPING CART</h3>
//             <button className="x-button cart-aside-x">
//               <span className="sidebar-button-text">
//                 <AiOutlineClose className="button-x formobileicon" />
//                 <span className="button-title">Close</span>
//               </span>
//             </button>
//           </div>
//           <div className="cart-aside-content">
//             <ul>
//               <li>
//                 <div className="list-img">
//                   <img src={bowl} alt="bowl" />
//                 </div>
//                 <div className="list-content">
//                   <p>Keny Bowl</p>
//                   <p>QTY: 2</p>
//                   <p>$25.00</p>
//                 </div>
//               </li>
//             </ul>
//          </div>
//           <div className="cart-aside-empty">
//             <div className="cart-empty-content">
//               <div className="empty-aside-img">
//                 <img src={shoppingbag} alt="shoppingbag" />
//               </div>
//               <p>Your cart is empty!</p>
//               <Link to={'/shop'}>
//                 <button onClick={closeCartAside}>
//                   Go to shop <img src={rightArrow} alt="rightArrow" />
//                 </button>
//          </div>
      
 
//     </>
//     </aside>
//   );
// }
