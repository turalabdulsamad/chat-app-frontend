import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getMessages } from '../../utils/Utils';
import { MessagesWrapper, MessagesCell, StyledUsername, StyledMessage } from "./styled"

const MyMessages = (username) => {
    const [messages, setMessages] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const messagesData = await getMessages(username);
            setMessages(messagesData);
        }
        fetchData();
    }, [username]);
    const navigateToDirect = (from) => (event) => {
        event.preventDefault();
        navigate(`/direct/me=${username.username}/to=${from}`)
    }

    return (
        <MessagesWrapper>
            <ul>
                {messages.map((user) => (
                    user?.message &&
                    <MessagesCell key={user.id} onClick={navigateToDirect(username.username !== user.username1 ? user.username1 : user.username2)}>
                        <StyledUsername>
                            {username.username !== user.username1 ? user.username1 : user.username2}
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