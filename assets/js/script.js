class Propietario{
    constructor(nombreProp, direccion, telefono){

        this._nombreProp=nombreProp,
        this._direccion=direccion,
        this._telefono=telefono    
    }
    getnombre(){
        return this._nombreProp
    };
    setnombre(nuevopropietario){
        this._nombreProp=nuevopropietario
    };
    getdireccion(){
        return this._direccion
    };
    setdireccion(nuevadireccion){
        this._direccion=nuevadireccion
    };
    gettelefono(){
        return this._telefono
    };
    settelefono(nuevophone){
        this._telefono=nuevophone
    };


    datosPropietario(){
        return `Propietario: ${this._nombreProp}| Direccion: ${this._direccion}| Teléfono: ${this._telefono}`

    }
}
class Animal extends Propietario{
    constructor(nombreProp, direccion, telefono, tipo){
        super(nombreProp, direccion, telefono) 
        this._tipo=tipo
    }
    gettipo(){
        return this._tipo 
    }
}
class Mascota extends Animal{
    constructor(nombreProp, direccion, telefono, tipo, nombreM, enfermedad){
        super(nombreProp,direccion, telefono, tipo );
        this._nombreM=nombreM,
        this._enfermedad=enfermedad
    }
    getnombre(){
        return this._nombreM
    };
    setnombre(nuevonombre){
        this._nombreM=nuevonombre
    };
    getenfermedad(){
        return this._enfermedad
    };
    setenfermedad(nuevaenfermedad){
        this._enfermedad=nuevaenfermedad
    };
}

var mario = new Mascota('Kiko','maule 28', '685465465','Perro', 'pepi','vieja')
console.log(mario)
