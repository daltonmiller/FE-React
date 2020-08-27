import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components'
<<<<<<< HEAD
import { useHistory } from 'react-router-dom';
import { login } from '../store/actions'
import { connect } from 'react-redux'
import { ToastsContainer, ToastsStore} from 'react-toasts'
=======
import Anime, {anime} from 'react-anime';

>>>>>>> d5b519182ad3225dda13501369b5312f17226820

const MainDiv = styled.div`
    padding-top: 1%;
    padding-bottom: 1%;
    margin-top: 5%;
    margin-left: 30%;
    margin-right: 30%;
    margin-bottom: 5%;
    background: #EA8547;
    border-radius: 30px;
    box-shadow: 0 5px 20px rgba(131, 131, 131, 1);
`

const FormDiv = styled.div`
    width: 90%;
    max-width: 340px;
    margin: 10vh auto;
`

const Header = styled.h1`
    color: #342F2C;
    margin-bottom: 3%;
    text-align: center;
`

const FormInputs = styled.p`
    font-size: $font-size;
    margin-bottom: -10px;
    font-weight: 500;
    color: white;
`

const Inputs = styled.input`
    display: block;
    width: 100%;
    padding: 20px;
    font-family: $font-family;
    -webkit-appearance: none;
    border: 0;
    outline: 0;
    transition: 0.3s;
`

const Submit = styled.button`
    display: block;
    width: 100%;
    padding: 20px;
    outline: 0;
    border: 0;
    color: white;
    margin-top: 5%;
    background: #342F2C;
    &: hover {
        box-shadow: 0 0 5px #ffffff,
                    0 0 5px #ffffff,
                    0 0 15px #ffffff,
                    0 0 25px #ffffff;
    } 
`


const formSchema = yup.object().shape({
    username: yup
        .string()
        .min(3, "Must be a valid username")
        .required("username is a required field"),
    password: yup
        .string()
        .min(5, "Password must be at least 5 characters")
        .required("Must include a password"),
})

// Form Function

function SignInForm(props) {
    const history = useHistory()
    const [userList, setUserList] = useState([]);

    const [formState, setFormState] = useState({
        username: "",
        password: "",
    });

const [buttonDisabled, setButtonDisabled] = useState(true);

useEffect(() => {
    formSchema.isValid(formState).then(valid => {
        setButtonDisabled(!valid);
    });
}, [formState]);

const [errorState, setErrorState] = useState({
    username: "",
    password: ""
});

const validate = e => {
    let value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
    yup
      .reach(formSchema, e.target.name)
      .validate(value)
      .then(valid => {
          setErrorState({
              ...errorState,
              [e.target.name]: ""
          })
      })
      .catch(err => {
          setErrorState({
              ...errorState,
              [e.target.name]: err.errors[0]
          });
      });
};

// onChange function

const inputChange = e => {
    e.persist();
    validate(e);
    let value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormState({...formState, [e.target.name]: value});
};

const formSubmit = e => {
    e.preventDefault();
    props.login(formState)
    .then((res) => {
        if (res) {
            history.push("/signIn")
           alert("not valid") 
        } else {
            history.push('/protected')
        }
    })
    
};

return (
    
    <MainDiv>
    <form onSubmit={formSubmit}>
        {/* STRETCH - ANIME */}

    {/* <Anime opacity={[0, 1]} translateY={'1em'} delay={(e, i) => i * 600}> */}
    
    {/* END STRETCH */}
    <FormDiv>
    <Header>
            Sign In
    </Header>
        <FormInputs>
<<<<<<< HEAD
        <label htmlFor="username">
            Username
            <Inputs
                type="username"
                name="username"
                id="username"
                value={formState.username}
=======
        <label htmlFor="email">
            <Inputs
                type="email"
                placeholder="Please enter your email"
                name="email"
                id="email"
                value={formState.email}
>>>>>>> d5b519182ad3225dda13501369b5312f17226820
                onChange={inputChange}
                />
                {errorState.username.length > 0 ? (
                    <p className="error">{errorState.username}</p>
                ) : null}
        </label>
        </FormInputs>
        <FormInputs>
        <label htmlFor="password">
            <Inputs
                type="password"
                placeholder="Please enter your password"
                name="password"
                id="password"
                value={formState.password}
                onChange={inputChange}
            />
            {errorState.password.length < 0 ? (
                    <p className="error">{errorState.password}</p>
                ) : null}
        </label>
        </FormInputs>
            <div className="button-div">
        <Submit disabled={buttonDisabled}>Submit</Submit>
        </div>
    </FormDiv>
    {/* </Anime> */}
    </form>
    </MainDiv>
);

};

const mapStateToProps = (state) => {
    return {
        data: state.LoginReducer.data
    }
}

export default connect(mapStateToProps, {login})(SignInForm);
