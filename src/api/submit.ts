// import type { NextApiRequest, NextApiResponse } from 'next'
//
// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse
// ) {
//     try {
//         const data = req.body;
//         const id = await createItem(data);
//         res.status(200).json({ id });
//     } catch (error) {
//         // Handle any errors that might occur
//         res.status(500).json({ error: 'An error occurred while processing the data.' });
//     }
// }