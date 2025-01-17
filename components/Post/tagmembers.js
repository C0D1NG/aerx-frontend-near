import { Tag , Avatar , Box } from "@chakra-ui/react";
import { TagAddButton } from "../UI/IconButton";

const MemberTag = ({...rest}) => {
    return (
        <Box {...rest}>
            <TagAddButton/>
            <Tag mt={1} borderRadius="full" >
                <Avatar
                name="Tag member 1"
                src='https://bit.ly/dan-abramov'
                size="2xs"
                />
                <Avatar
                name="Tag member 1"
                src='https://bit.ly/code-beast'
                size="2xs"
                /> 
                <Avatar
                name="Tag member 1"
                src='https://bit.ly/ryan-florence'
                size="2xs"
                />
            </Tag>
        </Box>
    )
}

export default MemberTag;



