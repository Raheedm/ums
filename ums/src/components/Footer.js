import React, { useEffect, useState } from "react";

import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const pageHeight = document.body.clientHeight;

      if (scrollTop + windowHeight >= pageHeight) {
        setShowFooter(true);
        window.removeEventListener("scroll", handleScroll); // Remove the event listener after showing the footer
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    return (
      <MDBFooter bgColor='new-darkblue' className='text-center text-lg-start text-muted'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          <div className='me-5 d-none d-lg-block'>
            <span>Get connected with us on social networks:</span>
          </div>
  
          <div>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="twitter" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="google" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="instagram" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="linkedin" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="github" />
            </a>
          </div>
        </section>
  
        <section className=''>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                 
                  <MDBIcon icon="university" className="me-3"/>
                  Parvatibai Chowgule College of Arts & Science
                </h6>
                <p>
                  
                </p>
              </MDBCol>
  
              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Quick Links</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    Latest News
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Sports Corner
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Examination Cell
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    College Library
                  </a>
                </p>
              </MDBCol>
  
              <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    Admissions
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Prospectures
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    FAQs
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Have any queries
                  </a>
                </p>
              </MDBCol>
  
              <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                 Gogol ,Margao ,Goa 403601
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  principal@chowgules.ac.in
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> 0832-2722222
                </p>
                <p>
                  <MDBIcon icon="print" className="me-3" /> 0832-2722222
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
  
        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2023 Copyright:
          <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
            Parvatibai Chowgule College
          </a>
        </div>
      </MDBFooter>
  );
};

export default Footer;
