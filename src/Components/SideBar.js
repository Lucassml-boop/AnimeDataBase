import React from 'react';

function SideBar({ topAnime }){
    return(
        <aside>
            <nav>
                <h3>Top Anime</h3>

                <div className="anime-list">
                
            </div>
                {topAnime.map(anime => (
                    <a
                    href={anime.url}
                    target="_blank"
                    key={anime.mal_id}
                    rel="noreferrer"
                    >
                        <figure className="image-top">
                            <img src={anime.images?.jpg?.large_image_url} alt={anime.title} />
                        </figure>
                            { anime.title }
                    </a>
                    
                ))}
            </nav>
        </aside>
    )
}

export default SideBar;