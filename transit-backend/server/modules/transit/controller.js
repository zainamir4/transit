// The Rest endpoints go here !!

import Transit from './model';

export const createTransit = async (req, res) => {
    const { stopnum, location } = req.body;
    const newTransit = new Transit({ stopnum, location });

    try {
        return res.status(201).json({ transit: await newTransit.save() })
    } catch (e) {
        return res.status(500).json({ error: true, message: 'Error with creating a Transit'})
    }
}

export const getAllTransits = async (req, res) => {
    try {
        return res.status(200).json({ transit: await Transit.find({} )});
    } catch (e) {
        return res.status(500).json({ error: true, message: 'Error with fetching all transit'})
    }
}
