import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import { RootState } from '../../store/store';
import  "../shop/Shop";
import Login from './Login';
import './MyAccount.scss';

function Logout() {
  const {username, fullname, email} = useSelector((state: RootState) => state.user);

  const navigate = useNavigate();
  

  return (
    <div >
      <Banner
        title='Register'
        coverPhoto='https://casona.familab.net/wp-content/uploads/2021/08/blog-bgf.jpg'
        pageName='Register'
        sliderExist={false} />
        <div className='loggout'>
        <h1 className='logoutdiv'>
       Welcome <span className='user-name'>{username}</span> <br/><br/>
       <a href="./Login">
       <button className='forlogout-button' >Logout</button><br/>
       </a>
       
       <a href="./Shop">
        <button className='forlogout-button' >Start shopping</button>
       </a>
      
      </h1>
        </div>
     
    
    </div>
  );
}

export default Logout;