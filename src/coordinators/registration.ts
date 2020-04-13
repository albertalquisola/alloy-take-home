import adapters from '../adapters';

async function newEmailSignup () {
  try {
    const newsBullets = await adapters.wiki.scrapeWikiNews();
    await adapters.slack.postToChannel(newsBullets);
  } catch (error) {
    throw error;
  }
}

export default {
  newEmailSignup,
};
