import React from 'react';

import AnimeCard from './AnimeCard';

function HomePage(props){
    <div className="anime-list">
                {props.animeList.map(anime => (
                    <AnimeCard 
                    anime={anime}
                    key={anime.mal_id}
                    />
                ))}
            </div>
}