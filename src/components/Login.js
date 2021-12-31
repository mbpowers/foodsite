import React from 'react'
import styled from 'styled-components'
import Header from './Header';
import Footer from './Footer';
import { COLORS } from '../Colors.js'

function Login() {
    return (
        <>
            <Header/>
            <Background><div/></Background>
            <Container>
                Log in/Sign up
                <Form>

                </Form>
            </Container>
            <Footer/>
        </>
    );
}

export default Login

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Form = styled.div`
    background: #333333FF;
    width: calc(100vw - 1200px);
    height: calc(100vh - 160px);
    border: solid;
    border-color: #111111FF;
    border-radius: 20px;
    border-width: 10px;
    margin: 50px;
    div {
    }
    p {
        padding: 30px;
    }
`

const Background = styled.div`
    background-size: cover;
    background-attachment: fixed;
    background-image: url(produce.jpg);
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width 100%;
    div {
        background: linear-gradient(to bottom, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%);
        height: 100%;
        width 100%;
        z-index: -1;
    }
    z-index: -2;
`
