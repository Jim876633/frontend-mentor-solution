import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import {
    crewImageVariants,
    routerVariants,
    sliderVariants,
} from "../animation";
import PageTitle from "../component/PageTitle/PageTitle";
import { usePageData } from "../hooks/usePageData";
import {
    ButtonList,
    CategoryButton,
    CrewPageContainer,
    ImageWrap,
    Section,
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
        <CrewPageContainer
            as={motion.div}
            variants={routerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Section>
                <PageTitle index="02" title="meet your crew" />
                <AnimatePresence mode="wait">
                    <ImageWrap
                        key={`image-${activeCategory}`}
                        as={motion.div}
                        variants={crewImageVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <picture>
                            <source srcSet={images.webp} type="image/webp" />
                            <img src={images.png} alt={name} />
                        </picture>
                    </ImageWrap>
                </AnimatePresence>
                <ButtonList>{buttonElements}</ButtonList>
                <AnimatePresence mode="wait">
                    <TextWrap
                        key={`slider-${activeCategory}`}
                        as={motion.div}
                        variants={sliderVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <h4>{role}</h4>
                        <h3>{name}</h3>
                        <p>{bio}</p>
                    </TextWrap>
                </AnimatePresence>
            </Section>
        </CrewPageContainer>
    );
};

export default CrewPage;
