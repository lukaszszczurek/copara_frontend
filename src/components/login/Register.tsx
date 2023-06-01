import React from 'react';
import styled from "styled-components";
import {Button} from "@mui/material";
import axios from "axios";
import {saveJwtToken} from "../../auth/jwtService";



function Register() {

    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [name, setName] = React.useState<string>("");
    const [surname, setSurname] = React.useState<string>("");


    const handleRegister = async () => {
        const response = await axios.post('http://localhost:8080/api/v1/auth/register',
            {
                email:email,
                name:name,
                surname:surname,
                password:password
            });
        console.log(response.data);

        saveJwtToken(response.data.token);
    };

    return (
        <div className="mdc-text-field mdc-text-field--outlined">
            <StyledInput type="text" id="email" className="mdc-text-field__input" placeholder="Email..."
                         onChange={(e:React.ChangeEvent<HTMLInputElement>) => {setEmail(e.target.value)}}
            />

            <StyledInput type="password" id="password" className="mdc-text-field__input" placeholder="Password..."
                         onChange={(e:React.ChangeEvent<HTMLInputElement>) => {setPassword(e.target.value)}}
            />

            <StyledInput type="text" id="name" className="mdc-text-field__input" placeholder="Name..."
                         onChange={(e:React.ChangeEvent<HTMLInputElement>) => {setName(e.target.value)}}
            />

            <StyledInput type="text" id="surname" className="mdc-text-field__input" placeholder="Surname..."
                         onChange={(e:React.ChangeEvent<HTMLInputElement>) => {setSurname(e.target.value)}}
            />


            <div className="mdc-notched-outline">
                <div className="mdc-notched-outline__leading"/>
                <div className="mdc-notched-outline__notch">
                    <Button onClick={handleRegister} variant="contained" color="primary">Register</Button>
                </div>
                <div className="mdc-notched-outline__trailing"/>
            </div>


        </div>
    );
}

export default Register;

const StyledInput = styled.input`
    width: 80%;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0 10px;
    box-sizing: border-box;
    margin-top: 5px;
    margin-bottom: 16px;
    resize: vertical;
`;