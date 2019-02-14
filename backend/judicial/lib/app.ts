import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import { Routes } from "./routes/crmRoutes";
import * as mongoose from "mongoose";

class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();
    public mongoUrl: string = 'mongodb://jud:judicial1@ds127655.mlab.com:27655/judicial';

    constructor() {
        this.app = express();
        this.config();   
        this.routePrv.routes(this.app);  
        this.mongoSetup();           
    }

    private mongoSetup(): void{
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);    
    }

    private config(): void{
        var originsWhitelist = [
            'http://localhost:4200'
          ];

          var corsOptions = {
            origin: function(origin, callback){
                  var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
                  callback(null, isWhitelisted);
            },
            credentials:true
          }
        
        this.app.use(cors(corsOptions));

        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

}

export default new App().app;