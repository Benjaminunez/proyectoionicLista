import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-registro-user',
  templateUrl: './registro-user.page.html',
  styleUrls: ['./registro-user.page.scss'],
})
export class RegistroUserPage implements OnInit {

  icono ="oscuro"
  animarLogo: any;
  
  constructor(private anim:AnimationController) { }

  ngOnInit() {
    this.animarLogo()
  }

  cambiarTema(){
    if(this.icono =="oscuro"){
      document.documentElement.style.setProperty("--fondo","ffffff")
      this.icono ="claro"
    }else{
      document.documentElement.style.setProperty("--fondo","#666666")
      this.icono ="oscuro"
  
    }
  }

  animarError(index:number){
    this.anim.create()
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

}
