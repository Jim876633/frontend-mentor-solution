import React from "react";
import PageTitle from "../component/PageTitle/PageTitle";
import { usePageData } from "../hooks/usePageData";
import {
    CategoryButton,
    TechnologyPageContainer,
    Section,
    ButtonList,
    ImageWrap,
    TextWrap,
} from "./TechnologyPage.style";

const TechnologyPage = ({ data }) => {
    const { categories, activeCategory, activeData, dataChangeHandler } =
        usePageData(data);

    const { name, images, description } = activeData;

    const buttonElements = categories.map((category, index) => (
        <li key={category}>
            <CategoryButton
                title={category}
                type="button"
                active={activeCategory === category ? "active" : ""}
                onClick={() => {
                    dataChangeHandler(category);
                }}
            >
                {index + 1}
            </CategoryButton>
        </li>
    ));
    return (
        <TechnologyPageContainer>
            <Section>
                <PageTitle index="03" title="space launch 101" />
                <ImageWrap>
                    <picture>
                        <source
                            srcSet={images.portrait}
                            type="image/webp"
                            media="(min-width: 1020px)"
                        />
                        <img src={images.landscape} alt={name} />
                    </picture>
                </ImageWrap>
                <ButtonList>{buttonElements}</ButtonList>
                <TextWrap>
                    <h5>The terminology ...</h5>
                    <h3>{name}</h3>
                    <p>{description}</p>
                </TextWrap>
            </Section>
        </TechnologyPageContainer>
    );
};

export default TechnologyPage;
