import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
  standalone: true
})
export class FiltroPipe implements PipeTransform {

  transform( arreglo: any[], texto: string = ''): any[] {
    console.log('(Pipe|Filtro)', arreglo);
    if (!texto || texto.trim() === '') {
      return arreglo;
    }
    return arreglo.filter(item =>
      item.title.toLowerCase().includes(texto.toLowerCase())
    );
  }

}
