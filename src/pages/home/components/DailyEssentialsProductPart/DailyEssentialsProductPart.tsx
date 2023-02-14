import './DailyEssentialsProductPart.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { RootState } from '../../../../store/store';
import { addToCart } from '../../../../components/header/headerCartSlice';
import { baseUrl } from '../../../../contants';
import { loadProducts } from '../../../../components/productCard/productCardSlice';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

export default function DailyEssentialsProductPart() {
  const productCardState = useSelector((state: RootState) => state.productCard);
  const dispatch = useDispatch();

  const cartSlice = useSelector((state: RootState) => state.cartCounter);

  useEffect(() => {
    fetch(`${baseUrl}/product`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(loadProducts({ products: data }));
        localStorage.setItem('cartItems', JSON.stringify(data));
      });
  }, []);
  return (
    <div className="daily-essentials-product-part-field">
      <div className="daily-essentials-product-part-container">
        <div className="daily-essentials-product-part-content">
          <div className="Content-up">
            <p className="Content-title"> Daily Essentials </p>
            <div className="Divider-wrap"></div>
            <Link to={'/shop'} className="Content-explore">
              EXPLORE ALL
            </Link>
          </div>
          <div className="Content-bottom">
            <div className="container">
              <div className="product-list">
                <div className="product-item row d-flex justify-content-between align-items-center">
                  {productCardState.products.slice(0, 8).map((product, index) => (
                    <div
                      className="col-6 col-sm-6 col-md-4  col-lg-3 col-xl-3 col-xxl-3 overflow-hidden"
                      key={index}
                    >
                      <div className="product-card">
                        <div className="Card">
                          <Link to={`product/${product.id}`} >
                            <div className="image">
                              <img src={product.image} alt="" />
                            </div>
                          </Link>
                          <div className="cardContent">
                            <Link to={`product/${product.id}`}>
                              <p className="proName">{product.name}</p>
                            </Link>
                            {product.discountPrice && <span>{product.discountPrice}</span>}
                            <span className="price">${product.price}</span>
                          </div>
                          <div className="buttonsGroup">
                            <button className="wishlish">
                              <FiHeart className="icon" />
                            </button>
                            <button className="addtocart">
                              <FiShoppingCart
                                className="icon"
                                onClick={() => {
                                  dispatch(addToCart(product));
                                }}
                              />
                            </button>
                            <button className="search">
                              <AiOutlineSearch className="icon" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
