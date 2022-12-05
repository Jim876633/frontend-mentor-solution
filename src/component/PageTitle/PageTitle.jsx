import React from "react";
import { Title } from "./PageTitle.style";

const PageTitle = ({ index, title }) => {
    return (
        <Title>
            <span>{index}</span>
            {title}
        </Title>
    );
};

export default PageTitle;
