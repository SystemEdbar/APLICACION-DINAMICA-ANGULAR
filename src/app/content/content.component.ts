import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  constructor() { }
  respuesta:any={url:"assets/image/YouTubeLogo.png",titulo:"",texto:""}
  Rep:any= [
    {url:"assets/image/YouTubeLogo.png",titulo:"Youtube",texto:"es un sitio web de origen estadounidense dedicado a compartir videos. Presenta una variedad de clips de películas, programas de televisión y vídeos musicales, así como contenidos amateur como videoblogs y YouTube Gaming. Las personas que crean contenido para esta plataforma generalmente son conocidas como youtubers."},
    {url:"assets/image/YouTubeLogo.png",titulo:"Youtube",texto:"es un sitio web de origen estadounidense dedicado a compartir videos. Presenta una variedad de clips de películas, programas de televisión y vídeos musicales, así como contenidos amateur como videoblogs y YouTube Gaming. Las personas que crean contenido para esta plataforma generalmente son conocidas como youtubers."},
    {url:"assets/image/YouTubeLogo.png",titulo:"Youtube",texto:"es un sitio web de origen estadounidense dedicado a compartir videos. Presenta una variedad de clips de películas, programas de televisión y vídeos musicales, así como contenidos amateur como videoblogs y YouTube Gaming. Las personas que crean contenido para esta plataforma generalmente son conocidas como youtubers."},
    {url:"assets/image/YouTubeLogo.png",titulo:"Youtube",texto:"es un sitio web de origen estadounidense dedicado a compartir videos. Presenta una variedad de clips de películas, programas de televisión y vídeos musicales, así como contenidos amateur como videoblogs y YouTube Gaming. Las personas que crean contenido para esta plataforma generalmente son conocidas como youtubers."},
    {url:"assets/image/YouTubeLogo.png",titulo:"Youtube",texto:"es un sitio web de origen estadounidense dedicado a compartir videos. Presenta una variedad de clips de películas, programas de televisión y vídeos musicales, así como contenidos amateur como videoblogs y YouTube Gaming. Las personas que crean contenido para esta plataforma generalmente son conocidas como youtubers."},
  ];
  ngOnInit(): void {
  }
  getRespuesta($event:any){
    this.respuesta = $event

  }
}
