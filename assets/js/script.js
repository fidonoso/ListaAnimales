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
        return `El nombre del dueño es: ${this._nombreProp}. El domicilio es: ${this._direccion}, y el número telefónico de contacto: ${this._telefono}`

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
var btnAgregar=document.querySelector('button')
btnAgregar.addEventListener('click',(event)=>{
   event.preventDefault();
var todosInputs=document.querySelectorAll('input')
var cont=0
    todosInputs.forEach(el =>{
        if(el.value==""){
            cont=cont+1            
        }
    })
    if(cont==0){
        
        let propietario =document.getElementById('propietario').value
        let phono =document.getElementById('telefono').value
        let address =document.getElementById('direccion').value
        let nombreMascota =document.getElementById('nombreMascota').value
        let tipo =document.getElementById('tipo').value
        let motivo =document.getElementById('enfermedad').value
        let lista =document.querySelector('ul')
        let cliente = new Mascota(propietario, address, phono, tipo, nombreMascota, motivo)
        let li=document.createElement('li')
        li.innerHTML=`${cliente.datosPropietario()}`    
        lista.appendChild(li)
        let li2=document.createElement('li')
        li2.innerHTML=`El tipo de animal es un :${cliente.gettipo()}, mientras que el nombre de la mascota es: ${cliente.getnombre()} y la enfermedad es: ${cliente.getenfermedad()}`    
        lista.appendChild(li2)
        todosInputs.forEach(el =>{
            el.value=""               
            })
        alert(`${cliente.getnombre()} fue agregado a la lista con éxito`)
        console.log(cliente)
        }else{
        alert("Complete todos los campos")
    }

})