import React from "react";

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    auction: {
      bidStart: "25/03/2022",
      bidEnd: "27/03/2022",
    },
  },

  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
    auction: {
      bidStart: "25/03/2022",
      bidEnd: "27/03/2022",
    },
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
    auction: {
      bidStart: "25/03/2022",
      bidEnd: "27/03/2022",
    },
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    auction: {
      bidStart: "25/03/2022",
      bidEnd: "27/03/2022",
    },
  },
  {
    id: 5,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    auction: {
      bidStart: "25/03/2022",
      bidEnd: "27/03/2022",
    },
  },
  {
    id: 6,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
    auction: {
      bidStart: "25/03/2022",
      bidEnd: "27/03/2022",
    },
  },
  {
    id: 7,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
    auction: {
      bidStart: "25/03/2022",
      bidEnd: "27/03/2022",
    },
  },
  {
    id: 8,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    auction: {
      bidStart: "25/03/2022",
      bidEnd: "27/03/2022",
    },
  },
  {
    id: 9,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    auction: {
      bidStart: "25/03/2022",
      bidEnd: "27/03/2022",
    },
  },
  {
    id: 10,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
    auction: {
      bidStart: "25/03/2022",
      bidEnd: "27/03/2022",
    },
  },
  {
    id: 11,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
    auction: {
      bidStart: "25/03/2022",
      bidEnd: "27/03/2022",
    },
  },
  {
    id: 12,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    auction: {
      bidStart: "25/03/2022",
      bidEnd: "27/03/2022",
    },
  },
];

export default function ProductList() {
  const stakefor1NEAR = async () => {
    await window.contract.setStake({
      amount: 1,
    });
  };
  const currentDate = new Date();

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <span>
                  <h2>Current Bid</h2>
                </span>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {currentDate < new Date(product.auction.bidStart) &&
                    "Auction Not Started"}
                  {currentDate > new Date(product.auction.bidStart) &&
                    currentDate < new Date(product.auction.bidEnd) &&
                    "Auction Live"}
                  {currentDate > new Date(product.auction.bidEnd) &&
                    "Auction Ended"}
                  <span>
                    <button className="text-center">Live</button>
                  </span>
                </p>
                <button
                  onClick={() => stakefor1NEAR}
                  className="block w-full px-5 py-3  font-medium text-indigo-600 bg-blue-50 hover:bg-gray-100"
                >
                  Stake for 1 NEAR
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
