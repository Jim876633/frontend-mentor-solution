import React from "react";
import PageTitle from "../component/PageTitle/PageTitle";
import { usePageData } from "../hooks/usePageData";
import {
    ButtonList,
    CategoryButton,
    CrewPageContainer,
    Section,
    ImageWrap,
    TextWrap,
} from "./CrewPage.style.";

const CrewPage = ({ data }) => {
    const { categories, activeCategory, activeData, dataChangeHandler } =
        usePageData(data);

    const { name, images, role, bio } = activeData;

    const buttonElements = categories.map((category) => (
        <li key={category}>
            <CategoryButton
                title={category}
                type="button"
                active={activeCategory === category ? "active" : ""}
                onClick={() => {
                    dataChangeHandler(category);
                }}
            ></CategoryButton>
        </li>
    ));

    return (
        <CrewPageContainer>
            <Section>
                <PageTitle index="02" title="meet your crew" />
                <ImageWrap>
                    <picture>
                        <source srcSet={images.webp} type="image/webp" />
                        <img src={images.png} alt={name} />
                    </picture>
                </ImageWrap>
                <ButtonList>{buttonElements}</ButtonList>
                <TextWrap>
                    <h4>{role}</h4>
                    <h3>{name}</h3>
                    <p>{bio}</p>
                </TextWrap>
            </Section>
        </CrewPageContainer>
    );
};

export default CrewPage;
