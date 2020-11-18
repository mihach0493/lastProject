import React, { Component } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import S from './Popup.Style';
import Login from '../Components/Login';
const Popup = () => {



    return (

        <S.Aside>
            <FontAwesomeIcon icon={faTimes} />
            <S.H2>
            </S.H2>
            <Login />
        </S.Aside>

    );
}




export default Popup;


// 1. вирішити як поставити юзера в локал сторіч,
// 2. вирішити над механізмем, викеривання залогованого юзера
