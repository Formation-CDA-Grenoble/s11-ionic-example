import { Component } from '@angular/core';
import Article from '../../models/Article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  articles: Article[];

  constructor(private articleService: ArticleService) {
    articleService.getArticles().subscribe(response =>
      this.articles = response.data.allArticles.map(
        article => ({
          title: article.title,
          content: article.content,
          createdAt: new Date(article.createdAt),
          category: article.category,
          cover: article.cover,
        })
      )
    );
  }

}
