import { NextFunction, Request, Response } from 'express'
import { RequestHandler } from 'express-serve-static-core'

const catchAsync =
  (fn: RequestHandler) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await fn(req, res, next)
    } catch (error) {
      next(error)
    }
  }
export default catchAsync
