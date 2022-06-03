import React, { useState} from 'react';
import { useHistory } from 'react-router-dom';
import { Divider, Form, Header, Button } from 'semantic-ui-react'

const Login = () => {

    const history = useHistory();

const[userState, setUserState] = useState<{email : string, password : string}>({
    email : '',
    password : ''
})

const loginClickHandler = (event : React.SyntheticEvent) => {
    event.preventDefault();
    history.replace("/home")
}

const emailChangeHandler : React.ChangeEventHandler<HTMLInputElement> = (event) => setUserState({...userState, email : event.target.value})
const passwordChangeHandler : React.ChangeEventHandler<HTMLInputElement> = (event) => setUserState({...userState, password : event.target.value})

console.log(userState.email)
console.log(userState.password)

return (
    <Form >
            <Header as='h1' textAlign='center'>Welcome to the Sempra page</Header>
        <Form.Field>
            <label htmlFor='email'>Email : </label>
            <input type='text' name='email' placeholder='Enter email' value={userState.email} onChange={emailChangeHandler}/>
        </Form.Field>
        <Divider />

        <Form.Field>
            <label>password</label>
        <input type='password' placeholder='Enter Password' value={userState.password} onChange={passwordChangeHandler} />
        </Form.Field>
        <Divider />

    <Button primary onClick={loginClickHandler}>Login</Button>
    </Form>
    )
}
export default Login;