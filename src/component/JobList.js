import { useState, useEffect, useMemo } from "react";
import JobItem from "./JobItem";
import FilterTags from "./FilterTags";
import StyleJobList from "./styles/JobList.style";

const JobList = () => {
    const [jobList, setJobList] = useState([]);
    const [filterTagList, setFilterTagList] = useState([]);

    const addFilterTagHandler = (tag) => {
        if (filterTagList.includes(tag)) return;
        setFilterTagList((prev) => [...prev, tag]);
    };
    const removeFilterTagHandler = (tag) => {
        const newFilterTagList = filterTagList.filter(
            (filterTag) => filterTag !== tag
        );
        setFilterTagList(newFilterTagList);
    };

    const clearFilterTagHandler = () => {
        setFilterTagList([]);
    };

    const filterJobList = useMemo(() => {
        return jobList.filter((jobInfo) => {
            return filterTagList.every((filterTag) => {
                return jobInfo.tags.includes(filterTag);
            });
        });
    }, [filterTagList, jobList]);

    useEffect(() => {
        let mounted = true;
        const fetchData = async () => {
            const res = await fetch("./data.json");
            const data = await res.json();
            if (mounted) {
                const jobData = data.map((jobItem) => {
                    return {
                        id: jobItem.id,
                        logo: jobItem.logo,
                        company: jobItem.company,
                        isNew: jobItem.new,
                        isFeatured: jobItem.featured,
                        position: jobItem.position,
                        info: [
                            jobItem.postedAt,
                            jobItem.contract,
                            jobItem.location,
                        ],
                        tags: [
                            jobItem.role,
                            jobItem.level,
                            ...jobItem.languages,
                        ],
                    };
                });
                setJobList(jobData);
            }
        };
        fetchData();
        return () => (mounted = false);
    }, []);

    return (
        <StyleJobList>
            {filterTagList.length !== 0 && (
                <FilterTags
                    tagList={filterTagList}
                    removeTag={removeFilterTagHandler}
                    clearTag={clearFilterTagHandler}
                />
            )}
            {filterJobList.map((jobInfo) => (
                <JobItem
                    key={jobInfo.id}
                    jobInfo={jobInfo}
                    addTag={addFilterTagHandler}
                />
            ))}
        </StyleJobList>
    );
};

export default JobList;
