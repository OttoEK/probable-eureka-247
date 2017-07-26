import {Component, OnInit} from '@angular/core';
import {RedditService} from './reddit.service';
import {RedditData} from './redditData';

@Component({
  selector: 'reddit-component',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.css'],
})
export class RedditComponent implements OnInit{
  resultado: RedditData;
  subreddit: '';

  constructor(private redditService: RedditService) { }

  ngOnInit(){
  }

  getSubrPosts(subreddit: string){
    this.redditService.getSubredditPosts(subreddit).then(r => this.resultado = r);
    //TODO: next one
    //https://www.reddit.com/r/cardsagainsthumanity.json?count=25&after=t3_6nxrfg
  }


}
