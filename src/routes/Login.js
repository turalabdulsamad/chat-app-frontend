import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from "../styled";
import { StyledBack, Form, Label, Input, Button } from "../components/login/styled";
import getUser from '../utils/Utils';


const Login = () => {
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const formData = {
            username: data.get('username'),
        };
        setFormData(formData);
        getUser(formData)
        navigate(`/messages/username=${formData.username}`);
    }

    return (
        <Container>
            <StyledBack to="/">
                Back
            </StyledBack>
            <Form onSubmit={handleSubmit}>
                <Label htmlFor="welcome" text="welcome" >WELCOME TO HATUNA CHAT! </Label>
                <Label htmlFor="username" text="username" >PLEASE ENTER YOUR USERNAME</Label>
                <Input type="text" name="username"
                ></Input>
                <Button type="submit">
                    SEND</Button>
            </Form>
        </Container>
    )
}

export default Login;