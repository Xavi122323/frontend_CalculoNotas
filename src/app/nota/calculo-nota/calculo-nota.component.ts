import { Component, OnInit } from '@angular/core';
import { NotaService } from 'src/app/services/nota.service';

interface Progreso {
  title: string;
  start: string;
  end: string;
}

@Component({
  selector: 'app-calculo-nota',
  templateUrl: './calculo-nota.component.html',
  styleUrls: ['./calculo-nota.component.scss']
})
export class CalculoNotaComponent {

  progresos: Progreso[] = [
    { title: 'Progreso 1', start: '', end: '' },
    { title: 'Progreso 2', start: '', end: '' },
    { title: 'Progreso 3', start: '', end: '' }
  ];
  results: any[] = [];
  notas: any[] = [];

  constructor(private notaService: NotaService) {}

  ngOnInit() {
    this.fetchNotas();
  }

  fetchNotas() {
    // Assuming the notaService has a method to get all notas
    this.notaService.getNotas().subscribe(
      data => {
        this.notas = data;
      },
      error => {
        console.error('Error fetching notas:', error);
      }
    );
  }

  onSubmit(progresoIndex: number) {
    const progresoData = {
      progreso1_start: this.progresos[0].start,
      progreso1_end: this.progresos[0].end,
      progreso2_start: this.progresos[1].start,
      progreso2_end: this.progresos[1].end,
      progreso3_start: this.progresos[2].start,
      progreso3_end: this.progresos[2].end,
    };
    console.log(progresoData);

    this.notaService.calcularProgresos(progresoData).subscribe(
      response => {
        console.log('Grades calculated:', response);
        this.results = response;
      },
      error => {
        console.error('Error calculating grades:', error);
      }
    );
  }

}
