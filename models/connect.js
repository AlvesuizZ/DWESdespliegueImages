const mongoose = require('mongoose');

function connect(){
    mongoose.connect('mongodb+srv://alvesuiz:password1234@clusterimages.amypc.mongodb.net/?retryWrites=true&w=majority&appName=clusterImages')
    .then(() => console.log('Conectado a MongoDB'))
    .catch(error => console.error('Error conectando a MongoDB:', error));
}

module.exports = connect;