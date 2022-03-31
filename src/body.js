import React, { useState } from 'react';
import axios from 'axios';
import './style.css'
import { Card, ListGroup, ListGroupItem, Container, Navbar, Button } from 'react-bootstrap';
import { FaInstagram, FaLinkedin, FaFacebookF, FaGithub } from 'react-icons/fa'

const Api = () => {


   

    const [currentMatches, setCurrentMatches] = useState([])

    console.log(currentMatches)


     const data = () => {
                 axios.get('https://api.cricapi.com/v1/currentMatches?apikey=e4495ac1-4fe1-43ce-8a5d-d3a257a9fb3d&offset=0')
                            .then(res => {
                                console.log(res.data)
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
                <button onClick= {data} className="btn1">click me for scores data</button>
            </Container>
        </Navbar>   

         <section className='heading'>
             <h2>welcome to Realistic dreamer site hope you will have a great time</h2>
         </section>
            <h2>All International T20 Matches</h2>
            <p className='note'>*Note:- If the scores are not getting refreshed that means the limit of api hits has been reached.*</p>
            <p className='note'>*Note:- Number of hits per day is 500 overall*</p>
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
                            <ListGroupItem>Date and Time: {sunny.dateTimeGMT}</ListGroupItem>
                            <ListGroupItem>match Type: {sunny.matchType}</ListGroupItem>
                            <ListGroupItem>{sunny.teams[1]}</ListGroupItem>
                             <ListGroupItem>runs : {sunny?.score[0]?.r}</ListGroupItem>
                            <ListGroupItem>Wickets : {sunny.score[0]?.w}</ListGroupItem>
                            <ListGroupItem>Overs : {sunny.score[0]?.o}</ListGroupItem>
                            <ListGroupItem>{sunny.teams[0]}</ListGroupItem>
                            <ListGroupItem>runs : {sunny.score[1]?.r}</ListGroupItem>
                            <ListGroupItem>Wickets : {sunny.score[1]?.w}</ListGroupItem>
                            <ListGroupItem>Overs : {sunny.score[1]?.o}</ListGroupItem>
                             
                        </ListGroup>
                        
                    </Card>
                    </Container>
               </div>
                 )
               } 
                    
             })
         }
       <section>
           <h2>All Ineternational Odi Matches</h2>
         {  currentMatches.map((sunny) => {
               if(sunny.matchType === "odi") {
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
                            <ListGroupItem>match Type: {sunny.matchType}</ListGroupItem>
                            <ListGroupItem>{sunny.teams[1]}</ListGroupItem>
                            <ListGroupItem>runs : {sunny.score[0]?.r}</ListGroupItem>
                            <ListGroupItem>Wickets : {sunny.score[0]?.w}</ListGroupItem>
                            <ListGroupItem>Overs : {sunny.score[0]?.o}</ListGroupItem>
                            <ListGroupItem>{sunny.teams[0]}</ListGroupItem>
                            <ListGroupItem>runs : {sunny.score[1]?.r}</ListGroupItem>
                            <ListGroupItem>Wickets : {sunny.score[1]?.w}</ListGroupItem>
                            <ListGroupItem>Overs : {sunny.score[1]?.o}</ListGroupItem>
                        </ListGroup>
                    </Card>
                    </Container>
               </div>
                 )
               } 
                    
             })
         }
         </section>
         <section>
           <h2>All Ineternational Test Matches</h2>
         {  currentMatches.map((sunny) => {
               if(sunny.matchType === "test") {
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
                            <ListGroupItem>runs : {sunny.score[0]?.r}</ListGroupItem>
                            <ListGroupItem>{sunny.dateTimeGMT}</ListGroupItem>
                            <ListGroupItem>match Type: {sunny.matchType}</ListGroupItem>
                            
                        </ListGroup>
                        
                    </Card>
                    </Container>
               </div>
                 )
               } 
                    
             })
         }


         </section>
         <Card className="text-center">
            <Card.Header>Developer info</Card.Header>
                <Card.Body>
                    <Card.Title>Developer of this site Sunny Prasad</Card.Title>
                    <Card.Text>
                    To get connect and feedback yo can contact me through below social media sites 
                    </Card.Text>
                    <Button variant="primary" className='button'><a href='https://www.instagram.com/sunnyyyprasad/' className='scl-btn' target="blank"><FaInstagram /> instagram</a></Button>
                    <Button variant="primary" className='button'><a href='https://www.linkedin.com/in/sunny-prasad055/' className='scl-btn' target="blank"><FaLinkedin /> LinkedIn</a></Button>
                    <Button variant="primary" className='button'><a href='https://www.facebook.com/profile.php?id=100007362766503' className='scl-btn' target="blank"><FaFacebookF /> Facebook</a></Button>
                    <Button variant="primary" className='button'><a href='https://github.com/sunnyprasad055' className='scl-btn' target="blank"><FaGithub /> Github</a></Button>
                </Card.Body>
            
        </Card>

        </>
    );
}

export default Api;
