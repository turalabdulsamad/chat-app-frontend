import styled from "styled-components"


const DirectHeader = styled.div`
    background-color: white;     
    position: fixed;
    z-index: 10000;
    width:1400px;
`

const StyledChat = styled.div`
    background-color: purple;     
    position: relative;
    padding-top: 20px;
    margin-bottom:50px;
`;

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
    min-height: 5vh;
    background-color: white;
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    width:1400px;

    @media (max-width:991px) {
        width: 400px;
}
`;

const MessageInput = styled.input`
   width: 1400px;
   @media (max-width:991px) {
    width: 400px;
}
`;

const SendMessage = styled.button`
`;

export { DirectHeader, StyledChat, RightMessage, LeftMessage, LeftMessageWrapper, RightMessageWrapper, MessageInputWrapper, MessageInput, SendMessage };