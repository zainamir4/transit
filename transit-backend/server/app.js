import express from 'express';
import dbConfig from './config/db';
import middlewareConfig from './config/middlewares';
import { TransitRoutes } from './modules/app';

const app = express();

// DATABASE
dbConfig();

//Middleware
middlewareConfig(app);

app.use('/api', [TransitRoutes]);

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
    if (err) {
        console.error(err);
    } else {
        console.log(`App listen to port: ${PORT}`);
    }
});
