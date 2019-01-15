import React, { Component } from 'react';
import CharList from './CharList';
import HeroList from './HeroList';
import SquadStats from './SquadStats';
import '../styles/index.css'





class App extends Component {


    render(){

        return(
            <div className='App'>
                 <h2>Super Squad</h2>
                 <div className='col-md-4'>
                 <CharList />
                 </div>
                 <div className='col-md-4'>
                 <HeroList />
                 </div>
                 <div className = 'col-md-4'>
                     <SquadStats/>
                 </div>
                 
            </div>
           
        )
    }
}


export default App;