var option = prompt("Introduce número del ejercicio: ");
switch (parseInt(option)) {
    case 1:
        /**
         * Diseñar un algoritmo que lea 3 números enteros positivos distintos e imprima el mayor valor
         * de los 3. Supondremos que los 3 números que se leen son distintos.
         */

        var num1 = prompt("Número 1: ")
        var num2 = prompt("Número 2: ")
        var num3 = prompt("Número 3: ")

        if (num1 > num2 && num1 > num3)
            document.write(num1 + " es mayor")
        else
            if (num2 > num3)
                document.write(num2 + " es mayor")
                else
                    document.write(num3 + " es mayor")
    break;
    case 2:
        /**
         * Efectuar un algoritmo que averigüe si un número positivo es par o impar. El programa leerá
         * un número entero positivo y dará el resultado.
         */

        var num = prompt("Introduce un número: ")
        if (num % 2 == 0) {
            document.write(" Par")
        }
        else
            document.write(" Impar")
        
    break;
    case 3:
        /**
         * Diseñar un algoritmo para sumar los 100 primeros números naturales entre si. Tenga en
         * cuenta que 0 no es un número natural.
         */

        var res = 0;
        for (var i = 1; i < 101; i++) {
            res+=i
        }
        document.write(res);
    break;
    case 4:
        /**
         * Diseñar un algoritmo para sumar los 100 números siguientes a un valor entero positivo que
         * deberá leer. El algoritmo primero leerá un valor entero positivo, luego calculará el dato y por
         * último mostrará el resultado.
         */

        var numUsr = parseInt(prompt("Introduce un número: "))
        for (var i = 1; i < 101; i++) {
            numUsr+=i
        }
        document.write(numUsr);
    break;
    case 5:
        /**
         * Diseñar un algoritmo que lea 3 números enteros positivos distintos e imprima el mayor y el
         * menor valor de los tres. Observe que hay muchas formas de hacerlo. Intente encontrar la
         * más eficiente (la que realice menos operaciones entre los números).
         */

        var num1 = parseInt(prompt("Introduce el primer número: "));
        var num2 = parseInt(prompt("Introduce el segundo número: "));
        var num3 = parseInt(prompt("Introduce el tercer número: "));

        var mayor, menor;

        if (num1 > num2) {
            if (num1 > num3) {
                mayor = num1;
                if (num2 > num3) {
                    menor = num3;
                } else {
                    menor = num2;
                }
            } else {
                mayor = num3;
                menor = num2;
            }
        } else {
            if (num2 > num3) {
                mayor = num2;
                if (num1 > num3) {
                    menor = num3;
                } else {
                    menor = num1;
                }
            } else {
                mayor = num3;
                menor = num1;
            }
        }

        document.writeln("El mayor valor es: " + mayor);
        document.writeln("El menor valor es: " + menor);
    break;
    case 6:
        /**
         * Diseñar un algoritmo para leer una lista de números positivos y escribir, después de leerla, el
         * valor máximo y el mínimo de esa lista. El algoritmo leerá un número tras otro hasta que se
         * introduzca un número negativo. Es decir, el algoritmo dejará de leer números cuando lea un
         * número negativo y, entonces, mostrará los valores resultantes.
         */

        var arrayNum = new Array();
        var numPos = 0;
        var maxNum = 0;
        var minNum = 0;

        do {
            var num = parseInt(prompt("Introduce un número a tu lista: "))
            if (num > -1) {
                arrayNum[numPos] = num;
                numPos++;
            }
        } while (num > -1);

        minNum = arrayNum[0];

        for (var i = 0; i < arrayNum.length; i++) {
            if (arrayNum[i] > maxNum) {
                maxNum = arrayNum[i];
            }
            if (arrayNum[i] < minNum) {
                minNum = arrayNum[i];
            }
        }

        document.writeln("Número más grande de la lista: " + maxNum);
        document.writeln("Número más pequeño de la lista: " + minNum);

    break;
    case 7:
        /**
         * Diseñar un algoritmo para convertir temperaturas en grados Farenheit a grados Celsius. El
         * programa terminará cuando lea una temperatura igual a 999. Como todo el mundo sabe, la
         * relación entre grados Farenheit (F) y grados Celsius (C) viene dada por: C= 5/9 (F – 32).
         * Compruebe si 50 º Farenheit da 10ºCelsius.
         */

        var Celsius = 0;
        var Farenheit = 0;

        do {
            Farenheit = parseInt(prompt("Introduce los grados Farenheit: "));
            if (Farenheit > 999) {
                Celsius = ((Farenheit - 32) * 5/9);
                alert("Grados Celsius: " + Celsius);
            }
        } while (Farenheit != 999);

    break;
    case 8:
        /**
         * Pedir al usuario la velocidad media en kilómetros/hora y los segundos invertidos en un
         * cierto trayecto y calcular el total de metros recorridos.
         */

        var KmH = parseInt(prompt("Introduce la velocidad media en kilómetros/hora: "))
        var secInv = parseInt(prompt("Segundos a invetir en el trayecto: "))

        var trayecto = (KmH * 10) / 3.6;

        document.writeln("Distancia en metros recorridos en " + secInv + "s: " +  trayecto);

    break;
    case 9:
        /**
         * Hacer una conversor de moneda, pidiendo en primer lugar al usuario la moneda de inicio, la
         * de cambio, y la cantidad a calcular. Las monedas podrá ser: dólar($), euro(€) o libra(£).
         * Utilice la conversión: 1€=1.11$ y 1€=0.84£. Comprueba estas opciones:
         * 1€ -- 1.11$
         * 0,9€ -- 1$
         * 1€ -- 0,84£
         * 1,19€ -- 1£
         * 1$ -- 0,76£
         * 1,32$ -- 1£
         */

        alert("Divisas: \n \n1. Dólar($) \n2. Euro(€) \n3. Libra(£)");
        var startUpCurrency = parseFloat(prompt("Introduce la moneda de inicio: "));
        var currency = parseFloat(prompt("Introduce la moneda de cambio: "))
        var quantity = parseFloat(prompt("Introduce la cantidad: "))

        switch (startUpCurrency) {
            case 1:
                if (currency == 2) {
                    document.writeln("Cantidad en €: " + quantity * 0.91);
                }
                if (currency == 3) {
                    document.writeln("Cantidad en £: " + quantity * 0.81);
                }        
            break;
            case 2:
                if (currency == 1) {
                    document.writeln("Cantidad en $: " + quantity * 1.10);
                }
                if (currency == 3) {
                    document.writeln("Cantidad en £: " + quantity * 0.88);
                }
            break;
            case 3:
                if (currency == 1) {
                    document.writeln("Cantidad en $: " + quantity * 1.24);
                }
                if (currency == 2) {
                    document.writeln("Cantidad en €: " + quantity * 1.13);
                }
            break;

            default:
                break;
        }

    break;
    case 10:
        /**
         * Mostrar todos los números existentes en un rango A .. B, donde A y B son valores pedidos al
         * usuario. El rango puede ser creciente o decreciente, que será solicitado con un "confirm".
         */

        var rangeA = parseInt(prompt("Introduce el primer número: "));
        var rangeB = parseInt(prompt("Introduce el segundo número: "));
        var option = confirm("Presiona aceptar si quieres que lo muestre de manera creciente. \n Presiona cancelar si quieres que lo muestre decreciente.");
        var arrayNum = new Array();
        var pos = 0;

        switch (option) {
            case true:
                for (rangeA; rangeA < rangeB + 1; rangeA++) {
                    arrayNum[pos] = rangeA;
                    pos++;
                }
                document.writeln(arrayNum);
            break;
            case false:
                for (rangeB; rangeB > rangeA - 1; rangeB--) {
                    arrayNum[pos] = rangeB;
                    pos++;
                }
                document.writeln(arrayNum);
            break;
            default:
                break;
        }

    break;
    case 11:
        /**
         * Mostrar todos los múltiplos de 5 entre 50 y 100.
         */

        var arrayNum = new Array();
        var pos = 0;

        for (var i = 50; i < 100 + 1; i++) {
            if (i % 5 == 0) {
                arrayNum[pos] = i;
                pos++;
            }
        }

        document.writeln("1," + arrayNum);

    break;
    case 12:
        /**
         * Mostrar todos los múltiplos de X entre A y B. Pedir X, A y B al usuario.
         */

        var arrayNum = new Array();
        var pos = 0;
        var multX = parseInt(prompt("Introduce el número múltiplo: "));
        var rangeA = parseInt(prompt("Rango A: "));
        var rangeB = parseInt(prompt("Rango B: "));

        for (rangeA; rangeA < rangeB + 1; rangeA++) {
            if (rangeA % multX == 0) {
                arrayNum[pos] = rangeA;
                pos++;
            }
        }

        document.writeln("1," + arrayNum);

    break;
    default:
        break;
}