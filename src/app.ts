import express from 'express';
import type { Request, Response } from 'express';

const app = express();

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.json({
        "message": "Automated Data Ingestion API"
    });
});

app.get('/health', (req:Request, res:Response)=>{
    res.json({"status":"OK"})
})


export default app;