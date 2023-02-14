import './HomeSlider.scss';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import homeImg1 from '../../../../assets/images/homeImg1.png';
import homeImg2 from '../../../../assets/images/homeImg2.png';

interface IItems {
  images: string;
  heading: string;
  content: string;
}

const items: IItems[] = [
  {
    images: homeImg1,
    heading: 'Robot born to naturally integrated',
    content:
      'The replaceable skin with different colors and patterns available makes it suit all kinds of house designs',
  },
  {
    images: homeImg2,
    heading: 'Premium accessories collection 18',
    content:
      'The replaceable skin with different colors and patterns available makes it suit all kinds of house designs',
  },
];

const variants = {
  change: { backgroundColor: '#84A594' },
  notchange: { backgroundColor: '#974C35' },
};

export default function HomeSlider() {
  const [index, setIndex] = useState(0);

  function prevStep() {
    if (index === 0) {
      setIndex(items.length - 1);
      return;
    }
    setIndex(index - 1);
  }

  function nextStep() {
    if (index === items.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  }

  return (
    <>
      <motion.div
        className="home-slider-field"
        initial={{
          backgroundColor: '#974C35',
        }}
        animate={index === 1 ? 'change' : 'notchange'}
        transition={{
          duration: 1,
        }}
        key={items[index].images}
        variants={variants}
      >
        <div className="home-slider-container">
          <div className="hslider-buttons">
            <button className="hslider-prev hslider-button" onClick={prevStep}>
              <AiOutlineLeft />
            </button>
            <button className="hslider-next hslider-button" onClick={nextStep}>
              <AiOutlineRight />
            </button>
          </div>
          <div className="hslider-part">
            <motion.div
              className="hslider-img"
              initial={{
                x: -74,
                y: 700,
                opacity: 0,
              }}
              animate={{
                x: -74,
                y: 14,
                opacity: 1,
              }}
              transition={{
                duration: 2,
              }}
              key={items[index].images}
            >
              <img src={items[index].images} alt="" />
            </motion.div>
            <div className="hslider-content">
              <motion.p
                className="hslider-p1"
                initial={{
                  y: -100,
                  opacity: 0,
                }}
                animate={{
                  y: -50,
                  opacity: 1,
                }}
                transition={{
                  duration: 2.2,
                }}
                key={items[index].heading}
              >
                {items[index].heading}
              </motion.p>
              <motion.p
                className="hslider-p2"
                initial={{
                  y: -45,
                  x: 700,
                  opacity: 0,
                }}
                animate={{
                  y: -45,
                  x: 4,
                  opacity: 1,
                }}
                transition={{
                  duration: 2.6,
                }}
                key={items[index].content}
              >
                {items[index].content}
              </motion.p>
              <motion.button
                className="hslider-button"
                initial={{
                  y: 50,
                  opacity: 0,
                }}
                animate={{
                  y: -40,
                  opacity: 1,
                }}
                transition={{
                  duration: 2.5,
                }}
                key={items[index].images}
              >
                <Link to={'/shop'}>SHOP NOW</Link>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
