import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'reactstrap';
import Footer from '../components/Footer';

const Schedule = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const apiKey = "e65dc4c9b5c5436f8fbbbc58bef884d1";
    const endpointUrl = `https://api.sportsdata.io/v3/nba/scores/json/Games/2023?key=${apiKey}`;

    fetch(endpointUrl)
      .then((response) => response.json())
      .then((data) => {
        // Filter the games to show only from now onwards
        const now = new Date();
        const filteredGames = data.filter(game => new Date(game.DateTime) >= now);
        // Sort the games by date in ascending order
        const sortedGames = filteredGames.sort((a, b) => new Date(a.DateTime) - new Date(b.DateTime));
        // Set the games state to the next 50 games
        setGames(sortedGames.slice(0, 50));
      })
      .catch((error) => console.error(error));
  }, []);


  return (
    <div className="container">
      <div className="py-4">
        <Container>
          <Row>
            <Col xs="12" md="8" className="d-flex align-items-center justify-content-center">
              <h1 class="display-5 fw-bolder">GAME SCHEDULE</h1>
            </Col>
            <Col xs="12" md="4" className="d-flex align-items-center justify-content-center">
              <img width='200px' src="https://raw.githubusercontent.com/apeachcc/nba-website/2397c7da8530cd130b59fb0673bb01694d23ec00/src/components/bear.svg" alt="placeholder" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </div>
      {/* <br></br>
        <h1 class="display-5 fw-bolder">GAME SCHEDULE</h1>
        <br></br> */}
      <div className="table-wrapper">
        <table className="team-season-stats">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Visitor Team</th>
              <th>Home Team</th>
            </tr>
          </thead>
          <tbody>
            {games.map((game) => (
              <tr key={game.GameId}>
                <td>{new Date(game.DateTime).toLocaleDateString()}</td>
                <td>{new Date(game.DateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
                <td>{game.AwayTeam}</td>
                <td>{game.HomeTeam}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div class="container p-5">
      <Footer />
      </div>
    </div>
    
  );
};

export default Schedule;
