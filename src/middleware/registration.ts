import httpStatus from 'http-status';
import { Request, Response, NextFunction } from 'express';

import coordinators from '../coordinators';

async function handleNewEmail (req: Request, res: Response, next: NextFunction) {
  try {
    await coordinators.registration.newEmailSignup();
  } catch (error) {
    return next(error);
  }

  return res.sendStatus(httpStatus.CREATED);
}

export default {
  handleNewEmail,
};
