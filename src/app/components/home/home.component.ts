import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {HeroService} from '../../services/hero/hero.service';
import config from './../../../../config.json';
import {TranslateService} from '@ngx-translate/core';
import {ConfigService} from '../../services/config/config.service';
import {IHero} from '../../interfaces/IConfig';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  hero: IHero;

  constructor(private configService: ConfigService,
              private heroService: HeroService,
              private translater: TranslateService) {
    this.hero = configService.getHero();
  }

  ngOnInit(): void {
    this.hero.title = this.translater.instant(this.configService.config.hero.title);
    this.hero.subtitle = this.translater.instant(this.configService.config.hero.subtitle);
    this.setUpHero();
  }

  private setUpHero(){
    this.heroService.setUpHero(this.hero)
  }
}
