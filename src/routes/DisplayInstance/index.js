import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

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
    <Container>
      <ul>
        {instances.map(instance => (
          <li key={instance.id}>
            <span>{instance.description}</span>
            {instance.image.length && (
              <img
                src={instance.image}
                alt={instance.title}
                style={{ width: 50, height: 50 }}
              />
            )}
          </li>
        ))}
      </ul>
      <h1>Display instance</h1>
    </Container>
  );
};

DisplayInstance.propTypes = {};

export default DisplayInstance;
