import express, { Request, Response } from "express"
import { getGoogleInsights, Results } from "./helpers"
export const itemsRouter = express.Router();


itemsRouter.get('/', async (req: Request, res: Response) => {

    const sample = ["https://www.hotel-internet-marketing.com/", "https://www.bbc.co.uk/", "https://developers.google.com"]
    let baseSites: Results[] | undefined = []

    try {

        if (req.query.url) {
            let resp = await getGoogleInsights(`${req.query.url}`)
            res.send(resp)

        } else {
            for (const site of sample) {
                const info = await getGoogleInsights(site)
                baseSites.push(info)
            }
            res.send(baseSites)
        }

    } catch (error) {
        console.log('error--', error)
        res.send({ "message: ": error.message })
    }

});



