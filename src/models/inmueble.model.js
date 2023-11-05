const { Schema, model } = require('mongoose');

const inmuebleSchema = new Schema({
    piso: Number,
    letra: String,
    extension: Number, 
    numeroHabitaciones: Number,
    alquilado: Boolean,
    nombrePropietario: String,
    emailContacto: String
}, {
    versionKey: false,
    timestamps: true, 
//createdAt, updatedAt
});



module.exports = model('inmueble', inmuebleSchema); 