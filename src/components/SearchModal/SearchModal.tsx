import './SearchModal.scss';
import { AiOutlineClose } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { RootState } from '../../store/store';
import { closeSearch } from '../header/headerAsideSlice';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

export default function SearchModal() {
  const variants = {
    setSearch: { x: 4, y: 14, opacity: 1 },
    notSetSearch: { x: 4, y: 700, opacity: 0 },
  };

  const asideOpener = useSelector((state: RootState) => state.asideOpener);
  const dispatch = useDispatch();

  const closeCloseAside = () => dispatch(closeSearch());

  return (
    <div className={asideOpener.isSearchOpen ? 'search-modal-field search-open' : 'search-modal-field'}>
      <div className="search-modal-header">
        <button className="x-button" onClick={closeCloseAside}>
          <span className="sidebar-button-text">
            <AiOutlineClose className="button-x formobileicon" />
            <span className="button-title">Close</span>
          </span>
        </button>
        <p>Type the keyword or SKU</p>
      </div>
      <motion.div
        className="search-modal-bottom"
        initial={{
          x: 4,
          y: 700,
          opacity: 0,
        }}
        animate={asideOpener.isSearchOpen ? 'setSearch' : 'notSetSearch'}
        transition={{
          duration: 1.2,
        }}
        variants={variants}
      >
        <div className="search-modal-bottom-content">
          <input type="text" placeholder="Search..." />
          <button type="submit">
            <BiSearch />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
