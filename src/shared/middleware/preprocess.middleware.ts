import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request } from 'express-serve-static-core';
import { Response } from 'express';


@Injectable()
export class PreprocessorMiddleware implements NestMiddleware {

    use(req: Request, res: Response, next: Function) {
        console.log('Audit here');
        next();
    }

}