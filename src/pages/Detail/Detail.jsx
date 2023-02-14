import React from 'react';
import '../Detail/detail.scss';
import { RootState } from '../../store/store';

export default function Detail(){
  //const productCardId = useSelector((state: RootState) => state.productDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`${baseUrl}/product`)
      .then((response) => response.json())
      .then((data) => dispatch(loadProducts({ products: data })));
  }, []);
  
    return(
        <section id='detail'>
          <div className='header-bg'>
                 werfg
          </div>
           <h1>salam</h1>
        </section>
    )
}