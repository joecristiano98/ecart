import React from 'react'
import { Col, Row } from 'react-bootstrap'


function Footer() {
  return (
    <div>



      <div className='p-5 bg-danger text-white mt-2' >
        <Row>

          <Col lg={1} md={1} >
            <img
              src="https://i.postimg.cc/43rLDv7J/online-shopping-app-application-logo-design-vector-40706776.jpg"
              alt=""
              width="30"
              height="30"
              className="d-inline-block align-top mt-5 ms-3"
            />
          </Col>
          <Col lg={2} md={1} className='mt-5'>
            <p><i class="fa-regular fa-copyright" style={{ color: 'white' }}></i> 2023 Upvids</p>
          </Col>

          <Col >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est aliquam architecto veniam facilis dolorem obcaecati consequatur hic provident! Ipsam enim optio suscipit cumque corrupti iure vero accusantium. Quas, cupiditate qui.
          </Col>
          <Col>
            <Row>

              <Col md={4}  className='ms-5'>
                <p>Contact Us :</p>
                <a href="https://www.youtube.com/"><i class="fa-brands fa-youtube fa-2x" style={{ color: 'white' }}></i> </a>
                <a href='https://www.facebook.com/login/'><i class="fa-brands fa-facebook fa-2x ms-1" style={{ color: 'white' }}></i></a>
                <a href='https://www.instagram.com/'><i class="fa-brands fa-instagram fa-2x ms-2" style={{ color: 'white' }}></i></a>
                <a href='https://twitter.com/i/flow/login'><i class="fa-brands fa-square-x-twitter fa-2x ms-2" style={{ color: 'white' }}></i></a>
                <a href='https://in.pinterest.com/'><i class="fa-brands fa-pinterest fa-2x ms-2" style={{ color: 'white' }}></i></a>

              </Col>
            </Row>
          </Col>


        </Row>


      </div>


    </div>
  )
}

export default Footer