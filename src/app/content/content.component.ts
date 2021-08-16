import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  constructor() { }
  respuesta:any={url:"assets/image/YouTubeLogo.png",titulo:"Youtube", visita:"12.668 visualizaciones  |  15 ago 2021",
    texto:"Es vidio de un sitio web de origen estadounidense dedicado a compartir videos. Presenta una variedad de clips" +
      " de películas, programas de televisión y vídeos musicales, así como contenidos amateur como videoblogs y YouTube Gaming." +
      " Las personas que crean contenido para esta plataforma generalmente son conocidas como youtubers."}

  Rep:any= [
    {url:"assets/image/imagen1.PNG",titulo:"The Last of Us: La Historia en 1 Video", visita:"6.337.427 visualizaciones  |  14 jun 2020",
      texto:"Es un videojuego de acción-aventura y horror de supervivencia desarrollado por la compañía " +
        "estadounidense Naughty Dog y distribuido por Sony Computer Entertainment para la consola PlayStation 3" +
        " en 2013. La trama describe las vivencias de Joel y Ellie, un par de supervivientes de una pandemia en " +
        "Estados Unidos que provoca la mutación de los seres humanos en criaturas caníbales."},

    {url:"assets/image/imagen2.PNG",titulo:"Resident Evil Village : La Historia en 1 Video", visita:"765.080 visualizaciones  |  13 ago 2021",
      texto:"Es un videojuego perteneciente al género de horror de supervivencia desarrollado y publicado por Capcom." +
        " la novena entrega de la serie principal de Resident Evil y secuela narrativa de Resident Evil 7: Biohazard" +
        " del año 2017, el videojuego sigue a Ethan Winters, quien, después de un fatídico encuentro con Chris Redfield," +
        " se encuentra en un pueblo lleno de criaturas mutantes en un esfuerzo por encontrar a su hija secuestrada."},

    {url:"assets/image/imagen3.PNG",titulo:"The Suicide Squad EN 15 MINUTOS", visita:"891.958 visualizaciones  |  Fecha de estreno: 13 ago 2021",
      texto:"Es una película estadounidense de superhéroes de 2016 de DC Comics. La tercera entrega del Universo extendido" +
        " de DC fue escrita y dirigida por David Ayer y protagonizada por un elenco que incluye a Will Smith, Jared Leto," +
        " Margot Robbie, Joel Kinnaman, Viola Davis, Jai Courtney, Jay Hernández, Adewale Akinnuoye-Agbaje, Scott Eastwood," +
        " Ike Barinholtz, Karen Fukuhara y Cara Delevingne. En la película, una agencia secreta del gobierno dirigida por " +
        "Amanda Waller recluta supervillanos encarcelados para ejecutar misiones peligrosas de operaciones negras y salvar " +
        "al mundo de una poderosa amenaza a cambio de sentencias reducidas."},

    {url:"assets/image/imagen4.PNG",titulo:"Análisis, Referencias y Explicación (Futurama)", visita:"70.104 visualizaciones  |  14 ago 2021",
      texto:"La serie sigue las aventuras de un repartidor de pizza, Philip Fry, quien el 31 de diciembre de 1999 tropieza " +
        "accidentalmente y cae por casualidad en una cápsula criogénica y despierta mil años después. En Estados Unidos la serie " +
        "comenzó a emitirse por Fox desde el 28 de marzo de 1999 hasta su cancelación el 10 de agosto de 2003. Posteriormente, fue " +
        "renovada por Comedy Central y se emitió en ese canal desde 2008 hasta 2013, cuando se emitió el último episodio, titulado."},

    {url:"assets/image/imagen5.PNG",titulo:"Rick y Morty Análisis, Curiosidades y Explicación", visita:"451.606 visualizaciones  |  12 ago 2021",
      texto:"Es una serie de televisión estadounidense de animación para adultos creada por Justin Roiland y Dan Harmon en 2013 para " +
        "Adult Swim. La serie sigue las desventuras de un científico, Rick, y su fácilmente influenciable nieto, Morty, quienes pasan " +
        "el tiempo entre la vida doméstica y los viajes espaciales, temporales e intergalácticos. Roiland es el encargado de darle " +
        "voz a Rick y a Morty, la serie también incluye las voces de Chris Parnell, Spencer Grammer y Sarah Chalke."},

    {url:"assets/image/imagen6.PNG",titulo:"Dr House I La Historia en 1 Video", visita:"4.335.443 visualizaciones  |  4 dic 2018",
      texto:"Es una serie de televisión estadounidense estrenada en 2004 por la cadena FOX y finalizada en 2012. Fue creada " +
        "por David Shore, quien además es productor ejecutivo junto a otros como Paul Attanasio, Katie Jacobs o Bryan Singer. El " +
        "personaje central es el Dr. Gregory House (Hugh Laurie), un genio médico, irónico, satírico y poco convencional e inconformista," +
        " que encabeza un equipo de diagnóstico en el ficticio Hospital Universitario Princeton-Plainsboro de Nueva Jersey."},
  ];
  ngOnInit(): void {
  }
  getRespuesta($event:any){
    this.respuesta = $event

  }
}
