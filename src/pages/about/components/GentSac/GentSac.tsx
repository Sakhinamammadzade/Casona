import './GentSac.scss';
import { Link } from 'react-router-dom';
import React from 'react';
import Blog1 from '../../../../assets/images/Blog1.jpg';

export default function GentSac() {
    return (
      <div className="Gentsac-field">
        <div className="Gentsac-container">
          <div className="Gentsac-item">
            <img src={Blog1} alt="stimage" />
          </div>
        </div>
      </div>
    );
  }