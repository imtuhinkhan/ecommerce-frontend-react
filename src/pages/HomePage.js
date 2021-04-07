import React, {Component} from 'react';
import FeaturedItem from "../components/home/FeaturedItem";
import Categories from "../components/home/Categories";
import MainSlider from "../components/home/MainSlider";
import NavBar from "../components/common/NavBar";
import BannerDesign from "../components/home/BannerDesign";
import BrandSlider from "../components/home/BrandSlider";
import Footer from "../components/common/Footer";
class HomePage extends Component {
    render() {
        return (
            <>
                <NavBar/>
                <MainSlider/>
                <FeaturedItem/>
                <BannerDesign/>
                <Categories/>
                <BrandSlider/>
                <Footer/>
            </>
        );
    }
}

export default HomePage;