import React from "react";
import { LuShoppingBasket } from "react-icons/lu";
import SearchInput from "./SearchInput";
import logoEcomarket from "../assets/ECOMARKET.png";

const Nav = () => {
  return (
    <nav class="bg-lime-600 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img
          src={logoEcomarket}
          className="absolute w-32"
          alt="logo-ecomarket"
        />

        <SearchInput />

        <div class="flex  md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse text-center text-white gap-2 content-center justify-center text-xl  font-semibold">
          <LuShoppingBasket size={40} color="white" />
          <span className="pt-2">$2000</span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
