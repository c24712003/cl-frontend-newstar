import { Component, OnInit } from '@angular/core';
import { BsJs1Service } from './bs-js1.service';
import { of } from 'rxjs';
import { concatAll, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-bonus-point',
  templateUrl: './bonus-point.component.html',
  styleUrls: ['./bonus-point.component.css']
})
export class BonusPointComponent implements OnInit {

  constructor(
    private bsJs1Service: BsJs1Service,
  ) { }

  ngOnInit() {
    document.cookie = 'ck1=Hello Andy; path=/; domain=.careline.localhost';
    this.answerRxjs1();
    this.answerJs1();
    this.answerCookie1();
  }

  redirectToKeiPage() {
    location.href = `${location.protocol}//kei.careline.localhost:${location.port}/bonusPoint`
  }

  redirectToAnnPage() {
    location.href = `${location.protocol}//ann.careline.localhost:${location.port}/bonusPoint`
  }

  answerCookie1() {
    console.log(`Cookies ==> ${this.getCookie("ck1")}`);
  }

  answerRxjs1() {
    const first$ = of('first', 2000).pipe(tap(() => console.log('first')));
    const second$ = of('second', 1500).pipe(tap(() => console.log('second')));;
    const third$ = of('thrid', 800).pipe(tap(() => console.log('thrid')));;

    // 考題限制 : 執行順序需為 : first$ => second$ => third$
    // 預期的Console結果 :
    //  first
    //  second
    //  third

    // ToDo... 
    of(first$.pipe(take(1)), second$.pipe(take(1)), third$.pipe(take(1))).pipe(concatAll()).subscribe();
  }

  answerJs1() {
    let result: string = "";
    this.bsJs1Service.getSample()
      .forEachChilds((child) => {
        // ToDo : 實作你的解決方案...
        let current = child.parent["child"];
        let last_index = current.length;

        result += child.value + ' , ';

        if (current[last_index - 1].value === child.value) {
          result += child.parent['value'] + ' , ';
        }
      });

    result = result.slice(0, -2);
    // 預期alert的結果 => js 1 answer : child_1_1 , child_1_2 , parent_1 , child_2_1 ,  parent_2 ,child_3_1 , child_3_2 , child_3_3 , parent_3
    alert(`js 1 answer : ${result}`)
  }

  getCookie(cookieName) {
    let cookie = {};
    document.cookie.split(';').forEach(function (el) {
      let [key, value] = el.split('=');
      cookie[key.trim()] = value;
    })
    return cookie[cookieName];
  }
}
