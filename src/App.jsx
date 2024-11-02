import Container from "./components/Container";
import Flex from "./components/Flex";
import Image from "./components/Image";
import Logo from "../src/assets/logo.png";
import Menu from "./components/Menu";
import { HiBars3BottomLeft } from "react-icons/hi2";
import Heading from "./components/Heading";
import { FaSearch, FaUser,FaUndoAlt  } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";
import { FaCartShopping,Fa2 ,FaTruck  } from "react-icons/fa6";
function App() {
  return (
    <>
      {/* Header Part Start  */}
      <div className="w-full">
        <Container className={"max-w-headerContainer py-[30px]"}>
          <Flex>
            <div className="w-logoW">
              <Image imgSrc={Logo} />
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
      <div className=" w-full bg-categoryColor py-11 border border-menuText">
        <Container className={"max-w-headerContainer "}>
          <Flex>
            <div className="w-1/4 pt-4">
              <Flex className={" gap-x-2"}>
                <HiBars3BottomLeft className="text-xl  text-menuTextHover" />
                <Heading
                  as="h1"
                  text="Shop by Category"
                  className="text-sm text-menuTextHover"
                />
              </Flex>
            </div>
            <div className="w-7/12 relative ">
              <input
                type="text"
                className="p-4 bg-white text-menuText rounded-lg w-full"
                placeholder="Search Products"
              />
              <FaSearch className="text-2xl absolute top-1/3 right-4" />
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
<div className="bg-bannerImage py-[300px]"></div>
      {/* Banner Part End  */}

        {/* Information Part Start  */}
        <div className="py-10">
          <Container className={'max-w-headerContainer'}>
            <Flex className={"justify-center"}>
              <div className="w-1/3">
<Flex className={'justify-center gap-x-2'}>
<Fa2 />
<Heading as='h1' text="Two Years Warranty" className="text-sm font-dm" />
</Flex>
              </div>

              <div className="w-1/3">
<Flex className={'justify-center gap-x-2'}>
<FaTruck />
<Heading as='h1' text="Two Years Warranty" className="text-sm font-dm" />
</Flex>
              </div>
              <div className="w-1/3">
<Flex className={'justify-center gap-x-2'}>
<FaUndoAlt />
<Heading as='h1' text="Two Years Warranty" className="text-sm font-dm" />
</Flex>
              </div>

            </Flex>
          </Container>
        </div>
        {/* Information Part End  */}
    </>
  );
}

export default App;
