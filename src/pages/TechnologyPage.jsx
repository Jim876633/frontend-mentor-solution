import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import {
    routerVariants,
    techImageVariants,
    techSliderVariants,
} from "../animation";
import PageTitle from "../component/PageTitle/PageTitle";
import { usePageData } from "../hooks/usePageData";
import {
    ButtonList,
    CategoryButton,
    ImageWrap,
    Section,
    TechnologyPageContainer,
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
        <TechnologyPageContainer
            as={motion.div}
            variants={routerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Section>
                <PageTitle index="03" title="space launch 101" />
                <AnimatePresence>
                    <ImageWrap
                        key={`image-${activeCategory}`}
                        as={motion.div}
                        variants={techImageVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <picture>
                            <source
                                srcSet={images.portrait}
                                type="image/webp"
                                media="(min-width: 1020px)"
                            />
                            <img src={images.landscape} alt={name} />
                        </picture>
                    </ImageWrap>
                </AnimatePresence>
                <ButtonList>{buttonElements}</ButtonList>
                <AnimatePresence mode="wait">
                    <TextWrap
                        key={`slider-${activeCategory}`}
                        as={motion.div}
                        variants={techSliderVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <h5>The terminology ...</h5>
                        <h3>{name}</h3>
                        <p>{description}</p>
                    </TextWrap>
                </AnimatePresence>
            </Section>
        </TechnologyPageContainer>
    );
};

export default TechnologyPage;
