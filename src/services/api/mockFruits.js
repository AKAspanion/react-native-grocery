const fruits = [
  {
    id: 1,
    price: 100,
    name: "Banana",
    image: require("../../../assets/images/banana.png"),
    color: "yellow",
  },
  {
    id: 2,
    name: "Apple",
    image: require("../../../assets/images/apple.png"),
    price: 100,
    color: "red",
  },
  {
    id: 3,
    name: "Avocado",
    image: require("../../../assets/images/avocado.png"),
    price: 100,
    color: "green",
  },
  {
    id: 4,
    name: "Pomegranate",
    image: require("../../../assets/images/pomegranate.png"),
    price: 100,
    color: "marron",
  },
  {
    id: 5,
    name: "Kiwi",
    image: require("../../../assets/images/banana.png"),
    price: 100,
    color: "green",
  },
  {
    id: 6,
    name: "Coconut",
    image: require("../../../assets/images/apple.png"),
    price: 100,
    color: "brown",
  },
  {
    id: 7,
    name: "Lime",
    image: require("../../../assets/images/apple.png"),
    price: 100,
    color: "lime",
  },
  {
    id: 8,
    name: "Pineapple",
    image: require("../../../assets/images/apple.png"),
    price: 100,
    color: "yellow",
  },
  {
    id: 9,
    name: "Green Apple",
    image: require("../../../assets/images/apple.png"),
    price: 100,
    color: "green",
  },
];

export const getFruits = (searchText = "") => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const data = fruits.filter((d) =>
          d.name.toLowerCase().includes(searchText.toLowerCase())
        );
        resolve({
          data: data,
          total: data.length,
        });
      } catch (err) {
        reject(err);
      }
    }, 500);
  });
};
