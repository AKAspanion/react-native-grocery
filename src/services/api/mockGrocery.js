const fruits = [
  {
    id: 1,
    price: 100,
    name: "Banana",
    image: require("../../../assets/images/banana.png"),
    color: "#ffffb1",
  },
  {
    id: 2,
    name: "Apple",
    image: require("../../../assets/images/apple.png"),
    price: 100,
    color: "#ffb1b1",
  },
  {
    id: 3,
    name: "Avocado",
    image: require("../../../assets/images/avocado.png"),
    price: 100,
    color: "#a7ffa7",
  },
  {
    id: 4,
    name: "Pomegranate",
    image: require("../../../assets/images/pomegranate.png"),
    price: 100,
    color: "#ffa7a7",
  },
  {
    id: 5,
    name: "Kiwi",
    image: require("../../../assets/images/banana.png"),
    price: 100,
    color: "#a7ffa7",
  },
  {
    id: 6,
    name: "Coconut",
    image: require("../../../assets/images/apple.png"),
    price: 100,
    color: "#edb9b9",
  },
  {
    id: 7,
    name: "Lime",
    image: require("../../../assets/images/apple.png"),
    price: 100,
    color: "#ebffb1",
  },
  {
    id: 8,
    name: "Pineapple",
    image: require("../../../assets/images/apple.png"),
    price: 100,
    color: "#ffffb1",
  },
  {
    id: 9,
    name: "Green Apple",
    image: require("../../../assets/images/apple.png"),
    price: 100,
    color: "#ffb1b1",
  },
];

export const getGroceryItems = (searchText = "") => {
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
    }, 250);
  });
};

export const getGroceryItem = (id = "") => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve({
          data: fruits.find((f) => f.id == id),
        });
      } catch (err) {
        reject(err);
      }
    }, 0);
  });
};
