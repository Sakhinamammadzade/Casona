import './item.scss';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

type UserSubmitForm = {
  fullname: string;
  comment: string;
  email: string;
};

const Contact: React.FC = () => {
  const validationSchema = Yup.object().shape({
    fullname:
      Yup.string().required('This field is required.'),

    email: Yup.string()
      .required('This field is required.' )
      .email('Please enter a valid email address.'),

    comment:
      Yup.string().required('This field is required.'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data: UserSubmitForm) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <div className="register-form">
     <h1>Send Us a Message</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          {/* <label></label> */}
          <input
            placeholder='Full Name*'
            type="text"
            {...register('fullname')}
            className={`form-control ${errors.fullname ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.fullname?.message}</div>
        </div>

        <div className="form-group">
          {/* <label></label> */}
          <input
            placeholder='Email'
            type="text"
            {...register('email')}
            className={`form-control ${errors.email ? 'is-invalid' : ''} `}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>

        <div className="form-group">
          {/* <label></label> */}
          <input
            placeholder='Your Comment*'
            type="text"
            {...register('comment')}
            className={`form-control ${errors.comment ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.comment?.message}</div>
        </div>

        <div className="form-group">
          <button type="submit" className="btn">
            SEND A MESSAGE
          </button>

        </div>
      </form>
    </div>
  );
};

export default Contact;