import { mapToSearchResponse } from './../../../utils/MeliMapper';
import { MeliSearchResponse } from '../../../models/responses/MeliResponse';
import type { NextApiRequest, NextApiResponse } from 'next'
import { searchItemsByQuery } from '../../../services/MeliService'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { q } = req.query
    if(!q) return res.status(400).json({message: "q Param is required"})
    try {
        const data: MeliSearchResponse = await searchItemsByQuery(q as string)
        res.status(200).json(mapToSearchResponse(data));
    } catch(error) {
        console.error('Unexpected error: ', error)
        res.status(500).json({message: error})
    }
}
