import { motion } from "framer-motion";
import React from "react";
import { routerVariants } from "../animation";
import {
    ExploreButton,
    ExploreHeading,
    HomePageContainer,
    TextContainer,
    TitleHeading,
    TitleSmallHeading,
} from "./HomePage.style";

const HomePage = () => {
    return (
        <HomePageContainer
            as={motion.div}
            variants={routerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <TextContainer>
                <TitleSmallHeading>So, you want to travel to</TitleSmallHeading>
                <TitleHeading>Space</TitleHeading>
                <p>
                    Let’s face it; if you want to go to space, you might as well
                    genuinely go to outer space and not hover kind of on the
                    edge of it. Well sit back, and relax because we’ll give you
                    a truly out of this world experience!
                </p>
            </TextContainer>
            <ExploreButton to={"destination"} title="explore">
                <ExploreHeading>explore</ExploreHeading>
            </ExploreButton>
        </HomePageContainer>
    );
};

export default HomePage;
