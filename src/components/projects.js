import React, {Component} from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardTitle,  CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props)
        this.state = { activeTab: 0 }
    }

    toggleCategories(){
        if (this.state.activeTab === 0) {
            return(
                <div className="projects-grid">
               { /* Project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://blog.hubbado.com/content/images/2020/01/projectmanager.png) center / cover'}}>React component project</CardTitle>
                    <CardText>
                    <a href="https://github.com/mayssabouoni/component/">component project</a>   
                    </CardText>
                   
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                {/* Project 2 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://blog.hubbado.com/content/images/2020/01/projectmanager.png) center / cover'}}>React  props Project</CardTitle>
                    <CardText>
                    <a href="https://github.com/mayssabouoni/props/">props project</a>  
                    </CardText>
                   
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                
                {/* Project 3 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://blog.hubbado.com/content/images/2020/01/projectmanager.png) center / cover'}}>React state project</CardTitle>
                    <CardText>
                    <a href="https://github.com/mayssabouoni/state/">state project</a>    
                    </CardText>
                    
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        } else if (this.state.activeTab === 1 ) {
            return(
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://blog.hubbado.com/content/images/2020/01/projectmanager.png) center / cover'}}>  javascript project</CardTitle>
                <CardText>
                <a href="https://edabit.com/user/SBtck3nbhbggwAkHp/">JavaScript project</a>   
                </CardText>
                
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
                
            )
        } else if (this.state.activeTab === 2) {
            return(
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://blog.hubbado.com/content/images/2020/01/projectmanager.png) center / cover'}}>React Project</CardTitle>
                <CardText>
                <a href="https://drive.google.com/drive/folders/1phSuo9zagQHVpCX7kA8_gjmSVOg0xbJ9?usp=sharing/">Bootstrap project</a>    
                </CardText>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
            )
        } else if (this.state.activeTab === 3) {
            return(
              <div><h1>This is WixCode</h1></div>
            )
        } else if (this.state.activeTab === 4) {
            return(
              <div><h1>This is Foundation</h1></div>
            )
        }
    }

    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>JavaScript</Tab>
                    <Tab>Bootstrap</Tab>
                  </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
            </div>
        )
    }
}

export default Projects;
