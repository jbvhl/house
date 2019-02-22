import React, {Component}  from 'react'; 
import House from './House';
import Wizard from './Wizard';
import {Link} from 'react-router-dom';

export default class Dasboard extends Component {
    constructor() {
        super()

        this.state = {
            houses: []
        } 
    }

    render() {
        const mappedHouses = this.state.houses.map(house => {});

        return (
            <div>
                Dashboard
                <House />

                <Link to={'/wizard'}>
                <button onClick={() => Wizard}>Add New Property</button>
                </Link> 
            </div>
        )
    }
}