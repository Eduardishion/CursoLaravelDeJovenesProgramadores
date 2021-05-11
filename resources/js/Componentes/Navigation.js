import React from 'react';
import {NavItem,Nav,NavbarBrand,Navbar} from 'reactstrap';
import Carro from './Carro';

class Navigation extends React.Component{
    render(){
        return(
            <Navbar color='ligth' light expand ='md'>
                <NavbarBrand href='/'>{this.props.titulo}</NavbarBrand>
                <Nav className='ml-auto' navbar>
                    <NavItem>
                        <Carro/>
                    </NavItem>
                    {/* <NavItem>
                        <NavLink href='/'>Acerca de </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='/'>React </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='/'>JavaScript </NavLink>
                    </NavItem> */}
                </Nav>
            </Navbar>                
        );
    }
}

export default Navigation;