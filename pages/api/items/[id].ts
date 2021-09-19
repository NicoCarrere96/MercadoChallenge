import { findItemById, findItemDescriptionById } from './../../../services/MeliService';
import type { NextApiRequest, NextApiResponse } from 'next'
import { mapToItemResponse } from '../../../utils/MeliMapper';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  try{
    const item = await findItemById(id as string)
    const description = await findItemDescriptionById(id as string)
    res.status(200).json(mapToItemResponse(item, description))
  } catch(error){
    console.error('Unexpected error: ', error)
    res.status(500).json({message: error})
  }
}

