import cron from 'node-cron';

import coordinators from '../coordinators';

export default function () {
  cron.schedule('00 00 9 * * * *', coordinators.registration.newEmailSignup);
}
