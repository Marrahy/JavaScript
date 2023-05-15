
function ejercicio1(){


    function Persona(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.hermano = new Array[3];
        this.set_padre(persona) = function() {
            return this.padre = persona;
        }
        this.set_madre = function() {
            return this.nombre + " " + this.apellido + " " + this.edad + ".";
        }
        this.add_hermanos = function(hermano) {
            return this.hermano.push(hermano);
        }
        }

        const ned = new Persona("Ned", "Stark", 60);
        
        const cat = new Persona("Catelyn", "Stark", 55);
        
        const rob = new Persona("Rob", "Stark", 55);

        rob.set_padre(ned);
        rob.set_madre(cat);
        rob.add_hermanos(sansa);


        function add_hermana() {
            const hermano = new Persona("Rob", "Stark", 30)
            const hermano2 = new Persona("Jon", "Stark", 30)
            const hermana = new Persona("Sansa", "Stark", 30)    
        }
    }

}

var option = prompt("Introduce número del ejercicio: ");
switch (parseInt(option)) {
    /*
     * Crea un objeto persona que tendrá las propiedades: nombre, apellidos, edad. También las
     * propiedades tipo persona: padre, madre y hermanos. Crea los métodos set_padre(),
     * set_madre, y add_hermano(). Luego crea la familia Stark, con Ned Stark y Catelyn Tully, y
     * al menos los tres hermanos Rob, Jon y Sansa. Por último recorre todos los hermanos de uno
     * de ellos y saca el nombre de sus hermanos.
    */
    case 1:
        ejercicio1();
        break;

        
    /*
     * Haz una página que solicite al usuario una función con variables "x" e "y",y una serie de
     * valores separados por ";" y que cree automáticamente una tabla (<table>) con el resultado de
     * la función para la combinación de valores de x e y. Por ejemplo al poner "x*y" y valores: "-
     * 5;-4;-3;-2;-1;0;1;2;3,4;5" el resultado será:
     */
    case 2:
    break;
    /*
     * Crea el objeto conversor de monedas. Tendrá un método convertir() en el que pidiendo en
     * primer lugar al usuario una cantidad en dólar($), euro(€) o libra(£), y la moneda de cambio,
     * devuelva la cantidad convertida. El símbolo de la moneda irá al final de la cantidad, algo
     * que deberá ser controlado. Al objeto conversor se le podrá introducir por código las
     * conversiones en el constructor. Utilice la conversión: 1€=1.11$ y 1€=0.84£. Comprueba
     * estas opciones:
     * 1€ 1.11$
     * 0,9€ 1$
     * 1€ 0,84£
     * 1,19€ 1£
     * 1$ 0,76£
     * 1,32$ 1£
     */
    case 3:
    break;
    /*
     * Crea un programa que solicite una cadena de texto y que devuelva el numero de caracteres
     * que tiene la cadena y dicha cadena en mayúsculas. El programa dará la posibilidad de volver
     * a introducir una cadena o de finalizar la ejecución. Es decir se podría introducir todas las
     * cadenas que uno desee, que se mostrarán al acabar. 
     */
    case 4:
    break;
    /* 
     * Haz una función que reciba una cadena y devuelve true si un palíndromo, false en caso
     * contrario. Un palíndromo es una cadena que se lee igual “al derecho” como “al reves”.
     * Ejemplo: “OTTO” es un palíndromo, pero "RECONOCER" también.
     */
    case 5:
    break;
    /* 
     * Haz un programa que dado un texto de entrada, cambie las vocales con acento a vocales sin
     * acentos. NO debe recorrer la frase carácter a carácter, busque otro método.
     */
    case 6:
    break;
    /*
     * Haz un programa que pregunte por tu fecha de nacimiento con una fecha con un formato
     * establecido (por ejemplo:dd/mm/yyyy) y te diga la edad que tienes. 
     */
    case 7:
    break;
    /*
     * Haz un programa que pregunte por tu cumpleaños con una fecha con un formato establecido
     * (por ejemplo:dd/mm/yyyy) y saque cuántos días quedan hasta el próximo cumpleaños, junto
     * con una imagen que diga feliz cumpleaños. 
     */
    case 8:
    break;
    /*
     * Haz un programa que dados dos arrays pasados y cuyos elementos están separados por “;”,
     * encuentre los elementos que son únicos en ambos arrays. Por ejemplo, dados 1;2;3;4;8;9 y
     * 1;2;3;4;9, debería devolver 4 y 8. 
     */
    case 9:
    break;
    /*
     * Haz un programa que dado un array nxn (hardcode) saque los datos fila a fila y luego
     * columna a columna. OJO, las filas podrán ser de distinto tamaño. 
     */
    case 10:
    break;
    /*
     * Haz un programa que pasado un array de palabras (separadas por “;”), saque la letra más
     * utilizada en todas ellas, y filtre aquellas palabras que tengan esa letra. 
     */
    case 11:
    break;
    /*
     * Pedir al usuario el valor del radio de una circunferencia para crear un objeto circunferencia,
     * así como el angulo respecto al eje horizontal de un punto de esta circunferencia. El objeto
     * circunferencia tendrá tres métodos para devolver el resultado la longitud y el área de la
     * circunferencia, así como el área del triangulo que forman los catetos con la hipotenusa.
     */
    case 12:
    break;
    /*
     * Realiza un programa que solicite un número, lo eleve a sí mismo y diga cuántos dígitos tiene
     * el resultado. NO se puede pasar el número a cadena de caracteres. Por ejemplo 10^10 tiene
     * 11 dígitos, 3^3 tiene 2 dígitos. Puedes hacerlo con solo 2 variables? 
     */
    case 13:
    break;
    /*
     * Realiza una función que reciba un número entero N y diga si es primo o no. Se realizará la
     * criba con el test de primalidad más sencillo. Los número primos que se necesitan para saber
     * si N es primo deberán ser calculados (evitar hardcode) y de paso saque por pantalla los
     * primos que ha necesitado calcular para saber si N es primo.
     */
    case 14:
    break;
    default:
        break;
}