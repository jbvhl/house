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

        this.deleteHousee = this.deleteHouse.bind(this)
    }

    componentDidMount() {
        axios.get(`/api/houses`).then(res => {
            this.setState({
                houses: res.data
            });
        });
    }

    deleteHouse(id) {

        axios.delete(`/api/house/${id}`).then(res => {
            console.log(res)
        });
    }

    render() {
        const mappedHouses = this.state.houses.map(house => {
            return (
                <House 
                id={house.id}
                name={house.name}
                address={house.address}
                city={house.city}
                state={house.state}
                zipcode={house.zipcode}
                deleteHouse={this.deleteHouse}
                />
            )
        });

        return (
            <div>
                Dashboard

                <Link to={'/wizard'}>
                <button onClick={() => Wizard}>Add New Property</button>
                </Link> 
                {mappedHouses}
            </div>
        )
    }
}