import '../productCard/productCard.scss';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { RootState } from '../../store/store';
import { baseUrl } from '../../contants';
import { loadProducts } from './productCardSlice';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

import { AiOutlineSearch } from 'react-icons/ai';

export default function ProductCard() {
  const productCardState = useSelector((state: RootState) => state.productCard);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`${baseUrl}/product`)
      .then((response) => response.json())
      .then((data) => dispatch(loadProducts({ products: data })));
  }, []);
  return (
    <>
      <div className="container">
        <div className="product-list">
          <div className="product-item row d-flex justify-content-between align-items-center">
            {productCardState.products.map((product, index) => (
              <div
                className="col-6 col-sm-6 col-md-4  col-lg-3 col-xl-3 col-xxl-3 overflow-hidden"
                key={index}
              >

            
                <div className="product-card">

                  <div className="Card">
                    <Link to={`product/${product.id}`}>
                      <div className="image">
                        <img src={product.image} alt="" />
                      </div>
                    </Link>
                    <div className="cardContent">
                      <Link to={`/detail/${product.id}`}>
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
                        <FiShoppingCart className="icon" />
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
    </>
  );
}
