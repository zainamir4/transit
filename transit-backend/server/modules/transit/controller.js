// The Rest endpoints go here !!

import Tranist from './model';

export const createTransit = async (req, res) => {
    const { stop } = req.body;
    const newTransit = new Transit({ stop });

    try {
        return res.status(201).json({ transit: await newTransit.save() })
    } catch (e) {
        return res.status(e.status).json({ error: true, message: 'Error with creating a Transit'})
    }
}
