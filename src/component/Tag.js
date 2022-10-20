import React from "react";
import TagStyle, { TagName } from "./styles/Tag.style";
import { FilterButton } from "./styles/Button.style";

const Tag = ({ tagName, removeTag }) => {
    return (
        <TagStyle>
            <TagName>{tagName}</TagName>
            <FilterButton onClick={() => removeTag(tagName)}>
                &times;
            </FilterButton>
        </TagStyle>
    );
};

export default Tag;
