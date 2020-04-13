import { Application } from 'express';

import mw from '../middleware';

export default function routes (app: Application) {
  app.post('/emails', mw.registration.handleNewEmail);
}
