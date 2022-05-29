import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-publicacao',
  templateUrl: './publicacao.page.html',
  styleUrls: ['./publicacao.page.scss'],
})
export class PublicacaoPage implements OnInit {
  public bookInfo: any;
  public comments: any;

  constructor(private router: Router, private activeRoute: ActivatedRoute) {
    this.activeRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.bookInfo = this.router.getCurrentNavigation().extras.state.dadosBook;
        console.log(this.bookInfo);
      }
    })
  }
  ngOnInit(): void {
    fetch('./assets/data/comments.json')
      .then(res => res.json())
      .then(json => {
        this.comments = json;
      })
  }

}
