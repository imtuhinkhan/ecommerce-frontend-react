import React, {Component} from 'react';
import FeaturedItem from "../components/home/FeaturedItem";
import Categories from "../components/home/Categories";
import MainSlider from "../components/home/MainSlider";

class HomePage extends Component {
    render() {
        return (
            <>
                <MainSlider/>
                <FeaturedItem/>
                <Categories/>
            </>
        );
    }
}

export default HomePage;