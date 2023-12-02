const express = require('express');
const cookieParser = require('cookie-parser');

import { Request, Response, NextFunction } from 'express-serve-static-core';


const app = express();
app.use(cookieParser()); // Use the cookie-parser middleware

const cookieController = {
    setCookie (req: Request, res: Response, next: NextFunction) {
        res.cookie('id', res.locals.user.password, { expires: new Date(Date.now() + (1200*1000)), httpOnly: true })
        res.cookie('user', res.locals.user.username, { expires: new Date(Date.now() + (1200*1000)), httpOnly: true })
        return next();
    },
    verifyCookie(req: Request, res: Response, next: NextFunction){
        return next()
    }

}


module.exports = cookieController;