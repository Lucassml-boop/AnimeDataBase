import {useState, useEffect} from 'react';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import MainContent from './Components/MainContent';

function App() {
  const [animeList, searchetAnimeList] = useState([]);
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

  useEffect(() => {
    GetTopAnime();
    console.log("buscando animes")
  }, []);

  useEffect(() => {
    console.log("top animes att", topAnime);
  }, [topAnime]);



  return (
    <div>
      <Header />
      <div className='content-wrap'>
        <SideBar
          topAnime={topAnime}
        />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
