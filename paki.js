var imagenes = [];
imagenes ["Cauchin"] = "vaca.png";
imagenes ["Pokacho"] = "pollo.png";
imagenes ["Tocinauro"] = "cerdo.png";



class Pakiman
{
  constructor(nombre, vida, ataque)
  {
    this.imagen = new Image();
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;

    this.imagen.src = imagenes[this.nombre];
  }
  hablar()
  {
    alert(this.nombre);
  }
}

  var cauchin = new Pakiman("Cauchin", 100, 30);
  var pokacho = new Pakiman ("Pokacho", 80, 50);
  var tocinauro = new Pakiman ("Tocinauro", 120, 40);
