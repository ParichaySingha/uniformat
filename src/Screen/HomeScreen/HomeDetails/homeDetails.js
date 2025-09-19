import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./homeDetails.css";

const deals = [
  {
    img: "https://img.freepik.com/free-photo/portrait-male-security-guard-with-uniform_23-2150368731.jpg?uid=R200540322&ga=GA1.1.995393516.1744188710&semt=ais_hybrid&w=740",
    title: "Security Uniforms",
    off: "For Sell",
    deal: "Limited Time Deal",
  },
  {
    img: "https://img.freepik.com/free-photo/front-view-chef-holding-food-plates_23-2148723319.jpg?uid=R200540322&ga=GA1.1.995393516.1744188710&semt=ais_hybrid&w=740",
    title: "Chefs Uniforms",
    off: "For Sell",
    deal: "Limited Time Deal",
  },
   {
    img: "https://img.freepik.com/free-photo/close-up-photo-young-successful-business-man-black-suit_171337-9509.jpg?uid=R200540322&ga=GA1.1.995393516.1744188710&semt=ais_hybrid&w=740",
    title: "Corporate Uniforms",
    off: "For Sell",
    deal: "Limited Time Deal",
  },
   {
    img: "https://img.freepik.com/free-photo/receptionists-work-elegant-suits_23-2149714418.jpg?uid=R200540322&ga=GA1.1.995393516.1744188710&semt=ais_hybrid&w=740",
    title: "Hotel Staff WorkWears",
    off: "For Sell",
    deal: "Limited Time Deal",
  },
   {
    img: "https://img.freepik.com/premium-photo/fireresistant-coveralls-with-reflective-striping-f-00347-02_883586-61002.jpg?uid=R200540322&ga=GA1.1.995393516.1744188710&semt=ais_hybrid&w=740",
    title: "Industrial Coveralls",
    off: "For Sell",
    deal: "Limited Time Deal",
  },
   {
    img: "https://img.freepik.com/free-photo/portrait-cheerful-male-doctor-dressed-uniform_171337-1531.jpg?uid=R200540322&ga=GA1.1.995393516.1744188710&semt=ais_hybrid&w=740",
    title: "Doctor Apron",
    off: "For Sell",
    deal: "Limited Time Deal",
  },
  {
    img: "https://img.freepik.com/premium-photo/set-shirts-shorts-pants-are-arranged-gray-background_235573-4218.jpg?uid=R200540322&ga=GA1.1.995393516.1744188710&semt=ais_hybrid&w=740",
    title: "School Uniforms",
    off: "For Sell",
    deal: "Limited Time Deal",
  },
];

const sliderSettings = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3, slidesToScroll: 2 },
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 2, slidesToScroll: 1 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
  ],
};

const whyChooseData = [
  {
    img: "https://img.icons8.com/color/96/000000/sewing-machine.png",
    title: "EMBROIDERY / PRINTING",
    desc: "Personalize Your Uniform With Embroidery & Print",
  },
  {
    img: "https://img.icons8.com/color/96/000000/sewing-machine.png",
    title: "CUSTOM SIZES",
    desc: "Wear what actually fits you. Size range available from XXS to 4XL",
  },
  {
    img: "https://img.icons8.com/color/96/000000/conference-call.png",
    title: "TEAM ORDER",
    desc: "We make bulk ordering easy and get up to 22% off on all products",
  },
  {
    img: "https://img.icons8.com/color/96/000000/gift-card.png",
    title: "GIFTS CARD",
    desc: "Send gift cards to your loved ones. Shop gift cards Now",
  },
];

const Card = ({ item }) => (
  <div className="homeDetailsLongCardItem">
    <img className="homeDetailsLongCardItemImg" src={item.img} alt="Item" />
    <div className="homeDetailsLongCardItemImgDetail">
      <div className="homeDetailsLongCardItemImgTopDetail">
        <div className="homeDetailsPercentageOff">{item.off}</div>
        <div className="limitedTimeDealHomeDetails">{item.deal}</div>
      </div>
      <div className="bottomHomeDetails">{item.title}</div>
    </div>
  </div>
);

const HomeDetails = () => (
  <div className="homeDetails">
    <div className="homeDetailsLongCard">
      <div className="homeDetailsLongCardTitle">PROFESSIONALS UNIFORMS</div>
      <Slider {...sliderSettings}>
        {deals.map((item, idx) => (
          <Card item={item} key={idx} />
        ))}
      </Slider>
    </div>
    <WhyChoose />
  </div>
);

const WhyChoose = () => (
  <div className="whyChooseSection">
    <h2 className="whyChooseTitle">WHY CHOOSE UNIFORMAT</h2>
    <div className="whyChooseCards">
      {whyChooseData.map((item, idx) => (
        <div className="whyChooseCard" key={idx}>
          <img src={item.img} alt={item.title} className="whyChooseImg" />
          <div className="whyChooseCardTitle">{item.title}</div>
          <div className="whyChooseCardDesc">{item.desc}</div>
        </div>
      ))}
    </div>
  </div>
);


export default HomeDetails;