import './HomeSubscribe.scss';
import { AiOutlineRight } from 'react-icons/ai';

export default function HomeSubscribe() {
  return (
    <div className="HomeSubscribe-field">
      <div className="HomeSubscribe-container">
        <div className="HomeSubscribe-box">
          <div className="HomeSubscribe-content">
            <div className="Content-title">
              Casona is here for <br /> creative pros to carry, build & hack life better.
            </div>
            <form className="Content-form">
              <input type="email" placeholder="Your email address" required />
              <button type="submit">
                <p className="Subscribe-text">Subscribe</p>
                <AiOutlineRight />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
