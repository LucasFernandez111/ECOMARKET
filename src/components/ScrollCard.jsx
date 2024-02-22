import React from "react";
import Card from "./Card";

const ScrollCard = () => {
  const listProducts = [
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

  return (
    <div className="flex gap-4 p-6">
      {listProducts.map((products) => {
        return (
          <Card
            key={products.name}
            image={products.imageSrc}
            name={products.name}
            price={products.price}
          ></Card>
        );
      })}
    </div>
  );
};

export default ScrollCard;
