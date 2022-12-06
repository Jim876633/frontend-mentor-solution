import React from "react";
import CountryList from "../components/CountryList/CountryList";
import Filter from "../components/Form/Filter";
import Search from "../components/Form/Search";

import HomePageStyle, { FormStyle } from "./HomePage.style";

const HomePage = () => {
    return (
        <HomePageStyle>
            <FormStyle>
                <Search />
                <Filter />
            </FormStyle>
            <CountryList />
        </HomePageStyle>
    );
};

export default HomePage;
