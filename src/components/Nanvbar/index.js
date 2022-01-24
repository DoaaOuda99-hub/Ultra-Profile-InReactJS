import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import './Style.js'
import { NavbarSection } from './Style.js';
import {Logo} from './Style.js';
import { UlList } from './Style.js';
import { ListItem } from './Style.js';
import { Anchor } from './Style.js';
import { LogoText } from './Style.js';
// import styled from 'styled-components';
import  styled  from 'styled-components';

 class Navbar extends Component{
     render(){

        this.state = {
            styles : styled(Anchor)``
        }
    return (
        <NavbarSection className="navbar">
            
            <div className="container">
                
                <Logo className="logo">
                    <LogoText className="logo-text">Ultra Profile</LogoText>
                </Logo>
                
                <UlList className="ul-list">
                    <ListItem className="list-item"><Link style={this.state} to = '/'>Home</Link></ListItem>
                    <ListItem className="list-item"><Anchor href="#">Work</Anchor></ListItem>
                    <ListItem className="list-item"><Anchor href="#">Portfolio</Anchor></ListItem>
                    <ListItem className="list-item"><Anchor href="#">Resume</Anchor></ListItem>
                    <ListItem className="list-item"><Anchor href="#">About</Anchor></ListItem>
                    <ListItem className="list-item"><Link to="/contact">Contact</Link></ListItem>
                </UlList>
                
            </div>
            
        </NavbarSection>
       
    )
}
 }

export default Navbar;
