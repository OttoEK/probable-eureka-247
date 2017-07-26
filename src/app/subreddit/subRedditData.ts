import {PostItem} from '../postitem/postitem';

export interface SubRedditData {
  modhash: string;
  children: PostItem[];
}
