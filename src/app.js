
import express from 'express';
import morgan from "morgan";
import cors from "cors";


import TaskRoutes from './routes/task-routes';

const app = express();


//settings
app.set('port', process.env.PORT || 3000);

//middlewares
const corsoptions ={};
app.use(cors({corsoptions}));
app.use(morgan('dev'));
app.use(express.json())
//para que entienda tmbien las peticiones de formularios html usamos
app.use(express.urlencoded({ extended: false }));


//routes
app.get('/', (req, res) => {

    res.json({ message: 'wellcome to my aplication', });
});

app.use('/api/tasks', TaskRoutes);

export default app;
