module.exports = {

    getHouses: (req, res) => {
        const db = req.app.get('db');

        db.getHouses().then(houses => {
            res.status(200).send(houses)
        });
    },

    createHouse: (req, res) => {
        const db = req.app.get('db');
        const {name, address, city, state, zipcode} = req.body;

        db.createHouse(name, address, city, state, zipcode).then(house => {
            res.status(200).send(house)
        });
    },

    deleteHouse: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;

        db.deleteHouse(id).then(() => {
            res.sendStatus(200)
        });
    }
}