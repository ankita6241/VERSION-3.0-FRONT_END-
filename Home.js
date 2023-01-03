// import { render } from '@testing-library/react';
import { faHomeUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import Footer from './Footer'
import Header from './Header';
import './Home.css';
class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
      }
    render() {

        return (
            <>
                <Header  {...this.props}/>
                <div className="bg-no-overlay">
                    <div className="text-center">
                        <h2>WELCOME <br></br>TO <br></br>ART GALLERY</h2>
                    </div>
                </div>
                <Footer />
            </>
        )
    }

}
export default Home;

// 123 {this.props.loggedinUser.userName }