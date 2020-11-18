import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import S from '../Popup/Popup.Style';
import axios from 'axios';

const Login = () => {

    const { register, handleSubmit, errors } = useForm();

    const [usernameValue, setUsernameValue] = useState(''); 

    const [passwordValue, setPasswordValue] = useState('');

    const onSubmit = (date) => {


        

        let postData = {
            username: usernameValue,
            password: passwordValue,
            
            // "username": "adam",
            // "password": "1234",
            // "ttl": 3600

        };
        console.log(postData);


        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }


        };

        axios.post(
            'https://akademia108.pl/api/social-app/user/login',
            postData,
            axiosConfig)
            .then((res) => {
                console.log("RESPONSE RECEIVED: ", res);
            })
            .catch((err) => {
                console.log("AXIOS ERROR: ", err);
            })
    }
console.log(usernameValue);
    return (


        <S.Form onSubmit={handleSubmit(onSubmit)}>
            Log in
            <S.Input name="username" type="text" onChange={(e)=> setUsernameValue(e.target.value)} />
            <S.Input name="password" type="password" onChange={(e)=> setPasswordValue(e.target.value)}/>
            <button type="submit">LOG IN</button>
        </S.Form>


    );

}




export default Login;




// 1. провірити в документації як працює хукстану. то що ми вживали в хукстате
// 2. провірити документацію як провіряти формуляжи в реакті
// 3. щоб витягнуні дані про ужотковніка записати в локалсторіч.. zapisac dane uzotkownika  w lokal storage( setItem)
// 4. zrob osobny komponent, loginPage i висвітли той самий логін формуляня а логін падже висвітли в app


