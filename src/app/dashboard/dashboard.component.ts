import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Hero } from '../models/hero';
import { HeroService } from '../services/index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  hero_sub: Subscription;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe();
    this.hero_sub = this.heroService.heroes$.subscribe(next => {
      this.heroes = next.slice(0, 4);
    });
  }
}
