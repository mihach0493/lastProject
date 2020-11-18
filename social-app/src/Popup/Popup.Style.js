import styled from 'styled-components';

const S = {
    Aside: styled.aside`
        position: fixed;
        width: 50%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid #000;
    `,
    H2: styled.h2`
        color: blue;
    `,
    Form: styled.form`
        background-color: orange; 
    `,
    Input: styled.input`
        background-color: #fff;
    `
}

export default S;


