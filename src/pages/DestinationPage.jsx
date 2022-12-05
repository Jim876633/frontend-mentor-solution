import PageTitle from "../component/PageTitle/PageTitle";
import { usePageData } from "../hooks/usePageData";
import {
    CategoryButton,
    DestinationContainer,
    InfoWrap,
    Section1,
    Section2,
    SectionLinks,
    SubHeading1,
    SubHeading2,
} from "./DestinationPage.style";

const DestinationPage = ({ data }) => {
    const { categories, activeCategory, activeData, dataChangeHandler } =
        usePageData(data);

    const { name, images, description, distance, travel } = activeData;

    const linksElements = categories.map((category) => (
        <li key={category}>
            <CategoryButton
                type="button"
                title={category}
                active={activeCategory === category ? "active" : ""}
                onClick={() => {
                    dataChangeHandler(category);
                }}
            >
                {category}
            </CategoryButton>
        </li>
    ));

    return (
        <DestinationContainer>
            <Section1>
                <PageTitle index="01" title="pick your destination" />
                <picture>
                    <source srcSet={images.webp} type="image/webp" />
                    <img src={images.png} alt={name} />
                </picture>
            </Section1>
            <Section2>
                <SectionLinks>{linksElements}</SectionLinks>
                <h2>{name}</h2>
                <p>{description}</p>
                <hr />
                <InfoWrap>
                    <div>
                        <SubHeading2>Avg. distance</SubHeading2>
                        <SubHeading1>{distance}</SubHeading1>
                    </div>
                    <div>
                        <SubHeading2>est. travel time</SubHeading2>
                        <SubHeading1>{travel}</SubHeading1>
                    </div>
                </InfoWrap>
            </Section2>
        </DestinationContainer>
    );
};

export default DestinationPage;
