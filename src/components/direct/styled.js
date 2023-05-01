import styled from "styled-components"


const DirectHeader = styled.div`
    background-color: white;     
`

const StyledChat = styled.div`
    background-color: purple;     
    min-height: 86vh;
    position: relative;
    padding-top: 20px;
`

const RightMessage = styled.div`
    background-color:white;
    padding: 10px;
    border-radius: 15px;
    width: fit-content;
    display: flex;
    justify-content: left;
    margin-bottom: 10px;
    margin-right: 10px;
`
const LeftMessage = styled.div`
    background-color: white;
    padding: 10px;
    border-radius: 15px;
    display: flex;
    justify-content: left;
    width: fit-content;
    margin-bottom: 10px;
    margin-left: 10px;
`

const RightMessageWrapper = styled.div`
    display: flex;
    justify-content: right;
`;

const LeftMessageWrapper = styled.div`
    display: flex;
    justify-content: left;
`;

const MessageInputWrapper = styled.div`
    max-height: 4vh;
    background-color: white;
    display: flex;
    justify-content: space-between;
`;

const MessageInput = styled.input`
    width:100%;
`;

const SendMessage = styled.button`
`;

export { DirectHeader, StyledChat, RightMessage, LeftMessage, LeftMessageWrapper, RightMessageWrapper, MessageInputWrapper, MessageInput, SendMessage };