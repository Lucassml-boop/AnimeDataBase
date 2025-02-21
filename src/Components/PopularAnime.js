import { useState, useEffect } from 'react';
import AnimeCard from './AnimeCard';

function PopularAnime() {
  const [popularAnime, setPopularAnime] = useState([]);

  useEffect(() => {
    const fetchPopularAnime = async () => {
      try {
        const response = await fetch('https://api.jikan.moe/v4/anime');
        const data = await response.json();

        const sortedAnime = data.data.slice(0, 12).sort((a, b) => a.title.localeCompare(b.title));

        setPopularAnime(sortedAnime);
      } catch (error) {
        console.error('Erro ao buscar animes populares:', error);
      }
    };

    fetchPopularAnime();
  }, []);

  return (
    <div>
      <h2>Animes Populares</h2>
      <div className="popular-anime-container">
        <div className="popular-anime-card">
        {popularAnime.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime}  />
        ))}
        </div>
      </div>
    </div>
  );
}

export default PopularAnime;
