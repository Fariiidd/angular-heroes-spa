import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent {

  heroe: any = {};

  constructor(

    private activateRoute: ActivatedRoute,
    private heroesSerive: HeroesService

  ) {
    this.activateRoute.params.subscribe( res => {
      this.heroe = this.heroesSerive.getHeroe(res.id);
    } )
   }

  // ngOnInit() {
  // }

}
