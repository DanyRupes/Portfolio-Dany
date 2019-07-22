import { Link } from "gatsby"
import PropTypes from "prop-types"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
import React from "react"

export default class Header extends React.Component {


  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      selectedTitle:'Projects'
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }


  render() {
    let { uname, contents } = this.props.data
    let { selectedTitle } = this.state
    return (
        <Navbar color="#2a0e46" light expand="lg" id="#" className="head-container">
          <NavbarBrand style={{color:'white', fontSize:'2.4em'}}> {uname}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />


          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            {
              contents.map(item => {
                return (
                  <NavItem style={{listStyleType:'none'}} key={item.url}>
                    <NavLink href={item.url} onMouseOver={()=>{
                      this.setState({selectedTitle:item.name})
                      // console.log( window.location.origin+'/'+item.url)
                      window.location.href =  window.location.origin+'/'+item.url
                      // window.location = ''
                    }}
                     style={{color:selectedTitle==item.name?'#d908ff':'white', textDecoration:'none',fontSize:'1.2em'}}> {item.name}</NavLink>
                  </NavItem>
                )
              })
            }
            </Nav>
            </Collapse>
      </Navbar>
    )
  }
}
// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

