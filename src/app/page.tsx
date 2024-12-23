// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import SponsoredBy from "./sponsored-by";
import AboutEvent from "./about-event";
import OurStats from "./our-stats";
import EventContent from "./event-content";
import Faq from "./faq";
import React from "react";
import { HeroParallax } from "../components/hero-parallax";

const products = [
  {
    title: "Product 1",
    link: "https://spirit.vietnamairlines.com/wp-content/uploads/2023/05/Anh-minh-hoa-1.jpg",
    thumbnail:
      "https://spirit.vietnamairlines.com/wp-content/uploads/2023/05/Anh-minh-hoa-1.jpg",
  },
  {
    title: "Product 2",
    link: "https://pixabay.com/vi/photos/landscape-terraced-fields-vietnam-5104510/",
    thumbnail:
      "https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2024/05/anh-viet-nam.jpg.webp",
  },
  {
    title: "Product 2",
    link: "https://pixabay.com/vi/photos/landscape-terraced-fields-vietnam-5104510/",
    thumbnail:
      "https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2024/05/anh-viet-nam.jpg.webp",
  },
  {
    title: "Product 2",
    link: "https://pixabay.com/vi/photos/landscape-terraced-fields-vietnam-5104510/",
    thumbnail:
      "https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2024/05/anh-viet-nam.jpg.webp",
  },
  {
    title: "Product 2",
    link: "https://pixabay.com/vi/photos/landscape-terraced-fields-vietnam-5104510/",
    thumbnail:
      "https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2024/05/anh-viet-nam.jpg.webp",
  },
  {
    title: "Product 2",
    link: "https://pixabay.com/vi/photos/landscape-terraced-fields-vietnam-5104510/",
    thumbnail:
      "https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2024/05/anh-viet-nam.jpg.webp",
  },
  {
    title: "Product 2",
    link: "https://pixabay.com/vi/photos/landscape-terraced-fields-vietnam-5104510/",
    thumbnail:
      "https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2024/05/anh-viet-nam.jpg.webp",
  },
  {
    title: "Product 2",
    link: "https://pixabay.com/vi/photos/landscape-terraced-fields-vietnam-5104510/",
    thumbnail:
      "https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2024/05/anh-viet-nam.jpg.webp",
  },

  // Thêm các sản phẩm khác...
];

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <SponsoredBy /> */}
      <AboutEvent />
      <OurStats />
      <EventContent />
      <Faq />
      <HeroParallax products={products} />
      {/* <Footer /> */}
    </>
  );
}
