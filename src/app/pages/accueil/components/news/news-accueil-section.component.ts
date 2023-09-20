import {AfterViewInit, Component, Inject, PLATFORM_ID} from '@angular/core';
import {
  PacifistaNewsDTO,
  PacifistaNewsService,
  PageOption,
  QueryBuilder
} from "@funixproductions/funixproductions-requests";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'news-section',
  templateUrl: './news-accueil-section.component.html',
  styleUrls: ['./news-accueil-section.component.scss']
})
export class NewsAccueilSectionComponent implements AfterViewInit {

  private readonly newsService: PacifistaNewsService;

  newsList: PacifistaNewsDTO[] = [];
  totalNews: number = 0;

  constructor(@Inject(PLATFORM_ID) private platfomId: Object,
              httpClient: HttpClient) {
    this.newsService = new PacifistaNewsService(httpClient, environment.production);
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platfomId)) return;

    const pageOption = new PageOption();
    pageOption.elemsPerPage = 3;
    pageOption.sort = 'createdAt:desc';

    this.newsService.find(pageOption, new QueryBuilder()).subscribe(newsList => {
      this.newsList = newsList.content;
      this.totalNews = newsList.totalElementsDatabase;
    });
  }

}
