import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import Revenue from "../../assets/Revenuebro.png";
import SiteStats from "../../assets/SiteStats.png";
import Invoices from "../../assets/creditCard.png";
import { faCircle as farCircle } from "@fortawesome/free-regular-svg-icons";
import "../styles/Carousal.scss";
const Carousal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carousalItems = [
    {
      Img: Revenue,
      Title: "Track, Budget, Save",
      Line: "Empower your finances with our intuitive expense tracker featuring revenue and expenses charts",
    },
    {
      Img: SiteStats,
      Title: "Money Made Easy",
      Line: "Stay on top of your finances with our user-friendly expense tracker",
    },
    {
      Img: Invoices,
      Title: "Simplify Your Finances",
      Line: "Less financial stress with our expense tracker, featuring insightful charts and invoice tracking.",
    },
  ];
  const circleIcons = [faCircle, faCircle, faCircle];
  const handlePrevClick = () => {
    if (currentIndex == 0) {
      setCurrentIndex(icons.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const handleNextClick = () => {
    if (currentIndex < 2) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex < 2) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 2000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="carousal-wrapper">
      <div className="item-container">
        <img src={carousalItems[currentIndex].Img} />
        <h2>{carousalItems[currentIndex].Title}</h2>
        <p>{carousalItems[currentIndex].Line}</p>
      </div>
      <div className="slider-container">
        <button onClick={handlePrevClick}>
          <FontAwesomeIcon icon={faChevronLeft} className="left-button" />
        </button>
        <div className="carousal-index">
          {circleIcons.map((circleIcon, index) => {
            index === currentIndex ? (circleIcon = farCircle) : faCircle;
            return (
              <FontAwesomeIcon
                key={index}
                icon={circleIcon}
                onClick={() => {
                  setCurrentIndex(index);
                }}
              />
            );
          })}
        </div>
        <button onClick={handleNextClick}>
          <FontAwesomeIcon icon={faChevronRight} className="Right-button" />
        </button>
      </div>
    </div>
  );
};

export default Carousal;
