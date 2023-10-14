import { LoginContainer, LoginBox, LoginTitle, LoginInput, LoginButton, ButtonContainer, SignUpButton,  } from "../style/login-style";
import { useState } from "react";




export default function LoginPage() {
    const [action, setAction]= useState("Sign Up");
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const fetchToCurl = require("fetch-to-curl").fetchToCurl;

    const handleUsernameChange = (e) => {
        setUserName(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setUserPassword(e.target.value);
    };

    const handleLogin = () => {
        const authUrl = "https://financio-be-b0c1d25807f0.herokuapp.com/auth";

        const requestData = {
            username: userName,
            password: userPassword,
        };

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
        };

        fetch(authUrl, requestOptions)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erro na solicitação: " + response.status);
                }
                return response.json();
            })
            .then((data) => {
                
                const authToken = data.token;

                if (authToken) {
                    // Login bem-sucedido,  armazenar o token e redirecionar o usuário

                    
                    const curlCommand = fetchToCurl(authUrl, requestOptions);
                    console.log("Comando cURL da solicitação:");
                    console.log(curlCommand);
                } else {
                    console.error("Login falhou. Mensagem de erro: " + data.error);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <LoginContainer>
            <LoginBox>
                <LoginTitle>{action}</LoginTitle>
                <div>
                    <LoginInput
                        type="text"
                        placeholder="Username"
                        onChange={handleUsernameChange}
                    />
                    <LoginInput
                        type="password"
                        placeholder="Password"
                        onChange={handlePasswordChange}
                    />
                    <ButtonContainer>
                    <LoginButton  onClick={handleLogin}>Entrar</LoginButton>
                    <SignUpButton>Registrar</SignUpButton>
                    </ButtonContainer>
                </div>
            </LoginBox>
        </LoginContainer>
    );
}