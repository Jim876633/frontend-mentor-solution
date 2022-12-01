import { FilterCard } from "./styles/Card.style";
import { ClearButton } from "./styles/Button.style";
import { Tags } from "./styles/FilterTags.style";
import Tag from "./Tag";

const FilterTags = ({ removeTag, clearTag, tagList }) => {
    return (
        <FilterCard>
            <Tags>
                {tagList.map((tag) => (
                    <Tag key={tag} tagName={tag} removeTag={removeTag} />
                ))}
            </Tags>
            <ClearButton title="clear tags" type="button" onClick={clearTag}>
                Clear
            </ClearButton>
        </FilterCard>
    );
};

export default FilterTags;
