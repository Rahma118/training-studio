/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import React, { Component } from "react";
import { CartProvider } from "react-use-cart";
import { Col, Container, Row } from "reactstrap";

export class AllProducts extends Component {
  state = {
    Products: [],
  };

  componentDidMount() {
    axios.get("/assets/js/Api.json")
    .then((item) => {
      this.setState({
        Products: item.data.products,
      });
    });
  }

  render() {
    return (
       
      <CartProvider>
        
        {/* <!-- ***** Header Area Start ***** --> */}
        <header class="header-area header-sticky" style={{backgroundColor:"transparent", position:"fixed"}}>
          
          <div class="container">
            <div class="row">
              <div class="col-12">
                <nav class="main-nav">
                  {/* <!-- ***** Logo Start ***** --> */}
                  <a href="index.html" class="logo">
                    Training<em> Studio</em>
                  </a>
                  {/* <!-- ***** Logo End ***** -->
                        <!-- ***** Menu Start ***** --> */}
                  <ul class="nav">
                    {/* <li class="scroll-to-section"><Link to='/Basket'>Basket</Link></li>  */}
                    <li class="scroll-to-section">
                      <a href="/Product">Product</a>
                    </li>
                    <li class="scroll-to-section">
                      <a href="#top" class="active">
                        Home
                      </a>
                    </li>
                    <li class="scroll-to-section">
                      <a href="#features">About</a>
                    </li>
                    <li class="scroll-to-section">
                      <a href="#our-classes">Classes</a>
                    </li>
                    <li class="scroll-to-section">
                      <a href="/#schedule">Schedules</a>
                    </li>
                    <li class="scroll-to-section">
                      <a href="/#contact-us">Contact</a>
                    </li>
                    <li class="main-button">
                      <img
                        src="assets/images/115648.png"
                        style={{
                          width: "30px",
                          height: "30px",
                          flexWrap: "nowrap",
                        }}
                      ></img>
                    </li>
                    <li class="main-button">
                      <a href="#">Sign Up</a>
                    </li>
                  </ul>
                  <a class="menu-trigger" a>
                    <span>Menu</span>
                  </a>
                  {/* <!-- ***** Menu End ***** --> */}
                </nav>
              </div>
            </div>
          </div>
        </header>
        {/* <!-- ***** Header Area End ***** --> */}

        
        <Container>
         <Row>
        {this.state.Products.map((result) => (
          <Col md="4" className="text-center mb-3">
            <img src={result.images[0]} className="img-fluid"style={{height:"250px" ,width:"250x"}} />
            <h2>{result.title}</h2>
            <h3 style={{backgroundColor:"lime" ,width:"40px"}}>{result.price}</h3>
          </Col>
        ))}
         </Row>
         </Container>
      </CartProvider>
     
    ); 
  }
}

export default AllProducts;
