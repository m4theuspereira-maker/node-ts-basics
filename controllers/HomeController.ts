import { Request, Response } from 'express'

class Home {
  public async home (req: Request, res: Response): Promise<Response> {
    return res.send('Bem vindo ao mundo da AIDS')
  }
}

export default new Home()
