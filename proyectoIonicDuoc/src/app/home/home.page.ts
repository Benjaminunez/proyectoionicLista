import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  icono ="oscuro"
  
  constructor() {}

  cambiarTema(){
    if(this.icono =="oscuro"){
      document.documentElement.style.setProperty("--fondo","ffffff")
      document.documentElement.style.setProperty("--fondoTarje","ffffff")
      document.documentElement.style.setProperty("--letraOscuro","#0c0909")
      document.documentElement.style.setProperty("--headerDark","#4b4c4d")
      document.documentElement.style.setProperty("--tituloDark","#ffffff")
      document.documentElement.style.setProperty("--botonDark","#fcb32e")
      this.icono ="claro"
    }else{
      document.documentElement.style.setProperty("--fondo","#666666")
      document.documentElement.style.setProperty("--fondoTarje", "#777777")
      document.documentElement.style.setProperty("--letraOscuro", "#ffffff")
      document.documentElement.style.setProperty("--headerDark", "#fcb32e")
      document.documentElement.style.setProperty("--tituloDark","#0c0909")
      document.documentElement.style.setProperty("--botonDark","#0c0909")
      this.icono ="oscuro"
    }
  }

}
