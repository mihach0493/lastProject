import React, { Component } from 'react';
import { Navi, List, ElementList } from './Nav.Style';

class Nav extends Component {

    render() {
        return (

            <Navi>
                <List>
                    <ElementList>Home</ElementList>
                    <ElementList>Login</ElementList>
                    <ElementList>Sing Up</ElementList>
                    {/* <ElementList>Hello World</ElementList> */}
                
                </List >

            </Navi>

        );
    }
}



export default Nav;