"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const crmModel_1 = require("../models/crmModel");
const Processo = mongoose.model('Processo', crmModel_1.ProcessoSchema);
class ProcessoController {
    addNewProcesso(req, res) {
        let newProcesso = new Processo(req.body);
        newProcesso.save((err, processo) => {
            if (err) {
                res.send(err);
            }
            res.json(processo);
        });
    }
    getProcessos(req, res) {
        Processo.find({}, (err, processo) => {
            if (err) {
                res.send(err);
            }
            res.json(processo);
        });
    }
    getProcessoWithID(req, res) {
        Processo.findById(req.params.processoId, (err, processo) => {
            if (err) {
                res.send(err);
            }
            res.json(processo);
        });
    }
    updateProcesso(req, res) {
        Processo.findOneAndUpdate({ _id: req.params.processoId }, req.body, { new: true }, (err, processo) => {
            if (err) {
                res.send(err);
            }
            res.json(processo);
        });
    }
    deleteProcesso(req, res) {
        Processo.remove({ _id: req.params.processoId }, (err, processo) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted contact!' });
        });
    }
}
exports.ProcessoController = ProcessoController;
//# sourceMappingURL=crmController.js.map