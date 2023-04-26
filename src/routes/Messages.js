import { useParams } from "react-router-dom";

import Container from "../styled";
import { Title, StyledMessages } from "../components/messages/styled";
import MyMessages from "./../components/messages/MyMessages"


const Messages = () => {
    const { username } = useParams()
    const convertedUsername = username.split("=")[1]
    return (
        <Container>
            <Title>
                My messages
            </Title>
            <StyledMessages>
                <MyMessages username={convertedUsername} />
            </StyledMessages>
        </Container>
    )
}

export default Messages