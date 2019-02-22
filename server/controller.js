module.exports = {

    getHouses: (req, res) => {
        const db = req.app.get('db');

        db.getHouses().then(houses => {
            res.send(200).send(houses)
        });
    }
}