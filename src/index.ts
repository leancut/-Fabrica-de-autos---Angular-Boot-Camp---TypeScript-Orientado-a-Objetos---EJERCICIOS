
//Clase Autos

class Auto {
  color: string;
  modelo: string;
  puertas: number;

  constructor(color: string, modelo: string, puertas: number) {
    this.color = color;
    this.modelo = modelo;
    this.puertas = puertas;
  }

  setColor(newColor: string) {
    this.color = newColor;
  }

  setModelo(newModelo: string) {
    this.modelo = newModelo;
  }

  setPuertas(newPuertas: number) {
    this.puertas = newPuertas;
  }
}

//Clase Fábrica de autos

class FabricaDeAutos {
  empleados: number;
  capacidad: number;
  autos: Auto[] = [];

  constructor() {
    this.empleados = 150;
    this.capacidad = 50;
  }

  createAuto(color: string, modelo: string, puertas: number) {
    const newAuto = new Auto(color, modelo, puertas);
if(this.autos.length >= this.capacidad){
  console.log("Se ha llegado a la capacidad maxima")
}else{
    this.autos.push(newAuto);
  }
    }

  //EJERCICIO N°1
  autosFabricados(){
    console.log(this.autos)
  }
  //FIN EJERCICIO N°1

  //EJERCICIO N°2
  fabricacionAutomatica(cantidadSolicitada: number, color: string, modelo: string, puertas: number){  
  for (let i = 0; i < cantidadSolicitada; i++) {
    if(this.autos.length >= this.capacidad){
      console.log("Se ha llegado a la capacidad maxima")
    }else{
    this.createAuto(color, modelo, puertas);
  }
}
  }
//FIN EJERCICIO N°2
}


const fabrica = new FabricaDeAutos();
fabrica.createAuto('rojo', 'renault 12', 5);
fabrica.fabricacionAutomatica(50, "Rojo", "Fiat", 3)
fabrica.autosFabricados();