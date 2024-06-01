import { Col, Container,Image,Nav,NavLink,Row, Stack } from 'react-bootstrap'
//import { NavLink } from 'react-router-dom';
///import { useState } from "react";


interface imgProtypes {
    imageSrcPath: string;
   // navItems: ItemList[];
  }

function Footer({imageSrcPath }: imgProtypes) {
 //   const [selectedIndex, setSelectedIndex] = useState(-1);
 
    return (
        <footer>
            <Container fluid>
                <Row className='bg-dark text-white p-4'>
                    <Col className='mx-5'>
                        <Stack>
                            <Image src={imageSrcPath} 
                            alt="comapnyLogo"
                            rounded
                            width={150}
                            height={150}
                            />
                            <h2>Company Name</h2>
                            <p>Company tagLine here</p>
                        </Stack>
                    </Col>
                    <Col>
                        <Nav>
                        <h4>Useful Links!</h4>
                           <NavLink className="text-white" href="/">Home</NavLink>
                           <NavLink className="text-white" href="/product">Product</NavLink>
                           <NavLink className="text-white" href="/contact">Contact</NavLink>
                        </Nav>
                    </Col>
                    
                    <Col>
                        <h4>Contact Us!</h4>
                        <p>email@example.com</p>
                        <p>Phone:+(55)545-121</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
  }

export default Footer