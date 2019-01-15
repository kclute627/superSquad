import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ADD_CHAR } from '../actions'

class CharList extends Component {


    render(){
        console.log('this.props', this.props)
        return(
            <div>
                <h4> Characters </h4>
                <ul className = 'list-group'>
                {this.props.chars.map(cur => {
                    return(
                        <li key ={cur.id} className='list-group-item'>
                        <div className='list-item'> {cur.name} </div>
                        <div
                        className='list-item right-btn'
                        onClick = {()=>this.props.addCharById(cur.id)}>+</div>

                        </li>

                    )
                 })}
                </ul>
                
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    console.log('state', state)
    return {
        chars: state.characters,

    }
}

const mapDispatchToProps= (dispatch) =>{

    return{
        addCharById: (id)=>dispatch({type: ADD_CHAR, id, })

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CharList) ;