"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Routes {
    routes(app) {
        app.route('/')
            .get((req, res) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            });
        });
        // Contact 
        app.route('/processo')
            // GET endpoint 
            .get((req, res) => {
            // Get all contacts            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            });
        })
            // POST endpoint
            .post((req, res) => {
            // Create new contact         
            res.status(200).send({
                message: 'POST request successfulll!!!!'
            });
        });
        // Contact detail
        app.route('/processo/:processoId')
            // get specific contact
            .get((req, res) => {
            // Get a single contact detail            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            });
        })
            .put((req, res) => {
            // Update a contact           
            res.status(200).send({
                message: 'PUT request successfulll!!!!'
            });
        })
            .delete((req, res) => {
            // Delete a contact     
            res.status(200).send({
                message: 'DELETE request successfulll!!!!'
            });
        });
    }
}
exports.Routes = Routes;
//# sourceMappingURL=crmRoutes.js.map