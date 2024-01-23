import { getAuth } from '@/src/lib/adminFirebase'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function create(req: NextApiRequest, res: NextApiResponse) {
    if (req.body.email && req.body.password) {
        try {
            const response = await getAuth()
                .createUser({
                    email: req.body.email,
                    password: req.body.password,
                    displayName:req.body.nameEnterprise
                })
            return res.json({ status: 200, response })

        } catch (err) {
            return res.json({ status: 500, err })
        }
    } else {
        return res.json({ status: 500, err:{message:"Credenciais invalidas"}})
    }

}