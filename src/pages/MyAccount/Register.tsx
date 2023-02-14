import './MyAccount.scss';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { login } from "./UserSlice";
import { RootState } from '../../store/store';
import { useNavigate } from 'react-router';
// import { Logout } from "./Logout";


type UserSubmitForm = {
  fullname: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
};

const useRegister: React.FC = () => {
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('Fullname is required'),
    username: Yup.string()
      .required('This field is required.')
      .min(6, 'Username must be at least 6 characters')
      .max(20, 'Username must not exceed 20 characters'),
    email: Yup.string()
      .required('This field is required.')
      .email('Please enter a valid email address.'),
    password: Yup.string()
      .required('This field is required.')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
      .required('This field is required')
      .oneOf([Yup.ref('password'), null], 'Passwords do not match'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
  });

  const {username, fullname, email} = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  console.log(username);
  console.log(fullname);
  console.log(email);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema)
  });

const dispatch = useDispatch();

  const onSubmit = (data: UserSubmitForm) => {
    dispatch(
      login({
        fullname: data.fullname,
        username: data.username,
        email: data.email,
        password: data.password,
        isLoggedin: true,
      })

      );
      const users = JSON.parse(localStorage.getItem("users") || JSON.stringify([]));
      localStorage.setItem("users", JSON.stringify([...users, {
        fullname: data.fullname,
        username: data.username,
        email: data.email,
        password: data.password
      }]));

    navigate('/logout');
  };

  return (
    <div className="register-form">

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <h1>Register</h1>

          <input
            placeholder='Full Name'
            type="text"
            {...register('fullname')}
            className={`form-control ${errors.fullname ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.fullname?.message}</div>
        </div>

        <div className="form-group">

          <input
            placeholder='Username'
            type="text"
            {...register('username')}
            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.username?.message}</div>
        </div>

        <div className="form-group">

          <input
            placeholder='Email Address'
            type="text"
            {...register('email')}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>

        <div className="form-group">

          <input
            placeholder='Password'
            type="password"
            {...register('password')}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>
        <div className="form-group">

          <input
            placeholder='Confirm Password'
            type="password"
            {...register('confirmPassword')}
            className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''
              }`}
          />
          <div className="invalid-feedback">
            {errors.confirmPassword?.message}
          </div>
        </div>

        <div className="form-group form-check">
          <input
            type="checkbox"
            {...register('acceptTerms')}
            className={`form-check-input ${
              errors.acceptTerms ? 'is-invalid' : ''
            }`}
          />
          <label htmlFor="acceptTerms" className="form-check-label">
            I have read and agree to the Terms
            <p className='privacy'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
          </label>
          <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
        </div>

        <div className="form-group">
          <button type="submit" className="btn " >
            REGISTER
          </button>
          
        </div>
      </form>
    </div>
  );
};

export default useRegister;
