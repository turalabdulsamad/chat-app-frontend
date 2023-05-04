import { useState, useEffect, useRef } from 'react';

import Container from "../styled";
import { StyledBack } from "../components/login/styled";
import { DirectHeader, StyledChat, LeftMessage, RightMessage, LeftMessageWrapper, RightMessageWrapper, MessageInputWrapper, MessageInput, SendMessage } from "./../components/direct/styled"
import {
    getDirectMessages, sendMessage
} from "../utils/Utils";


const Direct = () => {
    const me = window.location.href.split("/")[4].split("=")[1]
    const to = window.location.href.split("/")[5].split("=")[1]

    const [messages, setMessages] = useState([]);
    const [liveMessages, setliveMessages] = useState('');
    const [messageBoxValue, setMessageBoxValue] = useState('');
    const ws = useRef(null);

    const myMessageStyles = { color: "blue", display: "flex", flexDirection: 'column', alignItems: 'self-end' }
    const yourMessageStyles = `style={color:"red", display:"flex",flexDirection:'column'}`

    useEffect(() => {
        if ('WebSocket' in window) {
            ws.current = new WebSocket('ws://localhost:3002');

            ws.current.onmessage = async ({ data }) => {
                let convertedText = await data.text()
                setliveMessages((prevMessages) => `${prevMessages} <p>${convertedText}</p> `);

            };
        } else {
            alert('ERROR: WebSocket is not supported in this browser!');
        }

        return () => {
            if (ws.current) {
                ws.current.close();
            }
        };
    }, []);

    const handleMessageSend = () => {
        if (ws.current) {
            ws.current.send(messageBoxValue);
            setliveMessages((prevMessages) => `${prevMessages}  <p>${messageBoxValue}</p>  `);
            setMessageBoxValue('');
            sendMessage(me, to, messageBoxValue)
        } else {
            alert('ERROR: Not connected... refresh to try again!');
        }
    };

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
                (message.from === me ? <LeftMessageWrapper key={message.id}> <LeftMessage key={message.id} >
                    {message.message}</LeftMessage></LeftMessageWrapper> : <RightMessageWrapper key={message.id}> <RightMessage key={message.id}>
                        {message.message}
                    </RightMessage>
                </RightMessageWrapper>))}
                <div dangerouslySetInnerHTML={{ __html: liveMessages }} style={myMessageStyles} />
            </StyledChat>
            <MessageInputWrapper>
                <MessageInput type="text" name="message" id="message" placeholder='Type any message'
                    value={messageBoxValue}
                    onChange={(e) => setMessageBoxValue(e.target.value)} ></MessageInput>
                <button id="send" onClick={handleMessageSend}
                > Send</button>
            </MessageInputWrapper>
        </Container>
    )
};

export default Direct;