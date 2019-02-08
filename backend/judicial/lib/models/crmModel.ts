import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ProcessoSchema = new Schema({
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