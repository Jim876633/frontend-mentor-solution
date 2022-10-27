import React from "react";
import Search from "../components/Form/Search";
import Filter from "../components/Form/Filter";
import CountryList from "../components/CountryList";

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
