import { ArticleInfo } from '../types';

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
      createdAt: trimTime(page.properties.CreatedAt.created_time) ?? '',
      image: page.cover !== null ? page.cover.external.url : '',
    };
    articleList.push(article);
  }
  return articleList;
}

function trimTime(date: string) {
  const indexOfT = date.indexOf('T');
  return date.slice(0, indexOfT);
}
