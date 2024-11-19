import { Component, inject, Input, OnInit } from '@angular/core';
import { DragonballService} from '../../services/dragonball.service';
import { Personaje } from '../../common/interface-dragonball';

@Component({
  selector: 'app-personajes-detail',
  standalone: true,
  imports: [],
  templateUrl: './personajes-detail.component.html',
  styleUrl: './personajes-detail.component.css'
})
export class PersonajesDetailComponent implements OnInit {
  @Input("id") id!: number;
  personaje!: Personaje;
  private dbService: DragonballService = inject(DragonballService);

  ngOnInit(): void {
    this.loadPersonaje();
  }

  private loadPersonaje() {
    this.dbService.getPersonaje(this.id).subscribe ({
      next: value => {
        this.personaje = value;
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
