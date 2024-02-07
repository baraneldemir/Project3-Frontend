import React from 'react'
import PayPal from '../../PayPal/PayPal'
import { Card } from "react-bootstrap"
import { currencyFormatter } from "../../utilities/currencyFormatter"
import "./TotalPaymentModal.css"


export default function TotalPaymentModal({ totalPrice, totalQuantity }) {
    const formattedPrice = currencyFormatter.format(totalPrice)

  return (
    <Card >
      <Card.Body >
        <Card.Header style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            
        }}>
        <h2 class="title">
        <span style={{fontSize:"22px"}} class="title-word title-word-1">Thanks for</span> &nbsp;
        <span style={{fontSize:"22px"}} class="title-word title-word-2">Shopping with</span>&nbsp;
        <span style={{fontSize:"22px"}} class="title-word title-word-3">Cosmic</span>&nbsp;
        <span style={{fontSize:"22px"}} class="title-word title-word-4">Collectibles</span>
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
