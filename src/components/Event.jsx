import { Button, Card } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Event(props) {
  
    const [e, SetEvent]= useState(props.e)
    const changeLike =()=>{
      SetEvent((previousE)=>({
        ...previousE,
        like:!previousE.like
      }))
    }
    const bookEvent =()=>{
      props.fonctionAlert()
      SetEvent((previousE)=>({...previousE,nbParticipants:previousE.nbParticipants+1,nbTickets:previousE.nbTickets-1}))}
    return <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={e.nbTickets===0?"images/sold_out.png":`images/${e.img}`}/>
      <Card.Body>
        <Card.Title><Link to={`/events/details/${e.name}`}>{e.name}</Link> </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <p> price: {e.price}</p>
        <p> nombre de participants:{e.nbParticipants}</p>
        <p> nombre de tickets: {e.nbTickets}</p>
        <Button variant="danger" onClick={changeLike}>{e.like?"dislike":"like"}</Button>

        <Button variant="primary" onClick={bookEvent} disabled ={e.nbTickets===0?true:false}>book an event</Button>
      </Card.Body>
    </Card>
    </>
}