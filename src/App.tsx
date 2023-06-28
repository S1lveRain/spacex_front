import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import background from './assets/backgrounds/background.png'
import { Main } from './components/main/Main';

const App = () => {
    return(
        <div className={'app-wrapper'}>
            <div className={'header-wrapper'}>
                <Header />
            </div>
            <div className={'main-wrapper'}>
                <Main />
            </div>
        </div>
    );
}

export default App;
