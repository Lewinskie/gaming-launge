import AccessoriesAndConsoles from "../components/AccessoriesAndConsoles";
import Banner from "../components/Banner";
import ComingSoon from "../components/ComingSoon";
import Newsletter from "../components/Newsletter";
import Offers from "../components/Offers";
import OffersHero from "../components/OffersHero";
import ProdCategories from "../components/ProdCategories";
import { Hr } from "../utils/Hr";

const Home = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <Offers />
      <OffersHero />
      <Banner />
      <ProdCategories />
      <Hr />
      <ComingSoon />
      <Newsletter />
      <AccessoriesAndConsoles />
    </div>
  );
};

export default Home;
