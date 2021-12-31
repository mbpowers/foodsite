import React, { useState } from 'react'
import styled from 'styled-components'
import { COLORS } from '../Colors.js'
import { FaBars, FaTimes, FaShoppingCart, FaMapMarkedAlt, FaSearch, FaInfoCircle, FaCalculator, FaSignInAlt } from 'react-icons/fa'

function Header() {
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => setMenu(!menu)

    const [main, setMain] = useState(false);
    const showMain = () => {
        if (window.innerWidth <= 768) {
            setMain(false)
        } else {
            setMain(true)
        }
    }
    window.addEventListener('resize', showMain);

    return (
        <Container>
            <Main>
                <Logo href="/" >
                    <img src="logo.png" />
                    <div>Dingus Foods</div>
                </Logo>
                <Search>
                    <input type="text" placeholder="Produce or Location"/>
                    <FaSearch/>
                </Search>
                <Nav>
                    <a className="login" href="/login">Log In/Sign Up</a>
                    <a href="/checkout"><FaShoppingCart/></a>
                    { menu ? ( <FaTimes onClick={toggleMenu}/> ) : ( <FaBars onClick={toggleMenu}/> )}
                </Nav>
            </Main>
            <Menu menu={menu}>
                <a className="sizedependent" href="/login"><FaSignInAlt/> Log In/Sign Up</a>
                <a className="sizedependent" href="/checkout"><FaShoppingCart/> Checkout</a>
                <a href="/nutritioncalc"><FaCalculator/> Nutrition Calculator</a>
                <a href="/map"><FaMapMarkedAlt/> Map View</a>
                <a href="/about"><FaInfoCircle/> About</a>
            </Menu>
        </Container>
    );
}

export default Header

const Container = styled.header`
    position: fixed;
    width: 100%;
    font-size: 20px;
    * {
        color: ${COLORS.moss3};
    }
    border-bottom: solid;
    border-width: 1px;
    border-color: #111111BB;
`
const Main = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #11111155;
`

const Logo = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    margin: 10px;
    height: 100%;
    img {
        max-height: 100%;
        margin-right: 5px;
    }
    div {
        white-space: nowrap;
    }

    @media (max-width: 768px) {
        div {
            display: none;
        }
    }
`

const Search = styled.div`
    position: relative;
    flex-grow: 1;
    min-width: 270px;
    max-width: 600px;
    height: 30px;
    input {
        color: #999;
        background: #111111BB;
        padding-left: 10px;
        height: 30px;
        width: calc(100% - 10px);
        opacity: 1;
        border: none;
        border-radius: 3px;
        line-height: 3;
    }
    svg {
        height: 25px;
        position: absolute;
        right: 5px;
        top: 2.5px;
        z-index: 1;
        cursor: text;
        * {
            color: #999;
        }
    }
`

const Nav = styled.nav`
    display: flex;
    align-items: center;
    > * {
        margin-right: 12px;
        margin-left: 12px;
    }
    a.login {
        font-size: 12px;
        text-decoration: none;
        white-space: nowrap;
        padding: 3px 8px 3px 8px;
        border: solid;
        border-width: 1px;
        border-radius: 4px;
        border-color: black;
        background: #11111155;
        &:hover{
            background: #111111BB;
        }
    }
    svg {
        font-size: 20px;
        vertical-align: bottom;
        height: 25px;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        a {
            display: none;
        }
    }
`

const Menu = styled.div`
    width: 320px;
    background: #11111155;
    display: flex;
    flex-direction: column;
    transition: 350ms;
    z-index: 10;
    border-left: solid;
    border-width: 1px;
    border-color: #111111BB;
    a {
        padding: 15px;
        border-bottom: solid;
        border-width: 1px;
        border-color: #111111BB;
        text-decoration: none;
        &:hover{
            background: #111111BB;
        }
    }
    @media (min-width: 768px) {
        position: fixed;
        top: 40px;
        right: ${({ menu }) => (menu ? '0' : '-100%')};
        a.sizedependent {
            display: none;
        }
    }
    @media (max-width: 768px) {
        position: fixed;
        top: ${({ menu }) => (menu ? '40px' : '-100%')};
        right: 0;
        width: 100vw;
    }
`
