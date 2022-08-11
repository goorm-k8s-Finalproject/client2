import {
    React,
    useState
} from 'react'

import styles from "../css/LoginRegister.module.css"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  
  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
}

  const onSubmit = (event) => {
    event.preventDefault();
  }

  return (
      <div class="loginregister">
        <form>
            <div><input name="email" type="email" placeholder="이메일" value={email} onChange={onEmailHandler} class="loginregister__input"/></div>
            <div><input name="password" type="password" placeholder="비밀번호" value={password} onChange={onPasswordHandler} class="loginregister__input"/></div>
            <div><button type="submit" onSubmit={onSubmit} class="loginregister__button">로그인</button></div>
        </form>
      </div>
    );
  }

export default Login;