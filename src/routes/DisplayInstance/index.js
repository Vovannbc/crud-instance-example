import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const DisplayInstance = props => {
  const [instances, setInstances] = useState([]);
  const getInstances = () => {
    fetch("http://localhost:3001/instances")
      .then(res => res.json())
      .then(data => setInstances(data));
  };

  useEffect(() => {
    getInstances();
  }, []);
  return (
    <div>
      <h1>Display instance</h1>
      <ul>
        {instances.map(instance => (
          <li key={instance.id}>
            <span>{instance.description}</span>
            {instance.image.length && <img src={instance.image} alt={instance.title} style={{ width: 50, height: 50 }}/>}
          </li>
        ))}
      </ul>
    </div>
  );
};

DisplayInstance.propTypes = {};

export default DisplayInstance;
