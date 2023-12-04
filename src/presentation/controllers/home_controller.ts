import { type Request, type Response} from 'express';

export class HomeController {
  async handle (req: Request, res: Response): Promise<Response> {
    return res.status(200).json({ message: 'Server is running' })
  }
}