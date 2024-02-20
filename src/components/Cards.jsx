import React from "react";

const products = [
  {
    id: 1,
    name: "Gaseosa Cunnington sabor Suave 1.5L",
    href: "#",
    imageSrc:
      "https://carrefourar.vtexassets.com/arquivos/ids/359527/7790639003819_E02.jpg?v=638258156831630000",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$100",
    
  },
  {
    id: 1,
    name: "CocaCola ZERO 500ML",
    href: "#",
    imageSrc:
      "https://www.coca-cola.com/content/dam/onexp/ar/es/coca-cola/coca-cola-zero-v1.jpeg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
   
  },
  // More products...
];

export default function Example() {
  return (
    <div className="bg-gray-800">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group static bg-blue-300 rounded-lg"
            >
              <div className="aspect-h-1 aspect-w-1  overflow-hidden   lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="rounded-t-lg p-4 w-full h-full object-cover"
                />
              </div>
              <div className="mb-3 flex flex-col">
                <div className="flex justify-center">
                  <h3 className="text-base font-sans text-center font-semibold text-black   whitespace-nowrap">
                    <a href={product.href}>
                      <span
                        aria-hidden="true"
                        className="static inset-0 ml-2 "
                      />
                      {product.name}
                    </a>
                  </h3>
                </div>

                <div className="flex justify-center items-center mt-3">
                  <p className=" text-lg font-sans font-bold text-black">
                    {product.price}
                  </p>
                </div>

                <div className="flex py-4 space-x-4 ">
                  <div className="relative ml-5">
                    <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">
                      Cant.
                    </div>
                    <select className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>

                    <svg
                      className="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                      />
                    </svg>
                  </div>

                  <button
                    type="button"
                    className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
                  >
                    Añadir al carrito
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
