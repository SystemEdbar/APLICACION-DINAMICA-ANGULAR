import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent{
  respuesta:any= {url:"",titulo:"",texto:""}
  @Input() datos :any= [];
  @Output() resultEvent = new EventEmitter<any>();
  constructor (){
    this.datos =[]
  }

  sendRespuesta(item:any){
    this.respuesta.url = item.url
    this.respuesta.texto = item.texto
    this.respuesta.titulo = item.titulo
    this.resultEvent.emit(this.respuesta)
  }
}
