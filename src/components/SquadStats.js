import React, { Component } from 'react';
import { connect } from 'react-redux';







class SquadStats extends Component {
   

    render (){
        const strength = ()=>{
            let strength = 0;
            this.props.heros.forEach(cur => strength += cur.strength);
            return strength;
        }
        const speed = ()=>{
            let speed = 0;
            this.props.heros.forEach(cur => speed += cur.speed);
            return speed;
        }
        const intelligence = (a) => {
            let intelligence = 0;
            a.forEach(cur => intelligence += cur.intelligence);
            return intelligenceb 
        }

        return(
            <div>
                <h4>Squad Stats</h4>
                <ul className='list-group'>
                    <li className ="list-group-item">
                        <b>Overall Strength:</b> {strength()}
                    </li>
                    <li className ="list-group-item">
                        <b>Overall Speed:</b> {speed()}
                    </li>
                    <li className='list-group-item'>
                        <b>Overall Intelligence:</b>{intelligence(this.props.heros)}
                    </li>
                </ul>
            </div>
        )
    }
};

const mapStateToProps = (state) => {

    return {
        heros: state.heros.heros,

    }
}

const mapDispatchToProps = (dispatch) =>{

    return {

    }
}

export default connect(mapStateToProps, null)(SquadStats);

