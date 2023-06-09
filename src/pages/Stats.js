import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Footer from '../components/Footer';

const apiKey = 'c6e235eed226481c84a5151618898a4d';
const endpointUrl = 'https://api.sportsdata.io/v3/nba/scores/json/TeamSeasonStats/2023';
const requestUrl = `${endpointUrl}?key=${apiKey}`;

function Stats() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetch(requestUrl)
      .then(response => response.json())
      .then(data => setStats(data))
      .catch(error => console.error(error));
  }, []);

  const headers = ['Team', 'Games', 'Points', 'Field Goal %', 'Three Pointers %', 'Free Throws %', 'Rebounds', 'Assists', 'Steals', 'Turnovers', 'Personal Fouls'];

  return (
    <div className="container">
      <div className="py-4">
        <Container>
          <Row>
            <Col xs="12" md="8" className="d-flex align-items-center justify-content-center">
              <h1 class="display-5 fw-bolder">NBA SEASON STATS</h1>
            </Col>
            <Col xs="12" md="4" className="d-flex align-items-center justify-content-center">
              <img width='200px' src="https://raw.githubusercontent.com/apeachcc/nba-website/8a2ee414e831f427f72f9e1f6ff5ae251a62ad96/src/components/dragon.svg" alt="placeholder" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </div>
      {/* <br></br>
      <h1 class="display-5 fw-bolder">NBA SEASON STATS</h1>
      <br></br> */}
      <div className="table-wrapper">
        <table className="team-season-stats">
          <thead>
            <tr>
              {headers.map(header => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {stats.map(team => (
              <tr key={team.TeamID}>
                <td>{team.Name}</td>
                <td>{team.Games}</td>
                <td>{team.Points}</td>
                <td>{team.FieldGoalsPercentage}%</td>
                <td>{team.ThreePointersPercentage}%</td>
                <td>{team.FreeThrowsPercentage}%</td>
                <td>{team.Rebounds}</td>
                <td>{team.Assists}</td>
                <td>{team.Steals}</td>
                <td>{team.Turnovers}</td>
                <td>{team.PersonalFouls}</td>
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
}

export default Stats;
