"use strict";
//Clase Autos
class Auto {
    constructor(color, modelo, puertas) {
        this.color = color;
        this.modelo = modelo;
        this.puertas = puertas;
    }
    setColor(newColor) {
        this.color = newColor;
    }
    setModelo(newModelo) {
        this.modelo = newModelo;
    }
    setPuertas(newPuertas) {
        this.puertas = newPuertas;
    }
}
//Clase Fábrica de autos
class FabricaDeAutos {
    constructor() {
        this.autos = [];
        this.empleados = 150;
        this.capacidad = 50;
    }
    createAuto(color, modelo, puertas) {
        const newAuto = new Auto(color, modelo, puertas);
        if (this.autos.length >= this.capacidad) {
            console.log("Se ha llegado a la capacidad maxima");
        }
        else {
            this.autos.push(newAuto);
        }
    }
    //EJERCICIO N°1
    autosFabricados() {
        console.log(this.autos);
    }
    //FIN EJERCICIO N°1
    //EJERCICIO N°2
    fabricacionAutomatica(cantidadSolicitada, color, modelo, puertas) {
        for (let i = 0; i < cantidadSolicitada; i++) {
            if (this.autos.length >= this.capacidad) {
                console.log("Se ha llegado a la capacidad maxima");
            }
            else {
                this.createAuto(color, modelo, puertas);
            }
        }
    }
}
const fabrica = new FabricaDeAutos();
fabrica.createAuto('rojo', 'renault 12', 5);
fabrica.fabricacionAutomatica(50, "Rojo", "Fiat", 3);
fabrica.autosFabricados();
//# sourceMappingURL=index.js.map