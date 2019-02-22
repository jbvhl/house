import React, {Component}  from 'react'; 
import Dashboard from './Dashboard'
import {Link} from 'react-router-dom';

export default class Wizard extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''   
        } 
    }

    handleName(val) {
        this.setState({
            name: val
        })
    };

    handleAddress(val) {
        this.setState({
            address: val
        })
    };

    handleCity(val) {
        this.setState({
            city: val
        })
    };

    handleState(val) {
        this.setState({
            state: val
        })
    };

    handleZipcode(val) {
        this.setState({
            zipcode: val
        })
    };



    render() {
        return (
            <div>
                Wizard
                <Link to={'/'}>
                <button onClick={() => Dashboard}>Cancel</button>
                </Link>
                <input 
                type='text'
                onChange={(e) => this.handleName(e.target.value)}
                value={this.state.name}/>
                
                <input 
                type='text'
                onChange={(e) => this.handleAddress(e.target.value)}
                value={this.state.address}/>
                
                <input 
                type='text'
                onChange={(e) => this.handleCity(e.target.value)}
                value={this.state.city}/>
                
                <input 
                type='text'
                onChange={(e) => this.handleState(e.target.value)}
                value={this.state.state}/>
                
                <input 
                type='text'
                onChange={(e) => this.handleZipcode(e.target.value)}
                value={this.state.zipcode}/>
            </div>
        )
    }
}