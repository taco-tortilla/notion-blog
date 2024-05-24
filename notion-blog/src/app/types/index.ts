/**
 * Type of article
 * @property id: Page id of notion
 * @property image: URL of the cover image on the notion page
 */
export type ArticleInfo = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  image: string;
};

/**
 * Type of fetch result
 * @property status: success or false
 * @property result: fetched data or error message
 */
export type FetchResult =
  | {
      status: true;
      result: ArticleInfo;
    }
  | { status: false; result: string };
