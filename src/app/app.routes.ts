import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { PersonajesDetailComponent } from './components/personajes-detail/personajes-detail.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    },
    {
        path: 'navbar',
        component: NavbarComponent,
    },
    {
        path: 'banner',
        component: BannerComponent,
    },
    {
        path: 'inicio',
        component: InicioComponent,
    },
    {
        path: 'personajes',
        component: PersonajesComponent,
    },
    {
        path: 'personajes-detail/:id',
        component: PersonajesDetailComponent,
    },
    {
        path: 'footer',
        component: FooterComponent,
    },
    {
        path: '**',
        component: ErrorPageComponent,
        pathMatch: 'full'
    },
];
