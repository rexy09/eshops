import axios from "axios";
import rice from "../../../assets/rice.png";
import skincare from "../../../assets/skincare.png";
import home_cleaning from "../../../assets/home_cleaning.png";
import snacks from "../../../assets/snacks.png";
import decor from "../../../assets/decor.png";
import spices from "../../../assets/spices.png";

import shield_with_check from "../../../assets/shield_with_check.png";
import leaf from "../../../assets/leaf.png";
import shopping_bag from "../../../assets/shopping_bag.png";

export default function useShopServices() {

  async function getProducts() {
    return axios.get("https://fakestoreapi.com/products");
  }
  async function getProductDetails(id:string) {
    return axios.get("https://fakestoreapi.com/products/" + id);
  }
  const categories = [
    {
      name: "Rice",
      image: rice,
    },
    {
      name: "Cosmetics",
      image: skincare,
    },
    {
      name: "Cleaning Products",
      image: home_cleaning,
    },
    {
      name: "Nuts ",
      image: snacks,
    },
    {
      name: "Home Decor",
      image: decor,
    },
    {
      name: "Spices",
      image: spices,
    },
  ];
  const features = [
    {
      icon: shopping_bag,
      title: "Free Delivery",
      description:
        "Lorem ipsum dolor sit amet consectetur. Malesuada volutpat.",
    },
    {
      icon: shield_with_check,
      title: "Secure Payments",
      description:
        "Lorem ipsum dolor sit amet consectetur. Malesuada volutpat.",
    },
    {
      icon: leaf,
      title: "Best Quality Material",
      description:
        "Lorem ipsum dolor sit amet consectetur. Malesuada volutpat.",
    },
  ];

  return {
    getProducts,
    getProductDetails,
    categories,
    features,
  };
}
