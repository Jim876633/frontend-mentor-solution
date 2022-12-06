import { useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailPageStyle, {
    ArrowLeft,
    BackButton,
    BorderButton,
    BorderButtons,
    DetailImage,
    DetailInfo,
    DetailText,
} from "./DetailPage.style";
import ErrorPage from "./ErrorPage";
import LoadingPage from "./LoadingPage";

import { useGetCountryDetial } from "../api/fetchData";
import { useDataContext } from "../context/DataContextProvider";

const countries = require("i18n-iso-countries");
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

const DetailPage = () => {
    const { detailId } = useParams();

    const { data, isLoading, isError } = useGetCountryDetial(detailId);

    const { searchHandler } = useDataContext();

    useEffect(() => {
        searchHandler("name", "");
    }, [searchHandler]);

    if (isLoading) {
        return <LoadingPage height={"90vh"} />;
    }
    if (isError || data.status !== "officially-assigned") {
        return <ErrorPage />;
    }
    const {
        name,
        nativeName,
        image,
        population,
        region,
        subregion,
        capital,
        tld,
        currencies,
        languages,
        borders,
    } = data;

    const borderComponents = borders.map((border) => (
        <BorderButton key={border} to={`/${border}`}>
            {countries.getName(border, "en")}
        </BorderButton>
    ));

    return (
        <DetailPageStyle>
            <BackButton to="/">
                <ArrowLeft />
                Back
            </BackButton>
            <DetailImage>
                <img src={image} alt={name} />
            </DetailImage>
            <DetailText>
                <h2>{name}</h2>
                <DetailInfo>
                    <p>
                        <span>native name:</span>
                        {nativeName
                            .map((item) => item.common)
                            .slice(0, 4)
                            .join(", ")}
                    </p>
                    <p>
                        <span>population:</span>
                        {population}
                    </p>
                    <p>
                        <span>region:</span>
                        {region}
                    </p>
                    <p>
                        <span>sub region:</span>
                        {subregion}
                    </p>
                    <p>
                        <span>capital:</span>
                        {capital}
                    </p>
                </DetailInfo>
                <DetailInfo>
                    <p>
                        <span>top level domain:</span>
                        {tld}
                    </p>
                    <p>
                        <span>currencies:</span>
                        {currencies
                            .map((item) => item.name + " " + item.symbol)
                            .join(", ")}
                    </p>
                    <p>
                        <span>languages:</span>
                        {languages
                            .map((item) => item)
                            .slice(0, 4)
                            .join(", ")}
                    </p>
                </DetailInfo>
                <h3>border countreis:</h3>
                <BorderButtons>
                    {borderComponents.length === 0
                        ? "No border countries !"
                        : borderComponents}
                </BorderButtons>
            </DetailText>
        </DetailPageStyle>
    );
};

export default DetailPage;
