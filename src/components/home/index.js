import React, { Component } from 'react';
import {Header} from './components/Header';
import {Main} from './components/Main';
import {Footer} from './components/Footer';

class Home extends Component {
    render() {
        return (
            <div className="App Site">
                <div className="Site-content">
                    <div className="App-header">
                        <Header />
                    </div>
                    <div className="main">
                        <Main />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;