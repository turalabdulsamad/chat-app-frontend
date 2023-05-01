import styled from "styled-components";

const Title = styled.h1`
    color: white;
    display: inline-block;
    margin-top:30px;
`;

const StyledMessages = styled.div`
    display: flex;
    align-items: center;
    color: white;
`;

const MessagesWrapper = styled.div`
`;

const MessagesCell = styled.li`
    display:flex;
    flex-direction:column;
    list-style-type: none;
    border: 1px inset;
    padding: 5px 25px;
`

const StyledUsername = styled.span`
    display:inline;
`

const StyledMessage = styled.span`
    display:inline;
`

export { Title, StyledMessages, MessagesWrapper, MessagesCell, StyledUsername, StyledMessage };