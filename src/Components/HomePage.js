import {useState, useEffect} from 'react';
import Header from './Header';
import SideBar from './SideBar';
import MainContent from './MainContent';
import PopularAnime from './PopularAnime';

function HomePage() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");

  const GetTopAnime = async () => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/top/anime`);
      const data = await response.json();

      setTopAnime(data.data.slice(0,5));

    }catch(error){
      console.error('error', error);
    }
  };

  const HandleSearch = e => {
    e.preventDefault();

    
    FetchAnime(search);
  }

  const FetchAnime = async (query) => {
    const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&order_by=title&sort=asc&limit=15`)
    .then(res => res.json());


    setAnimeList(temp.data);
  }

  useEffect(() => {
    GetTopAnime();
    
  }, []);

  return (
    <div>
      <Header />
      <div className='content-wrap'>
        <SideBar
          topAnime={topAnime}
        />


          {animeList.length === 0 && <PopularAnime/>}
 



        <MainContent
        HandleSearch={HandleSearch}
        search={search}
        setSearch={setSearch}
        animeList={animeList}
        />

      </div>
    </div>
  );
}

export default HomePage;
