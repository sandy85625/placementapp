import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from '../../Navbar/Navbar';

function Home() {
  return (
    <>
    <NavBar/>
     <Container fluid className="text-center bg-primary text-white py-4">
      <h1>OpportunityLink: Student-Recruiter connect</h1>
    </Container>
    </>
   
  );
}

export default Home;
