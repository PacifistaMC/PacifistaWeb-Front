import {Component, Input} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ShopArticleModalComponent} from "../shop-article-modal/shop-article-modal.component";
import {faCartArrowDown} from "@fortawesome/free-solid-svg-icons";
import {PacifistaShopArticleDTO} from "@funixproductions/funixproductions-requests";

@Component({
  selector: 'app-shop-article',
  templateUrl: './shop-article.component.html',
  styleUrls: ['./shop-article.component.scss']
})
export class ShopArticleComponent {

  protected readonly faCartDown = faCartArrowDown;

  constructor(private modalService: NgbModal) {
  }

  @Input() article: PacifistaShopArticleDTO = new PacifistaShopArticleDTO();

  openModal(): void {
    const modalRef = this.modalService.open(ShopArticleModalComponent, { centered: true});
    modalRef.componentInstance.article = this.article;
  }

}
