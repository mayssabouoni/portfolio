import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render(){
        return(
            <div style ={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png" alt="avatar" className="avatar-img" />
                        <div className="banner-text">
                            <h1>Web Developement student</h1>
                            

                            <p>HTML | CSS | JavaScript | React | Bootstrap</p>

                            <div className="social-links">
                                {/* Facebook social link */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true"/>
                                </a>
                                {/* LinkedIn social link */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                                {/* Github social link */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>
                                {/* Google plus social link */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-google-plus-square" aria-hidden="true"/>
                                </a>
                                {/* Youtube plus social link */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true"/>
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;
