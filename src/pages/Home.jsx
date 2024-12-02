import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "../components/Image";
import Heading from "../components/Heading";
import { FaUndoAlt, FaTruck, FaBeer } from "react-icons/fa"; // Corrected import
import AddOne from "../../src/assets/Phone sales.jpg";
import AddTwo from "../../src/assets/Electronic sales.png";
import AddThree from "../../src/assets/Furniture offers.jpg";
import Products from "../components/Products";
import Speaker from "../../src/assets/speaker.png";
import SmartWatch from "../../src/assets/smartwatch.png";
import Basket from "../../src/assets/basket.png";
import Doll from "../../src/assets/doll.png";
import Vase from "../../src/assets/vase.png";
import BagOne from "../../src/assets/bag one.png";
import Grinder from "../../src/assets/Hand grinder.png";
import BagTwo from "../../src/assets/bag two.png";
import AdFour from "../../src/assets/Ad Four.png";
import Cap from "../../src/assets/cap.png";
import TeaTable from "../../src/assets/tea table.png";
import Headphones from "../../src/assets/headphones.png";
import Sunglass from "../../src/assets/sun glasses.png";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer"; // Ensure Footer is correctly imported

const Home = () => {
  const newArrivals = [
    {
      imgSrc: Speaker,
      name: "Basic Crew Neck Tee",
      price: "$44.00",
      color: "Black",
    },
    {
      imgSrc: SmartWatch,
      name: "Basic Crew Neck Tee",
      price: "$44.00",
      color: "Black",
    },
    {
      imgSrc: Basket,
      name: "Basic Crew Neck Tee",
      price: "$44.00",
      color: "Black",
    },
    {
      imgSrc: Doll,
      name: "Basic Crew Neck Tee",
      price: "$44.00",
      color: "Black",
    },
  ];

  const bestSellers = [
    {
      imgSrc: Vase,
      name: "Basic Crew Neck Tee",
      price: "$44.00",
      color: "Black",
    },
    {
      imgSrc: BagOne,
      name: "Basic Crew Neck Tee",
      price: "$44.00",
      color: "Black",
    },
    {
      imgSrc: Grinder,
      name: "Basic Crew Neck Tee",
      price: "$44.00",
      color: "Black",
    },
    {
      imgSrc: BagTwo,
      name: "Basic Crew Neck Tee",
      price: "$44.00",
      color: "Black",
    },
  ];
  const specialOffers = [
    {
      imgSrc: Cap,
      name: "Basic Crew Neck Tee",
      price: "$44.00",
      color: "Black",
    },
    {
      imgSrc: TeaTable,
      name: "Basic Crew Neck Tee",
      price: "$44.00",
      color: "Black",
    },
    {
      imgSrc: Headphones,
      name: "Basic Crew Neck Tee",
      price: "$44.00",
      color: "Black",
    },
    {
      imgSrc: Sunglass,
      name: "Basic Crew Neck Tee",
      price: "$44.00",
      color: "Black",
    },
  ];
  return (
    <>
      <Header />
      {/* <Header /> */}

      {/* Banner Part Start */}
      <a
        href="#"
        className="bg-bannerImage bg-no-repeat bg-cover bg-center block py-[300px]"
      ></a>
      {/* Banner Part End */}

      {/* Information Part Start */}
      <div className="py-10">
        <Container className={"max-w-headerContainer"}>
          <Flex className={"justify-center"}>
            <div className="w-1/3">
              <Flex className={"justify-center gap-x-2"}>
                <FaBeer />
                <Heading
                  as="h1"
                  text="Two Years Warranty"
                  className="text-sm font-dm"
                />
              </Flex>
            </div>

            <div className="w-1/3">
              <Flex className={"justify-center gap-x-2"}>
                <FaTruck />
                <Heading
                  as="h1"
                  text="Free Shipping"
                  className="text-sm font-dm"
                />
              </Flex>
            </div>
            <div className="w-1/3">
              <Flex className={"justify-center gap-x-2"}>
                <FaUndoAlt />
                <Heading
                  as="h1"
                  text="Easy Returns"
                  className="text-sm font-dm"
                />
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Information Part End */}

      {/* Ads Part Start */}
      <div className="pt-[170px] pb-[70px]">
        <Container className="max-w-headerContainer">
          <Flex className={"gap-x-10"}>
            <div className="w-1/2">
              <Image imgSrc={AddOne} imgAlt={"Phone sales.jpg"} />
            </div>
            <div className="w-1/2">
              <Flex className="flex-col gap-y-8">
                <Image imgSrc={AddTwo} imgAlt={"Electronic sales.png"} />
                <Image imgSrc={AddThree} imgAlt={"Furniture offers.jpg"} />
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Ads Part End */}

      {/* Products Part Start */}
      <div className="py-28">
        <Container className="max-w-headerContainer">
          <h2 className="mb-6 text-4xl font-bold font-dm">New Arrivals</h2>
          <Products productData={newArrivals} />
        </Container>
      </div>
      <div className="py-28">
        <Container className="max-w-headerContainer">
          <h2 className="mb-6 text-4xl font-bold font-dm">Our Best Sellers</h2>
          <Products productData={bestSellers} />
        </Container>
      </div>
      {/* Products Part End */}

      {/* Ads Part Start */}
      <div className="py-28">
        <Container className="max-w-headerContainer">
          <Image imgSrc={AdFour} imgAlt="Ad Four.png" />
        </Container>
      </div>
      {/* Ads Part End */}

      {/* Special Offers Products Start */}
      <div className="py-28">
        <Container className="max-w-headerContainer">
          <h2 className="mb-6 text-4xl font-bold font-dm">Special Offers</h2>
          <Products productData={specialOffers} />
        </Container>
      </div>
      {/* Special Offers Products End */}

      <Footer />
    </>
  );
};

export default Home;
