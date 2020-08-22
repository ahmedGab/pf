import React, { Component,Fragment } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon,MDBBtn } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import axios from "axios"
class NavbarPage extends Component {
state = {
  isOpen: false
  ,data:""
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}
async componentDidMount(){
  const result =await axios.get("http://localhost:4000/dogsLovers/users/profil",{withCredentials:true})
this.setState({data:result.data})
}

render() {
  return (
    <Router>
      <MDBNavbar color="default-color" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Navbar</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="#!">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Features</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Pricing</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Dropdown</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
           
            
            <MDBNavItem>
{ this.state.data =="error" || this.state.data =="" ?
              <MDBDropdown basic>
                              <MDBBtn  color="info">Se connecter</MDBBtn>
                              <MDBBtn  color="info">S'inscrire</MDBBtn>

                         </MDBDropdown>:<MDBDropdown basic>
                         <MDBDropdownToggle nav caret>
                         {this.state.data.name +" "+this.state.data.lastname }
                         </MDBDropdownToggle>
                         <MDBDropdownMenu className="dropdown-default">
                           <MDBDropdownItem href="#!">Se déconnecter</MDBDropdownItem>
                         </MDBDropdownMenu>
                                       </MDBDropdown>
}
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      
    </Router>
    );
  }
}

export default NavbarPage;

