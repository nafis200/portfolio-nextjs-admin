import Skills from "@/components/homepages/Skills";
import Banner from "../components/homepages/Banner";
import Project from "@/components/homepages/Project";

const HomePage = () => {
  return (
    <div className="">
      <h1 className="text-4xl text-center ">.</h1>
      <div className="mt-5">
        <Banner />
      </div>
        <Skills/>

        <Project/>
    </div>
  );
};

export default HomePage;
