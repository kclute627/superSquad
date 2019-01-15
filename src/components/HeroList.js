import React, { Component } from 'react';
import { connect } from 'react-redux';
import { REMOVE_CHAR } from '../actions';




class HeroList extends Component{


    render(){

        return(
            <div>
                <h4>Your Hero Squad</h4>
                <ul className = 'list-group'>
                    {this.props.heroList.map(cur=>{
                        return(
                            <li 
                            key={cur.id}
                            className='list-group-item'>
                            <div className="list-item">
                            {cur.name}
                            </div>
                            <div 
                            className='list-item right-btn'
                            onClick = {()=>this.props.onRemove(cur.id)}>
                                x
                            </div>
                            </li>
                        )
                    })}
                </ul>
            </div>

        )
    }
}


const mapPropsToState = (state) => {

    return{
        heroList: state.heros.heros,
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        onRemove: (id)=>dispatch({type: REMOVE_CHAR, id,}) 
    }
}


export default connect(mapPropsToState, mapDispatchToProps)(HeroList);