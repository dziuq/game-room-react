import { useEffect, useState } from "react";
import  GameCard  from './GameCard.jsx';

const GameList = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("https://localhost:7071/Game");
        if (!response.ok) {
          throw new Error("Błąd podczas pobierania danych");
        }
        const data = await response.json();
        setGames(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) return <p>Ładowanie danych...</p>;
  if (error) return <p>Błąd: {error}</p>;

  return (
    <div>
        {games.map((game => (
          <GameCard key = {game.name} name = {game.name} category={game.category} totalScore={game.totalScore}></GameCard>
        )))}
    </div>
  );
};

export default GameList;