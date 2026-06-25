import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
  standalone: true
})
export class FiltroPipe implements PipeTransform {

  transform( arreglo: any[],
             texto: string = '',
             columna: string = 'title'
            ): any[] {
    console.log('(Pipe|Filtro)', arreglo);
    if (!texto || texto.trim() === '') {
      return arreglo;
    }
    return arreglo.filter(item =>
      item[columna].toLowerCase().includes(texto.toLowerCase())
    );
  }

}
