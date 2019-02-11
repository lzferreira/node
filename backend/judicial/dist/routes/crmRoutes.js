"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crmController_1 = require("./../controllers/crmController");
class Routes {
    constructor() {
        this.processoController = new crmController_1.ProcessoController();
    }
    routes(app) {
        app.route('/')
            .get((req, res) => {
            res.status(200).send({
                message: 'GET request successfulll!'
            });
        });
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
            .delete(this.processoController.deleteProcesso);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=crmRoutes.js.map