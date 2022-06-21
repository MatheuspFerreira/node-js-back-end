import express from 'express';
import newletter from './newLetterRoutes.js'
import user from './userRoutes.js'




const routes = (app) => {
    app.use(
        express.json(),
        newletter,
        user

    )
}

export default routes