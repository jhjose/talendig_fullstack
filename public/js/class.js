class Car extends Radio {

    #password = "6a5sdf16as5f1";
    #age = 32;
    static transmision = 'automatically';

    constructor(password, age, name, year, color, matricula, chasis){
        super();

        this.#password = password;
        this.#age = age;
        this.name = name;
        this.year = year;
        this.color = color;
        this.matricula = matricula;
        this.chasis - chasis;
    }

    buy(){
        // Run integration
        alert('Cliente realizó el pago correctamente.')
    }

    payment(){
        // Save payment information.
        alert('Se guardó la información del pago realizado.')
    }

}

class Radio {
    #user_connected = false;
    #user = 'suscriptor';

    constructor(){
        console.log('Ingresó al Radio')

        this.#user = 'admin';
    }

    play(){
        if(this.#user === 'admin'){
            this.#user_connected = true;
        }else{
            this.#user_connected = false;
            this.stop();
        }
    }

    stop(){
        this.#user = 'suscriptor';
    }
}


const car1 = new Car("Audi", 2024, 'Black', 'A524S5', '65as4fd65');

const car2 = new Car("Toyota Collora", 2023, 'Yellow', 'A524S565', '65as456fd65');


// Con instancia
const object_exec = new Car();

object_exec.buy();
object_exec.payment();


// Acceso a variable o método estático
alert(Car.#password);