import express, {Request, Response, NextFunction} from 'express'
import { userRouter } from './users/users.js'

const port = 8000;
const app = express();

app.use( (req, res, next) => {
    console.log('Время', Date.now());
    next();
});

app.get('/hello', (req, res) => {
    throw new Error('error!!!');
});

app.use('/users', userRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err.message);
    res.status(401).send(err.message);
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
})
// app.all('/hello', (req, res, next)=> {
//     res.send('all!')
//     next();
// })


// app.get('/hello', (req, res)=> {
//     res.send('Привет!')
    
// })



// app.listen(port, () => {
//     console.log(`Сервер запущен на http://localhost:${port}`);
// })