const verifytoken = (req, res) => {
    res.send("Hola verifytoken");
}

const receivedmessage = (req, res) => {
    res.send("Hola received");
}

module.exports = {
    verifytoken,
    receivedmessage
}