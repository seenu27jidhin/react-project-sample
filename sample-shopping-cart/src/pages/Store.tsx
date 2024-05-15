import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { Col, Row } from "react-bootstrap"
import storeItems from "../data/items.json"
import { StoreItems } from "../components/StoreItems"

export class Store extends Component {
  

  render() {
    return (
      <>
        <h1>store</h1>
        <Row md={2} xs={1} lg={3} className="g-3">
            {storeItems.map(item => (               
                    <Col key={item.id}><StoreItems {...item} /></Col>
                
            ))}
        </Row>
    </>
    )
  }
}

export default Store
