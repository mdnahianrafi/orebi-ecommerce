import Container from "./components/Container";
import Flex from "./components/Flex";
import Image from "./components/Image";
import Logo from "../src/assets/logo.png";
import Menu from "./components/Menu";
import { HiBars3BottomLeft } from "react-icons/hi2";
import Heading from "./components/Heading";
import { FaSearch, FaUser, FaUndoAlt } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";
import { FaCartShopping, Fa2, FaTruck } from "react-icons/fa6";
import AddOne from "../src/assets/Phone sales.jpg";
import AddTwo from "../src/assets/Electronic sales.png";
import AddThree from "../src/assets/Furniture offers.jpg";
import Products from "./components/Products";
import Speaker from "../src/assets/speaker.png";
import SmartWatch from "../src/assets/smartwatch.png";
import Basket from "../src/assets/basket.png";
import Doll from "../src/assets/doll.png";
import Vase from "../src/assets/vase.png";
import BagOne from "../src/assets/bag one.png";
import Grinder from "../src/assets/Hand grinder.png";
import BagTwo from "../src/assets/bag two.png";
import AdFour from "../src/assets/Ad Four.png";
import Cap from "../src/assets/cap.png";
import TeaTable from "../src/assets/tea table.png";
import Headphones from "../src/assets/headphones.png";
import Sunglass from "../src/assets/sun glasses.png"
function App() {
  const newArrivals = [
    { imgSrc: Speaker, name: "Basic Crew Neck Tee", price: "$44.00", color: "Black"},
    { imgSrc: SmartWatch, name: "Basic Crew Neck Tee", price: "$44.00", color: "Black"},
    { imgSrc: Basket, name: "Basic Crew Neck Tee", price: "$44.00", color: "Black"},
    { imgSrc: Doll, name: "Basic Crew Neck Tee", price: "$44.00", color: "Black"},
  ]
  
  const bestSellers = [
    { imgSrc: Vase, name: "Basic Crew Neck Tee", price: "$44.00", color: "Black"},
    { imgSrc: BagOne, name: "Basic Crew Neck Tee", price: "$44.00", color: "Black"},
    { imgSrc: Grinder, name: "Basic Crew Neck Tee", price: "$44.00", color: "Black" },
    { imgSrc: BagTwo, name: "Basic Crew Neck Tee", price: "$44.00", color: "Black" },
  ]
  const specialOffers = [
    { imgSrc: Cap, name: "Basic Crew Neck Tee", price: "$44.00", color: "Black"},
    { imgSrc: TeaTable, name: "Basic Crew Neck Tee", price: "$44.00", color: "Black"},
    { imgSrc: Headphones, name: "Basic Crew Neck Tee", price: "$44.00", color: "Black" },
    { imgSrc: Sunglass, name: "Basic Crew Neck Tee", price: "$44.00", color: "Black" },
  ]
  return (
    <>
      {/* Header Part Start  */}
      <div className="w-full">
        <Container className={"max-w-headerContainer py-[30px]"}>
          <Flex>
            <div className="w-logoW">
              <a href="#"><Image imgSrc={Logo} /></a>
            </div>
            <div className="w-menuW">
              <Flex className={"  gap-x-10"}>
                <Menu menuName={"Home"} />
                <Menu menuName={"Shop"} />
                <Menu menuName={"About"} />
                <Menu menuName={"Contacts"} />
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Header Part End  */}

      {/* Category and Search Part Start  */}
      <div className="w-full border bg-categoryColor py-11 border-menuText">
        <Container className={"max-w-headerContainer "}>
          <Flex>
            <div className="w-1/4 pt-4">
              <Flex className={" gap-x-2"}>
                <HiBars3BottomLeft className="text-xl text-menuTextHover" />
                <Heading
                  as="h1"
                  text="Shop by Category"
                  className="text-sm text-menuTextHover"
                />
              </Flex>
            </div>
            <div className="relative w-7/12 ">
              <input
                type="text"
                className="w-full p-4 bg-white rounded-lg text-menuText"
                placeholder="Search Products"
              />
              <FaSearch className="absolute text-2xl top-1/3 right-4" />
            </div>
            <div className="w-1/6 pt-4 ">
              <Flex className={"justify-end gap-x-10"}>
                <div>
                  <Flex>
                    <FaUser className="text-lg" />
                    <VscTriangleDown className="text-lg" />
                  </Flex>
                </div>
                <div>
                  <FaCartShopping className="text-lg" />
                </div>
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Category and Search Part End  */}

      {/* Banner Part Start  */}
      <a href="#" className="bg-bannerImage bg-no-repeat bg-cover bg-center block py-[300px]"></a>
      {/* Banner Part End  */}

      {/* Information Part Start  */}
      <div className="py-10">
        <Container className={"max-w-headerContainer"}>
          <Flex className={"justify-center"}>
            <div className="w-1/3">
              <Flex className={"justify-center gap-x-2"}>
                <Fa2 />
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
                  text="Two Years Warranty"
                  className="text-sm font-dm"
                />
              </Flex>
            </div>
            <div className="w-1/3">
              <Flex className={"justify-center gap-x-2"}>
                <FaUndoAlt />
                <Heading
                  as="h1"
                  text="Two Years Warranty"
                  className="text-sm font-dm"
                />
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Information Part End  */}

      {/* Ads Part Start  */}
      <div className="pt-[170px] pb-[70px]">
        <Container className="max-w-headerContainer">
          <Flex className={"gap-x-10"}>
            <div className="w-1/2">
              <Image imgSrc={AddOne} imgAlt={"Phone sales.jpg"} />
            </div>
            <div className="w-1/2">
              <Flex className="flex-col gap-y-8">
                <Image imgSrc={AddTwo} imgAlt={"Electronic sales.png"} />
                <Image imgSrc={AddThree} imgAlt={"Furniture offers.jpg"}/>
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
      {/* ADS Part End  */}
      
      {/* Products Part Start  */}
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
      {/* Products Part End  */}
      {/* ADS Part Start */}
      <div className="py-28">
<Container className="max-w-headerContainer">
<Image imgSrc={AdFour} imgAlt="Ad Four.png"/>
</Container>
      </div>
      {/* ADS Part End */}
      
      {/* Special Offers Products Start */}
      <div className="py-28">
        <Container className="max-w-headerContainer">
          <h2 className="mb-6 text-4xl font-bold font-dm">Our Best Sellers</h2>
          <Products productData={specialOffers} />
        </Container>
      </div>
      {/* Special Offers Products End  */}
    </>
  );
}

export default App;
