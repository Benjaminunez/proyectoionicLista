import { Component, ElementRef, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-registro-user',
  templateUrl: './registro-user.page.html',
  styleUrls: ['./registro-user.page.scss'],
})
export class RegistroUserPage implements OnInit {

  icono ="oscuro"
  
  constructor(
    private animationCtrl:AnimationController, private elementRef: ElementRef) {}

  ngOnInit() {
    this.animarLogo();
  }

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

  animarError(index:number){
    this.animationCtrl.create()
    .addElement(document.querySelectorAll("input")[index])
    .duration(200)
    .iterations(3)
    .keyframes([
      {offset:0,transform:"translateX(0px)", boder: "1px transparent solid"},
      {offset:0.25,transform:"translateX(-5px)", boder: "1px red solid"},
      {offset:0.50,transform:"translateX(0px)", boder: "1px transparent solid"},
      {offset:0.75,transform:"translateX(5px)", boder: "1px red solid"},
      {offset:1,transform:"translateX(0px)", boder:  "1px transparent solid"},
    ]).play()
  }

  async animarLogo() {
    const animation = this.animationCtrl
      .create()
      .addElement(this.elementRef.nativeElement)
      .duration(1200)
      .easing('ease-in-out')
      .fromTo('transform', 'scale(0.5)', 'scale(1)');

    await animation.play();
  }

}
