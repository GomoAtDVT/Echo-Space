import Search from "../../components/ExploreComps/Search";
import TrendingCarousel from "../../components/ExploreComps/TrendingCarousel";
import FeaturedBlogs from "../../components/LandingComps/FeaturedBlogs";
import BottomNavigation from "../../components/Navigation/BottomNavigation/BottomNavigation";

export default function Explore() {
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
