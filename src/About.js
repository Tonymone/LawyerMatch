import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontext";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "About Us",
    content: (
      <>
        <span>
          <strong>LawyerMatch</strong> is an interactive online platform that makes it faster and easier to find and hire Top Rated Lawyers in any city / court in India, because you deserve access to first-rate, professional legal advice from mission to make the legal experience remarkable by making legal services high quality, cost-effective and on-demand for every need.
        </span>
      </>
    )
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default About;
