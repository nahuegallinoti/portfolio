import {
    BlogCard,
    CardInfo,
    ExternalLinks,
    HeaderThree,
    Hr,
    Tag,
    TagList,
    UtilityList,
} from "./ProjectsStyles";

import { DiCodepen } from "react-icons/di";

export const Project = ({ id, title, description, tags, visit, source, icon }) => {
    return (
        <div className="card">
            <div className="image">
                <HeaderThree titulo>{title}</HeaderThree>
                <Hr color="white" />
                <CardInfo>{description}</CardInfo>
                <div className="project-icon">
                    {icon}
                </div>
            </div>
            <div className="details">
                <div className="center">
                    <TagList>
                        {tags.map((tag, i) => (
                            <Tag key={i}>{tag}</Tag>
                        ))}
                    </TagList>
                </div>
                <div>
                    <UtilityList>
                        <ExternalLinks href={visit}>Live</ExternalLinks>
                        <ExternalLinks href={source}>Code</ExternalLinks>
                    </UtilityList>
                </div>
            </div>
        </div>
    )
}