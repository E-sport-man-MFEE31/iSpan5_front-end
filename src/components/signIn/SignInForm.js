import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";

import SignInWrapper from "./SignInWrapper";
import AuthService from "../../services/auth";
import { useAuth } from "../../utils/useAuth";

export default function SignInForm({
  email,
  password,
  setEmail,
  setPassword,
}) {
  const [message, setMessage] = useState("");
  const { currentUser, setCurrentUser } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          AuthService.login(email, password)
            .then((response) => {
              if (response.data.token) {
                localStorage.setItem(
                  "user",
                  JSON.stringify(response.data)
                );
              }
              const user_data =
                AuthService.getCurrentUser();
              setCurrentUser({
                ...currentUser,
                token: user_data.token,
                member: user_data.member,
              });
              navigate("/");
            })
            .catch((error) => {
              console.log(error.response);
              setMessage(error.response.data);
            });
        }}
      >
        <Form.Group>
          <Form.Label>帳號</Form.Label>
          <Form.Control
            type="text"
            placeholder="請輸入帳號"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>密碼</Form.Label>
          <Form.Control
            type="password"
            placeholder="請輸入密碼"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Check label="記住我" />
        <SignInWrapper />
      </Form>
    </>
  );
}
