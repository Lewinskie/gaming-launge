import Banner from "../components/Banner";
import Offers from "../components/Offers";
import OffersHero from "../components/OffersHero";

const Home = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <Offers />
      <OffersHero />
      <Banner />
    </div>
  );
};

export default Home;
