module.exports = {
    app: {
        //dobra praktyka ustaw w innym pliku, tutaj serwer
        port: 3000 // standardowy port
    },

    db: {
        host: 'localhost',
        // v host: '127.0.0.1',
        // domyslny mongoose
        port: 27017,
        // v port: '27017',
        name: "registration",
        password: ""
    }
}