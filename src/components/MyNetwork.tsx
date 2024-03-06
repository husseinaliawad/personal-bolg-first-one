import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Connection {
  id: number;
  profilePicture: string;
  name: string;
  jobTitle: string;
}

const MyNetwork: React.FC = () => {
  const [connections, setConnections] = useState<Connection[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchConnections = async () => {
      try {
        const response = await axios.get<Connection[]>('API_ENDPOINT_URL');
        setConnections(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchConnections();
  }, []);

  return (
    <div>
      <h2>My Network</h2>
      {isLoading ? (
        <p>Loading connections...</p>
      ) : (
        <ul>
          {connections.map((connection) => (
            <li key={connection.id}>
              <img src={connection.profilePicture} alt={connection.name} />
              <div>
                <p>{connection.name}</p>
                <p>{connection.jobTitle}</p>
              </div>
              <button>Connect</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyNetwork;