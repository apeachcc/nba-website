import React from 'react';
// import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import Gallery from "../components/Gallery";
import Teams from "../components/Teams";
import Footer from '../components/Footer';

function Home() {
  return (
    <div class="container-fluid bg-light text-dark p-5" className="jumbotron">
      <div class="p-5">
        <h1 class="display-4 fw-bold">Welcome to the <div class="text-highlight"> NBA WEBSITE!</div></h1>
        <p>This website is dedicated to bringing you the latest news, scores, and updates from the world of NBA basketball.</p>
        <br></br><a href="/schedule" className='button'>GAME SCHEDULE</a>
      </div>
      <div class="container">
      <Gallery />
      </div>
      <div class="container p-5">
      <Teams />
      </div>
      <div class="container p-5">
      <Footer />
      </div>
    </div>
  );
}

export default Home;
