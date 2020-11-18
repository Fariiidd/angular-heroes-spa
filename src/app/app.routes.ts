import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorHeroeComponent } from './components/buscador-heroe/buscador-heroe.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'about', component: AboutComponent},
    {path: 'heroes', component: HeroesComponent},
    {path: 'heroe/:id', component: HeroeComponent},
    {path: 'buscar/:valor', component: BuscadorHeroeComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}

