import { Link } from "react-router-dom";
import styled from "styled-components";


const StyledLogin = styled.div`
`

const StyledBack = styled(Link)`
    color: white;
    text-decoration:none;
    padding: 30px;
    display: inline-block;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin:300px;
`

const Input = styled.input`
    font-size: 30px;
    margin-bottom: 30px;
`
const Label = styled.label`
    color: white;
    font-size: 30px;
    margin: 0 auto;
    margin-bottom: 30px;
`
const Button = styled.button`
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    padding: 10px 20px;
`

export { StyledBack, StyledLogin, Form, Input, Label, Button }; 