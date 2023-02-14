import Banner from '../../components/Banner/Banner';
import Register from './Register';

function MyAccount() {

  return (
    <div>
      <Banner
        title='My Account'
        coverPhoto='https://casona.familab.net/wp-content/uploads/2021/08/blog-bgf.jpg'
        pageName='My Account'
        sliderExist={false} />
      <Register/>
  
    </div>
  );
}

export default MyAccount;