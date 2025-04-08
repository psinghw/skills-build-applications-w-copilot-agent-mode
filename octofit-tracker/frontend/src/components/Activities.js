import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://verbose-journey-rpgr74x77jj3pw9p-8000.app.github.dev/api/activities/')
      .then(response => response.json())
      .then(data => setActivities(data))
      .catch(error => console.error('Error fetching activities:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="display-4 text-center">Activities</h1>
      <ul className="list-group mt-4">
        {activities.map(activity => (
          <li key={activity._id} className="list-group-item">
            {activity.activity_type} - {activity.duration}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Activities;
