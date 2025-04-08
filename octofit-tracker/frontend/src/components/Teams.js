import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://verbose-journey-rpgr74x77jj3pw9p-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="display-4 text-center">Teams</h1>
      <ul className="list-group mt-4">
        {teams.map(team => (
          <li key={team._id} className="list-group-item">
            {team.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Teams;
