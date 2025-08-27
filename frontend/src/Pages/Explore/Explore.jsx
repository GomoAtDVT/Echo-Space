import axios from "axios";
import Search from "../../components/ExploreComps/Search";
import TrendingCarousel from "../../components/ExploreComps/TrendingCarousel";
import FeaturedBlogs from "../../components/LandingComps/FeaturedBlogs";
import BottomNavigation from "../../components/Navigation/BottomNavigation/BottomNavigation";
import { useEffect, useState } from "react";

export default function Explore() {
  const [ worldNews, setWorldNews] = useState([]);
  
  console.log("World news " ,worldNews);
  let apiKey = import.meta.env.VITE_NEWS_API_KEY;
  
  async function getWorldNews(query) {

  try {
    const response = await axios.get('https://api.worldnewsapi.com/search-news', {
      params: {
        text: query,
        language: 'en',
        number: 10
      },
      headers: {
        'X-API-KEY': `${apiKey}`
      }
    });
    
    setWorldNews(response.data.news)
  } catch (error) {
    console.error('Failed to fetch news:', error);
  }
}

// Usage
// useEffect(()=> {
//   getWorldNews('technology')
// },[])
  return (
    <>
      <section className="flex flex-col h-screen ">
        <div className="flex dark:bg-gray-800 flex-row items-center justify-between pl-38 pr-2 sticky top-0 bg-white">
          <h1 className=" text-xl py-2 ">Echo space</h1>
        </div>
        <search className="flex justify-center my-4">
          <Search />
        </search>
        <article className="m-4 mr-0">
          <h1 className="text-2xl font-bold">Trending</h1>
            <TrendingCarousel />
        </article>
        <section>
          <article className="m-4 mr-0">
            <h1 className="text-2xl font-bold">Recommended</h1>
          <FeaturedBlogs />
          <FeaturedBlogs />
          <FeaturedBlogs />
          </article>
        </section>
      </section>
      <BottomNavigation />
    </>
  );
}
