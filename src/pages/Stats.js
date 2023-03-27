import React, { useState, useEffect } from 'react';

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
      <br></br>
      <h1 class="display-5 fw-bolder">NBA SEASON STATS</h1>
      <br></br>
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
    </div>
  );
}

export default Stats;
