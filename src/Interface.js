import './interface.css';
import { useState } from 'react';
import Datas from './data.json';

function Interface() {
    const [pause, setPause] = useState(false);

    const onHover = () => {
        document.querySelector('main img').style.display = 'none';
        document.querySelector('main video').play();
        document.querySelector('main video').muted = true;
        document.querySelector('main video').style.display = 'block';
    }
    const onMenu = () => {
        // document.querySelector('main img').style.display = 'block';
        // document.querySelector('main video').style.display = 'none';
        document.querySelector('main video').pause();
    }
    const playNpause = () => {
        if(!pause) {document.querySelector('main video').play()}
        if(pause) {document.querySelector('main video').pause()}
        setPause(prev => !prev)
    }
    return (
        <div className='wrap'>
            <header onMouseEnter={onMenu}>
                <nav>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </nav>
            </header>

            <main onMouseOut={onMenu}>
                <img src='img/1.jpg' onMouseEnter={onHover}></img>
                <video src="video/redface.mp4" loop onMouseEnter={onHover} onClick={playNpause}></video>
                <div className='radio_container'>
                    <div class='radio_btn'></div>
                    <div class='radio_btn'></div>
                    <div class='radio_btn'></div>
                </div>
            </main>

            <footer onMouseEnter={onMenu}>
                <h2>하단 영역</h2>
                <p>Lorem ipsum</p>
            </footer>
        </div>
    )
}

export default Interface;