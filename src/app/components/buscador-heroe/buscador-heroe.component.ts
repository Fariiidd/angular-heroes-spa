import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-buscador-heroe',
  templateUrl: './buscador-heroe.component.html',
})
export class BuscadorHeroeComponent implements OnInit {

  heroes:any[] = [];
  valor: string;

  constructor( private activetedRoute: ActivatedRoute,
               private heroesService: HeroesService,
               private router: Router
    ) { }

  ngOnInit() {
    this.activetedRoute.params.subscribe(params => {
      this.valor = params['valor'];
      this.heroes = this.heroesService.buscarHeroes( params ['valor'])
      console.log(this.heroes);
      
    })
  }

  verHeroe(idh: number){
    this.router.navigate(['/heroe', idh])    
  }

}
