import { useEffect, useState } from 'react';

const FetchGetRequest = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataForPosts = async () => {
      try {
        const response = await fetch('https://localhost:7071/Game', {
          method: 'GET',
          headers: {
            "Content-Type": "application/json"
          },
        });
        let postsData = await response.json();
        setData(postsData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDataForPosts();
  }, []);


  return (
   
      <div>
        {JSON.stringify(data)}
      </div>
  );
};

export default FetchGetRequest;