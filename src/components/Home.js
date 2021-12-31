import React from 'react'
import styled from 'styled-components'
import Header from './Header';
import Footer from './Footer';
import { COLORS } from '../Colors.js'

function Home() {
    return (
        <>
            <Container>
                <Header/>
                <Background><div/></Background>
                <Content>
                    <Hero>
                        <b>Local Food</b>from<b>Local Sources</b>
                    </Hero>
                    <Info>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas sed tempus. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi. Diam vel quam elementum pulvinar etiam non quam. Consectetur adipiscing elit pellentesque habitant morbi. Tellus rutrum tellus pellentesque eu. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Morbi tincidunt augue interdum velit euismod in. Eget nunc scelerisque viverra mauris. Eu tincidunt tortor aliquam nulla. Mattis vulputate enim nulla aliquet porttitor lacus luctus. Purus in mollis nunc sed id semper risus in.</p>
                            <p>Urna neque viverra justo nec. Vel quam elementum pulvinar etiam non quam lacus suspendisse. Nisl vel pretium lectus quam. Diam volutpat commodo sed egestas. Posuere ac ut consequat semper. Sed risus pretium quam vulputate dignissim. In massa tempor nec feugiat nisl. At risus viverra adipiscing at in tellus integer feugiat scelerisque. Nunc eget lorem dolor sed viverra ipsum nunc aliquet. Etiam tempor orci eu lobortis. Iaculis urna id volutpat lacus laoreet non. Fermentum posuere urna nec tincidunt praesent.</p>
                            <p>Feugiat nisl pretium fusce id. Molestie nunc non blandit massa enim. Vel orci porta non pulvinar neque laoreet suspendisse. Scelerisque purus semper eget duis at. Cursus in hac habitasse platea dictumst. Nulla posuere sollicitudin aliquam ultrices sagittis. Et molestie ac feugiat sed lectus. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Turpis egestas pretium aenean pharetra magna. Ac orci phasellus egestas tellus rutrum tellus pellentesque. Non consectetur a erat nam. Ut pharetra sit amet aliquam. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Elit at imperdiet dui accumsan sit amet nulla facilisi morbi. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Nec ultrices dui sapien eget mi. Integer malesuada nunc vel risus commodo.</p>
                            <p>Auctor urna nunc id cursus. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Pellentesque habitant morbi tristique senectus. Nulla facilisi etiam dignissim diam quis. Enim facilisis gravida neque convallis a cras semper. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Id nibh tortor id aliquet lectus. Aliquam etiam erat velit scelerisque in dictum non consectetur. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Eget nunc scelerisque viverra mauris in aliquam sem. Quam vulputate dignissim suspendisse in. Justo nec ultrices dui sapien eget mi. Eget nunc scelerisque viverra mauris.</p>
                            <p>At urna condimentum mattis pellentesque id nibh tortor. Fames ac turpis egestas sed tempus urna. Elementum sagittis vitae et leo duis ut diam quam. Enim diam vulputate ut pharetra sit amet aliquam. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Id ornare arcu odio ut sem. Adipiscing vitae proin sagittis nisl. Urna neque viverra justo nec. Fermentum dui faucibus in ornare quam viverra. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Felis donec et odio pellentesque diam volutpat commodo sed egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada. Nec feugiat in fermentum posuere urna nec tincidunt praesent semper. Augue lacus viverra vitae congue eu consequat ac. Et netus et malesuada fames ac turpis egestas sed. In massa tempor nec feugiat nisl pretium fusce id velit. Libero nunc consequat interdum varius. Neque gravida in fermentum et sollicitudin ac.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas sed tempus. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi. Diam vel quam elementum pulvinar etiam non quam. Consectetur adipiscing elit pellentesque habitant morbi. Tellus rutrum tellus pellentesque eu. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Morbi tincidunt augue interdum velit euismod in. Eget nunc scelerisque viverra mauris. Eu tincidunt tortor aliquam nulla. Mattis vulputate enim nulla aliquet porttitor lacus luctus. Purus in mollis nunc sed id semper risus in.</p>
                            <p>Urna neque viverra justo nec. Vel quam elementum pulvinar etiam non quam lacus suspendisse. Nisl vel pretium lectus quam. Diam volutpat commodo sed egestas. Posuere ac ut consequat semper. Sed risus pretium quam vulputate dignissim. In massa tempor nec feugiat nisl. At risus viverra adipiscing at in tellus integer feugiat scelerisque. Nunc eget lorem dolor sed viverra ipsum nunc aliquet. Etiam tempor orci eu lobortis. Iaculis urna id volutpat lacus laoreet non. Fermentum posuere urna nec tincidunt praesent.</p>
                            <p>Feugiat nisl pretium fusce id. Molestie nunc non blandit massa enim. Vel orci porta non pulvinar neque laoreet suspendisse. Scelerisque purus semper eget duis at. Cursus in hac habitasse platea dictumst. Nulla posuere sollicitudin aliquam ultrices sagittis. Et molestie ac feugiat sed lectus. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Turpis egestas pretium aenean pharetra magna. Ac orci phasellus egestas tellus rutrum tellus pellentesque. Non consectetur a erat nam. Ut pharetra sit amet aliquam. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Elit at imperdiet dui accumsan sit amet nulla facilisi morbi. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Nec ultrices dui sapien eget mi. Integer malesuada nunc vel risus commodo.</p>
                            <p>Auctor urna nunc id cursus. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Pellentesque habitant morbi tristique senectus. Nulla facilisi etiam dignissim diam quis. Enim facilisis gravida neque convallis a cras semper. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Id nibh tortor id aliquet lectus. Aliquam etiam erat velit scelerisque in dictum non consectetur. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Eget nunc scelerisque viverra mauris in aliquam sem. Quam vulputate dignissim suspendisse in. Justo nec ultrices dui sapien eget mi. Eget nunc scelerisque viverra mauris.</p>
                            <p>At urna condimentum mattis pellentesque id nibh tortor. Fames ac turpis egestas sed tempus urna. Elementum sagittis vitae et leo duis ut diam quam. Enim diam vulputate ut pharetra sit amet aliquam. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Id ornare arcu odio ut sem. Adipiscing vitae proin sagittis nisl. Urna neque viverra justo nec. Fermentum dui faucibus in ornare quam viverra. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Felis donec et odio pellentesque diam volutpat commodo sed egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada. Nec feugiat in fermentum posuere urna nec tincidunt praesent semper. Augue lacus viverra vitae congue eu consequat ac. Et netus et malesuada fames ac turpis egestas sed. In massa tempor nec feugiat nisl pretium fusce id velit. Libero nunc consequat interdum varius. Neque gravida in fermentum et sollicitudin ac.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas sed tempus. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi. Diam vel quam elementum pulvinar etiam non quam. Consectetur adipiscing elit pellentesque habitant morbi. Tellus rutrum tellus pellentesque eu. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Morbi tincidunt augue interdum velit euismod in. Eget nunc scelerisque viverra mauris. Eu tincidunt tortor aliquam nulla. Mattis vulputate enim nulla aliquet porttitor lacus luctus. Purus in mollis nunc sed id semper risus in.</p>
                            <p>Urna neque viverra justo nec. Vel quam elementum pulvinar etiam non quam lacus suspendisse. Nisl vel pretium lectus quam. Diam volutpat commodo sed egestas. Posuere ac ut consequat semper. Sed risus pretium quam vulputate dignissim. In massa tempor nec feugiat nisl. At risus viverra adipiscing at in tellus integer feugiat scelerisque. Nunc eget lorem dolor sed viverra ipsum nunc aliquet. Etiam tempor orci eu lobortis. Iaculis urna id volutpat lacus laoreet non. Fermentum posuere urna nec tincidunt praesent.</p>
                            <p>Feugiat nisl pretium fusce id. Molestie nunc non blandit massa enim. Vel orci porta non pulvinar neque laoreet suspendisse. Scelerisque purus semper eget duis at. Cursus in hac habitasse platea dictumst. Nulla posuere sollicitudin aliquam ultrices sagittis. Et molestie ac feugiat sed lectus. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Turpis egestas pretium aenean pharetra magna. Ac orci phasellus egestas tellus rutrum tellus pellentesque. Non consectetur a erat nam. Ut pharetra sit amet aliquam. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Elit at imperdiet dui accumsan sit amet nulla facilisi morbi. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Nec ultrices dui sapien eget mi. Integer malesuada nunc vel risus commodo.</p>
                            <p>Auctor urna nunc id cursus. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Pellentesque habitant morbi tristique senectus. Nulla facilisi etiam dignissim diam quis. Enim facilisis gravida neque convallis a cras semper. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Id nibh tortor id aliquet lectus. Aliquam etiam erat velit scelerisque in dictum non consectetur. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Eget nunc scelerisque viverra mauris in aliquam sem. Quam vulputate dignissim suspendisse in. Justo nec ultrices dui sapien eget mi. Eget nunc scelerisque viverra mauris.</p>
                            <p>At urna condimentum mattis pellentesque id nibh tortor. Fames ac turpis egestas sed tempus urna. Elementum sagittis vitae et leo duis ut diam quam. Enim diam vulputate ut pharetra sit amet aliquam. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Id ornare arcu odio ut sem. Adipiscing vitae proin sagittis nisl. Urna neque viverra justo nec. Fermentum dui faucibus in ornare quam viverra. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Felis donec et odio pellentesque diam volutpat commodo sed egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada. Nec feugiat in fermentum posuere urna nec tincidunt praesent semper. Augue lacus viverra vitae congue eu consequat ac. Et netus et malesuada fames ac turpis egestas sed. In massa tempor nec feugiat nisl pretium fusce id velit. Libero nunc consequat interdum varius. Neque gravida in fermentum et sollicitudin ac.</p>
                        </div>
                    </Info>
                </Content>
                <Footer/>
            </Container>
        </>
    );
}

export default Home

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

const Container = styled.div`
    scroll-snap-type: y proximity;
    overflow-y: scroll;
    height: 100vh;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    scroll-snap-align: end;
`

const Hero = styled.div`
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    b {
        font-size: 80px;
    }
`

const Info = styled.div`
    background: #333333FF;
    width: calc(100vw - 100px);
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
