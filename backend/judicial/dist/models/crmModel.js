"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.ProcessoSchema = new Schema({
    numeroProcesso: {
        type: String,
        required: 'Número do processo requerido!'
    },
    reclamante: {
        type: String,
        required: 'Nome do reclamante requerido!'
    },
    company: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
//# sourceMappingURL=crmModel.js.map