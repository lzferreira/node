import { ProcessoController } from './../controllers/crmController';
import { Request, Response } from "express";

export class Routes {
    
    public processoController: ProcessoController = new ProcessoController();
    
    public routes(app): void {
        
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfulll!'
                })
            })

        // Contact 
        app.route('/processo')
            // GET endpoint 
            .get(this.processoController.getProcessos)
            // POST endpoint
            .post(this.processoController.addNewProcesso);

        // Contact detail
        app.route('/processo/:processoId')
            // get specific contact
            .get(this.processoController.getProcessoWithID)
            .put(this.processoController.updateProcesso)
            .delete(this.processoController.deleteProcesso)
    }
}