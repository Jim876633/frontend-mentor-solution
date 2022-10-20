import { JobCard } from "./styles/Card.style";
import { TagButton } from "./styles/Button.style";
import { Image, JobBlock, TagBlock } from "./styles/JobItem.style";
import { JobStateTag } from "./styles/Tag.style";

const JobItem = ({ jobInfo, addTag }) => {
    const { logo, company, isNew, isFeatured, position, info, tags } = jobInfo;

    return (
        <JobCard featured={isFeatured}>
            <Image>
                <img src={logo} alt={company} />
            </Image>
            <JobBlock>
                <div className="title">
                    <span className="compnay">{company}</span>
                    {isNew && <JobStateTag bg="var(--cyan)">new !</JobStateTag>}
                    {isFeatured && (
                        <JobStateTag bg="var(--dark_cyan_2)">
                            feature
                        </JobStateTag>
                    )}
                </div>
                <div className="position">{position}</div>
                <div className="info">{info.join(" • ")}</div>
            </JobBlock>
            <TagBlock>
                {tags.map((tag) => (
                    <TagButton
                        key={tag}
                        onClick={() => {
                            addTag(tag);
                        }}
                    >
                        {tag}
                    </TagButton>
                ))}
            </TagBlock>
        </JobCard>
    );
};

export default JobItem;
