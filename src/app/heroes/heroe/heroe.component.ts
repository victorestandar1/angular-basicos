import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
    nombre: string = 'IronMan';
    edad: number = 24;

    cambiarNombre():void{
        this.nombre = 'SpiderMan';
    }


}

