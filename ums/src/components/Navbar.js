import "../index.css";
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';

const Navbar = () => {
  const [openBasic, setOpenBasic] = useState(false);

  return (
    <div className="Navbar">
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>


        <MDBCollapse navbar show={openBasic}>

          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBDropdown>
                <ul>
                  <li class="nav-item dropdown">
                    <p>ABOUT</p>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a class="dropdown-item" href="#">About College</a>
                      <a class="dropdown-item" href="#">History</a>
                      <a class="dropdown-item" href="#">Founder</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">Vision & Mission</a>
                      <a class="dropdown-item" href="#">Message from Principal</a>
                      <a class="dropdown-item" href="#">Administration</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">Media Coverage</a>
                      <a class="dropdown-item" href="#">Accreditation</a>
                      <a class="dropdown-item" href="#">Annual Reports</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">Highlights</a>
                      <a class="dropdown-item" href="#">Alumni</a>
                      <a class="dropdown-item" href="#">Policies</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">Careers</a>
                      <a class="dropdown-item" href="#">Forms/Letters</a>
                    </div>
                  </li>
                </ul>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
                <ul>
                  <li class="nav-item dropdown">
                    <p>

                      ACADEMIC

                    </p>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                </ul>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
                <ul>
                  <li class="nav-item dropdown">
                    <p>ADMISSIONS</p>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                </ul>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
                <ul>
                  <li class="nav-item dropdown">
                    <p>EXAMINATION</p>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                </ul>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <ul>
                  <li class="nav-item dropdown">
                    <p >CAMPUS LIFE</p>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                </ul>
              </MDBDropdown>
            </MDBNavbarItem>







            <MDBNavbarItem>
              <MDBDropdown>
                <ul>
                  <li class="nav-item dropdown">
                    <p>MANDATES</p>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                </ul>
              </MDBDropdown>
            </MDBNavbarItem>


          </MDBNavbarNav>
          <ul>
            <li>
            <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Search' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form>
            </li>
          </ul>
          
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </div>
  );
};

export default Navbar;
