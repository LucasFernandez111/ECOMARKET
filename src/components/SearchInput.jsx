import React from "react";
import { IoIosSearch } from "react-icons/io";

const SearchInput = () => {
  return (
    <form class="max-w-md mx-auto">
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div class="relative w-80">
        <input
          type="search"
          id="default-search"
          class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="¿En qué puedo ayudarte?"
          required
        />
        <button
          type="submit"
          class="text-white absolute end-2.5 bottom-2 hover:scale-125 duration-75  px-4 py-2 "
        >
          <IoIosSearch color="black" size={20} />
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
