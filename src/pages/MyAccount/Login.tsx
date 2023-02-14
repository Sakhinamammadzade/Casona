import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Banner from "../../components/Banner/Banner";
import './MyAccount.scss';
import { Navigate } from "react-router";



interface IFormInputs {
    username: string
    password: string
}

const schema = yup.object({
    username: yup.string().required('This field is required.'),
    password: yup.string().required('This field is required.'),
});

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: IFormInputs) => console.log(data);

    return (
        <div>
            <Banner
                title='Login'
                coverPhoto='https://casona.familab.net/wp-content/uploads/2021/08/blog-bgf.jpg'
                pageName='Login'
                sliderExist={false} />
                
            <div className="register-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Login</h1><br/>
                    <input
                        placeholder='Username'
                        type="text"
                        {...register('username')}
                        className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                    />
                    <input
                        placeholder='Password'
                        type="password"
                        {...register('password')}
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    />
                    
                    
                </form>
                <a href="./Logout">
                    <button className="btn " > Log in</button>
                    </a>
            </div>

        </div>

    );
}
