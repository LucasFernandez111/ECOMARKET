import React from "react";
import { LuShoppingBasket } from "react-icons/lu";
import SearchInput from "./SearchInput";
import logoEcomarket from "../assets/ECOMARKET.png";
import userProfile from "../assets/user.png";

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

        <div class="flex  md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse text-center text-white gap-9 items-center justify-center text-xl  font-semibold">
          <div className="flex gap-2  ">
            <LuShoppingBasket size={40} color="white" />
            <span className="pt-2">$2000</span>
          </div>
          <div>
            <img
              class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 hover:scale-125 duration-75 dark:ring-gray-500"
              src={userProfile}
              alt="Bordered avatar"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
