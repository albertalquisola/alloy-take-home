import axios from 'axios';
import { WebClient } from '@slack/web-api';

const slackClient = new WebClient(process.env.SLACK_ACCESS_TOKEN);

async function postToChannel (text: string, channel?: string) {
  if (channel === undefined) {
    channel = '#alloy-test';
  }

  try {
    await slackClient.chat.postMessage({ channel, text });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default {
  postToChannel,
};
