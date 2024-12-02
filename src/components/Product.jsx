import React from "react";
import Image from "./Image";
import Badge from "./Badge";
import Flex from "./Flex";
import Heading from "./Heading";
import { FaHeart,FaShoppingCart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";

const Product = ({ imgSrc, name, price, color}) => {
  return (
    <div className={"relative group   p-4 opacity-95 hover:opacity-100"}>
      {/* Product Image */}
      <a href="#"><Image imgSrc={imgSrc} /></a>
      <Badge badgeName="NEW" className=" absolute  top-[30px] left-[30px]"/>

      {/* Product Name and Price */}
      <Flex className="mt-[30px] mb-[22px]">
<a href="#">
<Heading
          as="h3"
          className="text-[20px] font-dm font-bold pr-[108px]"
          text={name}
        />
</a>
        <Heading
          as="h3"
          className="text-base leading-7 text-productTextColor"
          text={price}
        />
      </Flex>

      {/* Product Color */}
      <Heading
        as="h3"
        className="text-base leading-7 text-productTextColor"
        text={color}
      />

      {/* Wishlist, Compare, Add to Cart - Hidden by Default */}
      <Flex className="w-[310px] hidden flex-col bg-white absolute bottom-32  right-0 p-4 group-hover:flex">
        <a href="#">
        <Flex className="justify-end">
<Heading
          as="h3"
          className="pb-5 text-base text-productTextColor hover:text-black"
          text="Add To Wishlist"
        />
        <FaHeart className="font-[16px] m-1 "/>

</Flex >
        </a>

<a href="#">
<Flex className="justify-end">
<Heading
          as="h3"
          className="pb-5 text-base leading-7 text-productTextColor hover:text-black"
        text="Compare"
        />
        <TfiReload className="font-[16px] m-1"/>
</Flex>
</a>

<a href="#">
<Flex className="justify-end">
<Heading
          as="h3"
          className="text-base leading-7 text-productTextColor hover:text-black"
          text="Add To Cart"
        />
        <FaShoppingCart className="font-[16px] m-1"/>
</Flex>
</a>
      </Flex>
    </div>
  );
};

export default Product;
