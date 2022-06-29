import express from 'express';
import newletter from './newLetterRoutes.js'
import user from './userRoutes.js'
import products from './productsRoutes.js'




const routes = (app) => {
    app.use(
        express.json(),
        newletter,
        user,
        products,

    )
}

export default routes