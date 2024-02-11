import React from 'react'
import PayPal from '../../PayPal/PayPal'
import { Card } from "react-bootstrap"
import { currencyFormatter } from "../../utilities/currencyFormatter"
import "./TotalPaymentModal.css"


export default function TotalPaymentModal({ totalPrice }) {
    const formattedPrice = currencyFormatter.format(totalPrice)

  return (
    <Card >
      <Card.Body  >
        <Card.Header style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center", 
        }}>
        <h2 className="title">
        <span style={{fontSize:"22px"}} className="title-word title-word-1">Thanks for</span>
        <span style={{fontSize:"22px"}} className="title-word title-word-2"> shopping with</span>
        <span style={{fontSize:"22px"}} className="title-word title-word-3"> Cosmic</span>
        <span style={{fontSize:"22px"}} className="title-word title-word-4"> Collectibles!</span>
        </h2>      
        </Card.Header>
        <Card.Title style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "10px"
        }}>Total Price:</Card.Title>
        <Card.Text style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>{formattedPrice}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <PayPal  />
      </Card.Footer>
    </Card>
  )
}
