import React, { useState } from 'react';
import axios from 'axios';
import './style.css'
import { Card, ListGroup, ListGroupItem, Container, Navbar } from 'react-bootstrap';
const Api = () => {


   

    const [currentMatches, setCurrentMatches] = useState([])

    console.log(currentMatches)


     const data = () => {
                 axios.get('https://api.cricapi.com/v1/currentMatches?apikey=e4495ac1-4fe1-43ce-8a5d-d3a257a9fb3d&offset=0')
                            .then(res => {
                                
                                setCurrentMatches(res.data.data)
                            }).catch(err => {
                                console.log(err)
                            })


     
            }


    return (
        <>

         <Navbar expand="lg" variant="light" bg="primary">
            <Container>
                <Navbar.Brand href="#">Realistic Dreamer Cricket Scores</Navbar.Brand>
                <button onClick= {data} className="btn1">Refresh Score</button>
            </Container>
        </Navbar>   

         <section className='heading'>
             <h2>welcome to Realistic dreamer site hope you will have a great time</h2>
         </section>

           {  currentMatches.map((sunny) => {
               if(sunny.matchType === "t20") {
                   return(
                 <div className='containers' key = {sunny.id}>
                     <Container>
                    <Card style={{ width: '100%' }} className='content'>
                        <Card.Body >
                            <Card.Title>{sunny.teams[0]} vs {sunny.teams[1]} </Card.Title>
                            <Card.Text>
                            Venue:{sunny.venue}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>{sunny.status}</ListGroupItem>
                            <ListGroupItem>{sunny.dateTimeGMT}</ListGroupItem>
                            <ListGroupItem>runs : {sunny.score[0].r}</ListGroupItem>
                            <ListGroupItem>{sunny.dateTimeGMT}</ListGroupItem>
                            <ListGroupItem></ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                    </Container>
               </div>
                 )
               } 
                    
             })
         }

        </>
    );
}

export default Api;
