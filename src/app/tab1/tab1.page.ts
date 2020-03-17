import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Article from '../../models/Article';
import { Observable } from 'rxjs';

const query = `
query MyQuery {
  allArticles {
    title
    createdAt
    content
    cover {
      url
    }
    category {
      name
    }
  }
}
`;

interface AllArticlesRequest {
  data: {
    allArticles: Article[],
  }
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  articles: Article[];

  constructor(private http: HttpClient) {
    this.getArticles().subscribe(response =>
      this.articles = response.data.allArticles
    );
  }

  getArticles(): Observable<AllArticlesRequest> {
    return this.http.post<AllArticlesRequest>(
      'https://graphql.datocms.com/',
      { query },
      {
        headers: {
          Authorization: "Bearer 6138772c24e2df7d8971d1adeed11e",
        }
      }
    );
  }

}
