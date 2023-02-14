import Banner from '../../components/Banner/Banner';
import React, { useEffect, useState } from 'react';
import { Button, Flex, Stack, Wrap, WrapItem } from '@chakra-ui/react';
import { BsFillGridFill, BsFillGrid3X3GapFill } from 'react-icons/bs';
import { ChevronRight } from 'react-bootstrap-icons';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { TfiLayoutGrid4Alt } from 'react-icons/tfi';
import { VscFilter } from 'react-icons/vsc';
import { GrFormClose } from 'react-icons/gr';
import '../shop/shop.scss';
import { Link } from 'react-router-dom';

import ProductCard from '../../components/productCard/ProductCard';
import colors from '../../data/colors';
import links from '../../data/links';
import { Slider } from '@mui/material';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';

const color = grey[700];



export default function Shop() {

  const [isActive, setActive] = useState(false);
  const [isFilter, setFilter] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };
  const handleFilterToggle = () => {
    setFilter(!isFilter);
  };
  function valuetext(value: number) {
    return `${value}°C`;
  }
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };



  return (
    <section className="shop">
      <Banner
        title="Shop"
        pageName="Shop"
        coverPhoto="https://casona.familab.net/wp-content/uploads/2021/09/heading_bg_dark.jpg"
        sliderExist={true}

      />

      <div className="shopControl">
        <Flex gap="20" justifyContent="space-between">
          <button className="filtering" onClick={handleFilterToggle}>
            <div className="filterDropdown">
              <VscFilter className="filterIco" />
              <span>FILTER</span>
            </div>

            <div id="filterList" className={isFilter ? 'active' : ''}>
              <div className="container">
                <div className="row justify-content-evenly">
                  <div className="col-12 col-sm-6 col-md-6 col-xl-3 col-lg-3">
                    <div className="productCategories">
                      <h4>Product Categories</h4>
                      <div className="categoryList">
                        <ul className='menuList'>
                          <li>
                            <Link to='/'>Accessories</Link>
                          </li>
                          <li>
                            <Link to='/'>Backpacks</Link>
                          </li>
                          <li className='digital'>
                            <Link to='/'>Digitals </Link>
                            <span className='icon' ><MdOutlineKeyboardArrowDown /></span>
                            <ul id='subMenu'>
                              <li>
                                <Link to='/'>Headphones</Link>
                              </li>
                              <li>
                                <Link to='/'>Speaker</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to='/'>Wallets</Link>
                          </li>
                          <li>
                            <Link to='/'>Watches</Link>
                          </li>
                          <li>
                            <Link to='/'>Water Bootles</Link>
                          </li>
                          <li>
                            <Link to='/'></Link>
                          </li>
                        </ul>
                      </div>

                    </div>
                  </div>
                  <div className='col-12 col-sm-6 col-md-6 col-xl-3 col-lg-3'>
                    <div className="productTags">
                      <h4>Product Tags</h4>
                      <Stack direction='column'>
                        <Wrap spacing={10}>
                          {
                            links.map((link) => (
                              <WrapItem>
                                <Link to={`/`} className='btn'><span>{link.name}</span></Link>
                              </WrapItem>
                            ))
                          }


                        </Wrap>
                      </Stack>
                    </div>
                  </div>
                  <div className='col-12 col-sm-6 col-md-6 col-xl-3 col-lg-3'>
                    <div className="productColor">
                      <h4>Product Color</h4>
                      <div className="color-groups">
                        {
                          colors.map((color) => (

                            <button className={`${color}`}></button>


                          ))
                        }

                      </div>
                    </div>
                  </div>
                  <div className='col-12 col-sm-6 col-md-6 col-xl-3 col-lg-3'>
                    <div className="productSize">
                      <h4>Product Size</h4>
                      <div className="btnGroups">
                        <button className='large'>Large</button>
                        <button className='medium'>Medium</button>
                        <button className='small'>Small</button>

                      </div>

                    </div>
                    <div className="filterBySize">
                      <h4 className='pb-3'>Filter By Size</h4>
                      <Box sx={{ width: 200 }}>
                        <Slider
                          className='slider1'
                          getAriaLabel={() => 'Temperature range'}
                          value={value}
                          onChange={handleChange}
                          valueLabelDisplay="auto"
                          getAriaValueText={valuetext}
                          color="secondary"
                        />
                      </Box>
                      <button className="filterbtn">
                        <span>filter</span>
                      </button>
                      <h6 className='filter-price'> Price: $18 — $600</h6>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </button>

          <div className="results">
            <p>Showing 1–12 of 27 results</p>
          </div>
          <div className="card-view">
            <button>
              <BsFillGridFill className="grid gridOne" />
            </button>
            <button>
              <BsFillGrid3X3GapFill className="grid gridTwo" />
            </button>
            <button>
              <TfiLayoutGrid4Alt className="grid gridThere" />
            </button>
          </div>
          <div className="sort">
            <button className="default-sorting" onClick={handleToggle}>
              <p>Default sorting</p>
              <ChevronRight className="rightIco" />
              <div id="sortingList" className={isActive ? 'active' : ''}>
                <div className="item">
                  <p>Default sorting</p>
                </div>
                <p>Sort by popularity</p>
                <p>Sort by avarage rating</p>
                <p>Sort by lastest</p>
                <p>Sort by price:low to high</p>
              </div>
            </button>
          </div>
        </Flex>
      </div>

      <section className="products">
        <ProductCard />
      </section>
    </section>
  );
}


