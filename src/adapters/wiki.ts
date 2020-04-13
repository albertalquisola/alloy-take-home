import _ from 'lodash';
import axios from 'axios';
import cheerio from 'cheerio';
import httpStatus from 'http-status';

async function scrapeWikiNews () {
  let response;

  try {
    response = await axios.get('https://en.wikipedia.org/wiki/Main_Page');
  } catch (error) {
    console.error('error scraping wiki page');
    throw error;
  }

  if (response.status !== httpStatus.OK) throw new Error('unable to scrape wiki page');

  return parseHtml(response.data);
}

/* helper funcs */

function parseHtml (html: string): string {
  let $: CheerioStatic = cheerio.load(html);
  let newsBullets: string[] = [];

  $('#mp-itn > ul > li').each((idx: Number, el: CheerioElement) => {
    let bulletPoint = '';

    el.children.forEach((node: CheerioElement) => {
      switch (node.type) {
        case 'text': {
          bulletPoint += node.data;
          break;
        }
        case 'tag': {
          let value = parseTag(node);

          if (value !== null) {
            bulletPoint += value;
          }

          break;
        }
      }
    });

    newsBullets.push(bulletPoint);
  });

  return newsBullets.join('\n');
}

function parseTag (node: CheerioElement): string | null {
  let data: string | null = null;
  let queue: CheerioElement[] = [node];

  while (queue.length) {
    let currentNode = queue.shift();

    if (currentNode?.type === 'text' && currentNode.data !== undefined) {
      data = currentNode.data;
      break;
    }

    if (currentNode?.childNodes !== undefined) {
      queue.push(...currentNode?.childNodes);
    }
  }

  if (data === null) {
    console.error('parsing wiki tag failed!');
  }

  return data;
}

export default {
  scrapeWikiNews,
};
