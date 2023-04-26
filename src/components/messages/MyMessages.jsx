import { useState, useEffect } from 'react';
import { getMessages } from '../../utils/Utils';
import { MessagesWrapper, MessagesCell, StyledUsername, StyledMessage } from "./styled"

const MyMessages = (username) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const messagesData = await getMessages(username);
            setMessages(messagesData);
        }
        fetchData();
    }, [username]);
    return (
        <MessagesWrapper>
            <ul>
                {messages.map((user) => (
                    <MessagesCell key={user.id} >
                        <StyledUsername>
                            {user.from}
                        </StyledUsername>
                        <StyledMessage>
                            {user.message}
                        </StyledMessage>
                    </MessagesCell>
                ))}
            </ul>
        </MessagesWrapper>
    );
}

export default MyMessages;