import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import Article from '../models/Article';

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

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

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
