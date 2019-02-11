import * as mongoose from 'mongoose';
import { ProcessoSchema } from '../models/crmModel';
import { Request, Response } from 'express';

const Processo = mongoose.model('Processo', ProcessoSchema);

export class ProcessoController {

    public addNewProcesso(req: Request, res: Response) {
        let newProcesso = new Processo(req.body);

        newProcesso.save((err, processo) => {
            if (err) {
                res.send(err);
            }
            res.json(processo);
        });
    }

    public getProcessos(req: Request, res: Response) {
        Processo.find({}, (err, processo) => {
            if (err) {
                res.send(err);
            }
            res.json(processo);
        });
    }

    public getProcessoWithID(req: Request, res: Response) {
        Processo.findById(req.params.processoId, (err, processo) => {
            if (err) {
                res.send(err);
            }
            res.json(processo);
        });
    }

    public updateProcesso(req: Request, res: Response) {
        Processo.findOneAndUpdate({ _id: req.params.processoId }, req.body, { new: true }, (err, processo) => {
            if (err) {
                res.send(err);
            }
            res.json(processo);
        });
    }

    public deleteProcesso (req: Request, res: Response) {           
        Processo.remove({ _id: req.params.processoId }, (err, processo) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted contact!'});
        });
    }

}
