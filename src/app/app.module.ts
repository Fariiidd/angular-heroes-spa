import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
//Routes
import { ROUTES  } from '../app/app.routes';

//Service
import { HeroesService } from './services/heroes.service';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorHeroeComponent } from './components/buscador-heroe/buscador-heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscadorHeroeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(ROUTES, {scrollPositionRestoration:'enabled', onSameUrlNavigation: 'reload', useHash: true }),
  ],
  providers: [
    HeroesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
