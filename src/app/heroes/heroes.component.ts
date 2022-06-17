import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ignoreElements } from 'rxjs/operators';

import { Hero } from '../models/hero';
import { HeroService } from '../services/index';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnDestroy {
  heroes: Hero[];
  subscription?: Subscription;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  ngOnDestroy(): void {
    this.subscription!.unsubscribe();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe();
    this.subscription = this.heroService.heroes$.subscribe(next => this.heroes = next);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    let hero = new Hero();
    let length = this.heroes.length;
    hero.id = length !== 0 ? this.heroes[this.heroes.length - 1].id + 1 : length + 1;
    hero.name = name;

    this.heroService.addHero(hero)
      .subscribe(hero => {
        this.heroes.push(hero);
        this.heroService.heroes$.next(this.heroes);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
    this.heroService.heroes$.next(this.heroes);
  }
}
