import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe();
    this.heroService.heroes$.subscribe(next => this.heroes = next);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    let hero = new Hero();
    hero.id = this.heroes.length + 1;
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
