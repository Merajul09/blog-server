import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
const app: Application = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/api', router);

// global error handler
app.use(globalErrorHandler);

// not found
app.use(notFound);

app.get('/', (req: Request, res: Response) => {
  res.send('Blog server is running');
});
export default app;
