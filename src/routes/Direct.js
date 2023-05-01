import { useState, useEffect } from 'react';

import Container from "../styled";
import { StyledBack } from "../components/login/styled";
import { DirectHeader, StyledChat, LeftMessage, RightMessage, LeftMessageWrapper, RightMessageWrapper, MessageInputWrapper, MessageInput, SendMessage } from "./../components/direct/styled"
import {
    getDirectMessages, sendMessage
} from "../utils/Utils";


const Direct = () => {
    const [liveMessages, setLiveMessages] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:3002');
        socket.onmessage = async event => {
            const text = await event.data.text();
            setLiveMessages(prevMessages => [...prevMessages, text]);
        };
        return () => {
            socket.close();
        };
    }, []);

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const sendMessageEvent = (from, to, message) => (event) => {
        event.preventDefault()
        sendMessage(from, to, message)
        setInput("");
    };

    const me = window.location.href.split("/")[4].split("=")[1]
    const to = window.location.href.split("/")[5].split("=")[1]
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const messages = await getDirectMessages(me, to);
            setMessages(messages);
        };
        fetchData();
    }, [me, to]);

    return (
        <Container>
            <DirectHeader>
                <StyledBack to={`/messages/username=${me}`} style={{ color: 'black' }}>
                    Back
                </StyledBack>
                {to}
            </DirectHeader>
            <StyledChat>
                {messages.map((message) =>
                (message.from === me ? <LeftMessageWrapper key={message.id}> <LeftMessage >{message.message}</LeftMessage></LeftMessageWrapper> : <RightMessageWrapper key={message.id}> <RightMessage>{message.message}
                </RightMessage>
                </RightMessageWrapper>))
                }
                {liveMessages.map((message) => (message.from === me ? <LeftMessageWrapper key={message.id}> <LeftMessage >{message}</LeftMessage></LeftMessageWrapper> : <RightMessageWrapper key={message.id}> <RightMessage>{message}
                </RightMessage>
                </RightMessageWrapper>))}
            </StyledChat>
            <MessageInputWrapper>
                <MessageInput type="text" name="message" id="message" value={input} placeholder='Type any message'
                    onChange={handleChange}
                ></MessageInput>
                <SendMessage onClick={sendMessageEvent(to, me, input)}>Send</SendMessage>
            </MessageInputWrapper>
        </Container>
    )
}

export default Direct;