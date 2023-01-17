import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit{ 
  miporfolio:any;
  constructor(private datosporfolio:PorfolioService){}

  ngOninit():void{
    this.datosporfolio.obtenerDatos().subscribe(data=>{
      console.log(data);
      this.miporfolio=data; 
    });

  }

}
