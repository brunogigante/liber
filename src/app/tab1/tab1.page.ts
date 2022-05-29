import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  public dataBooks: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    fetch('./assets/data/books.json')
      .then(res => res.json())
      .then(json => {
        this.dataBooks = json;
      })
  }

  public seeBookDetail (bookkey: string) {
    let bookInfo: NavigationExtras;
    bookInfo = {
      state: {
        dadosBook: this.dataBooks[bookkey]
      }
    }
    // Utilização de Extras State (novo desde o Angular 7.2)
    this.router.navigate(['publicacao'], bookInfo);
  }

}
