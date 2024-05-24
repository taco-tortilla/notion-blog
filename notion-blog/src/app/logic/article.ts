import {
  GetPageResponse,
  PageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { ArticleInfo } from '../types';

/**
 * Create a article list from notion db.
 * @param data Fetched data notion api "Query a database"
 * @return Return a list of type ArticleInfo
 */
export function createArticleList(data: string) {
  const origin = JSON.parse(data);
  let articleList: Array<ArticleInfo> = [];

  for (const page of origin.results) {
    const article: ArticleInfo = {
      id: page.id ?? '',
      title:
        page.properties.Title.title.length > 0
          ? page.properties.Title.title[0].plain_text
          : '',
      description:
        page.properties.Description.rich_text.length > 0
          ? page.properties.Description.rich_text[0].plain_text
          : '',
      createdAt: converDateFormat(page.properties.CreatedAt.created_time) ?? '',
      image: page.cover !== null ? page.cover.external.url : '',
    };
    articleList.push(article);
  }
  return articleList;
}

/**
 * Create a article info for notion page
 * @param data Fetched data notion api "Retrieve a page"
 * @return Return a aricle info of type ArticleInfo
 */
export function createArticleInfo(data: PageObjectResponse): ArticleInfo {
  const articleInfoData: ArticleInfo = {
    id: data.id ?? '',
    title:
      'Title' in data.properties &&
      data.properties.Title.type === 'title' &&
      data.properties.Title.title.length > 0
        ? data.properties.Title.title[0].plain_text
        : '',
    description:
      'Description' in data.properties &&
      data.properties.Description.type === 'rich_text' &&
      data.properties.Description.rich_text.length > 0
        ? data.properties.Description.rich_text[0].plain_text
        : '',
    createdAt:
      'CreatedAt' in data.properties &&
      data.properties.CreatedAt.type === 'created_time'
        ? converDateFormat(data.properties.CreatedAt.created_time)
        : '',
    image:
      data.cover && data.cover.type === 'external'
        ? data.cover.external.url
        : '',
  };
  return articleInfoData;
}

/**
 * Convert date fromats
 * @param date Date string (2024-02-12T11:45:00.000Z)
 * @return Return a only date (2024-02-12)
 */
function converDateFormat(date: string) {
  const indexOfT = date.indexOf('T');
  return date.slice(0, indexOfT);
}
