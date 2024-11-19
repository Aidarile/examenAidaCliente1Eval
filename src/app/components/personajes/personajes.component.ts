import { InterfaceDragonball } from './../../common/interface-dragonball';
import { Component, inject } from '@angular/core';
import { DragonballService } from '../../services/dragonball.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [NgbModule, RouterLink],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent {

  private dragonballService: DragonballService = inject(DragonballService);
  apiData!: InterfaceDragonball;
  currentPage: number = 1;

  constructor() {
    this.loadPersonajes();
  }

  protected loadPersonajes() {
    this.dragonballService.getPersonajes(this.currentPage).subscribe({
      next: (value) => {
        this.apiData = value;
      },
      error: (err) => {
        alert(err.message);
      },
      complete: () => {
        console.log("Personajes cargados!");
      }
    })
  }

}
