import React, { Component } from 'react';
import {Box, List} from './SocialApp.Style';
import './SocialApp.css'
class Social extends Component {

    render() {
        return (
            <Box>
                <div className="SocialApp">
                    <List>
                        <li>First Name</li>
                        <li>Last Name</li>
                        <li>E-mail</li>
                    </List>
                </div>
            </Box>
        );
    }
}

export default Social;