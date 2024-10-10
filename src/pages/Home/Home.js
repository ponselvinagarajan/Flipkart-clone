import React from 'react';
import './Home.css';
import { CategoryBarData} from '../../data';
import CategoryData from '../../Components/CategoryData/CategoryData';
import Bannercarosel from '../../Components/Bannercarosel/Bannercarosel';
import {CarouselData} from '../../data';
import Productcarousel from '../../Components/Productcarousel/Productcarousel';
import {BestOf} from '../../data';

const Home = () => {
  return (
    <div className='home'>
      <div className='home_container'>
        <div className='home_bar'>
        {CategoryBarData.map((item, index) => (
            <CategoryData
              key={index}
              Imgsrc={item.imageSrc}
              CategoryName={item.category}
            />
          ))}
        </div>
      </div>
      <div className='Banner'>
        <div className='Home-Carousel'>
           <Bannercarosel data={CarouselData}/>
        </div>
        <div className='home_productcarousel'>
            <Productcarousel
               BgImg={
              "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            }
              Title={"Best of Electronics"}
              Data={BestOf.Electronics}
            />
        </div>
        <div className='home_productcarousel'>
            <Productcarousel
               BgImg={
              "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            }
              Title={"Best of BeautyFoodsToys"}
              Data={BestOf.BeautyFoodsToys}
            />
        </div>
        <div className='home_productcarousel'>
            <Productcarousel
               BgImg={
              "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            }
              Title={"Best of WinterEssential"}
              Data={BestOf.WinterEssential}
            />
        </div>
        <div className='home_productcarousel'>
            <Productcarousel
               BgImg={
              "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            }
              Title={"Best of WeddingsAndGifts"}
              Data={BestOf.WeddingsAndGifts}
            />
        </div>
      </div>
    </div>
  );
};

export default Home;
