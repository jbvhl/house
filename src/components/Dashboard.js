import React, {Component}  from 'react'; 
import House from './House';
import Wizard from './Wizard';
import {Link} from 'react-router-dom';
import axios from 'axios'

export default class Dasboard extends Component {
    constructor() {
        super()

        this.state = {
            houses: []
        } 
    }

    componentDidMount() {
        axios.get(`/api/houses`).then(res => {
            this.setState({
                houses: res.data
            });
        });
    }

    render() {
        const mappedHouses = this.state.houses.map(house => house);

        return (
            <div>
                Dashboard
                <House />

                <Link to={'/wizard'}>
                <button onClick={() => Wizard}>Add New Property</button>
                </Link> 
                {mappedHouses}
            </div>
        )
    }
}