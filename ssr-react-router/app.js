import React from 'react'
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom'

import Index from './pages/index'
import Home from './pages/home'
import Album from './pages/album'
import Sound from './pages/sound'
import AlbumDetail from './pages/album-detail'
import SoundDetail from './pages/sound-detail'
import NoFound from './pages/no-found'
import Cate from './pages/cate'

export default class App extends React.Component {
    render() {
        return (
            <div id="app">
                <Route path="/" component={Index} />
                <Switch>                           
                    <Route path="/cate" component={Cate} />      
                    <Route path="/album/:uid" render={({ match }) => { 
                        const uid = match.params.uid
                        return <Redirect to={`/13/album/${uid}`}/>
                    }}/>
                    <Route path="/:uid" render={() => (
                        <div>                                
                            <Switch>
                                <Route path="/:uid/album/:albumId" render={() => (
                                    <div>
                                        <Home />    
                                        <AlbumDetail />
                                    </div>
                                )}/> 
                                <Route path="/:uid/sound/:soundId" render={() => (
                                    <div>
                                        <Home />
                                        <SoundDetail />
                                    </div>
                                )}/>     
                                <Route path="/:uid/album" render={() => (
                                    <div>
                                        <Home />
                                        <Album />
                                    </div>
                                )}/> 
                                <Route path="/:uid/sound" render={() => (
                                    <div>
                                        <Home />
                                        <Sound />
                                    </div>
                                )}/>   
                                <Route exact component={NoFound} />
                            </Switch>                                
                        </div>                          
                    )} />
                    <Route path="/" render={()=>(<h1>首页</h1>)} />                                                                                  
                </Switch>                           
            </div>     
        )
    }
}