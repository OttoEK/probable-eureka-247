import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {RedditData} from './redditData';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RedditService {
  constructor(private http: Http){}
  getSubredditPosts(subreddit: string): Promise<RedditData> {
    return this.http.get('https://www.reddit.com/r/' + subreddit + '.json')
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
