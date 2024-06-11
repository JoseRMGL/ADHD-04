## ADHD04
### ¿Qué es TypeScript?
TypeScript es una extensión de JavaScript que agrega tipado estático al lenguaje. Esto significa que las variables, funciones y otros elementos del código se asocian con tipos específicos, permitiendo al compilador detectar errores potenciales durante el desarrollo y mejorar la legibilidad del código.

### ¿Cómo se instala TypeScript en VSCode?
Para instalar TypeScript en Visual Studio Code, sigue estos pasos:

Abre Visual Studio Code.
Dirígete a la extensión "TypeScript" en el marketplace de extensiones.
Haz clic en el botón "Instalar".
Reinicia Visual Studio Code.

### ¿Cómo se compila un archivo en TypeScript para convertirlo a JavaScript?
Para compilar un archivo TypeScript, usa la línea de comandos. Primero, instala el compilador de TypeScript utilizando npm o yarn. Luego, navega hasta el archivo TypeScript (por ejemplo, main.ts) y compila el archivo utilizando el comando tsc main.ts.

### ¿Qué extensión de archivos se utiliza para los archivos TypeScript?
Los archivos TypeScript utilizan la extensión .ts para diferenciarlos de los archivos JavaScript normales, que utilizan la extensión .js. Los archivos TypeScript contienen código JavaScript con información de tipo adicional, que se compila en código JavaScript normal antes de ser ejecutado por un navegador web o un motor de JavaScript.

### ¿Cómo se define un tipo de dato en TypeScript?
Anotaciones de tipo explícitas: Puedes especificar el tipo de dato de una variable al declararla utilizando una anotación de tipo explícita. Esto se hace después del nombre de la variable, seguido de dos puntos y luego el nombre del tipo de dato.

Inferencia de tipos: TypeScript puede inferir el tipo de una variable a partir de su valor inicial, lo que significa que no siempre es necesario especificar explícitamente el tipo de dato.

### ¿Qué son los tipos de unión y cómo se declaran?
Tipos de unión en TypeScript: Los tipos de unión en TypeScript permiten especificar que una variable o expresión puede contener uno de varios tipos de datos compatibles.

Declaración de tipos de unión: La sintaxis para declarar un tipo de unión es utilizar el operador | para separar los tipos compatibles. Por ejemplo, el siguiente código define una variable llamada valor que puede ser de tipo string o number.

### ¿Qué es un tipo de literal en TypeScript y para qué se utiliza?
Tipo literal primitivo:

Cadenas: Se pueden definir tipos literales de cadenas utilizando comillas simples o dobles.
Números: Se definen tipos de números utilizando valores numéricos literales.
Booleanos: Se definen utilizando las palabras clave "true" o "false".
Tipos literales de objetos: Se definen literales de objetos para representar estructuras de datos específicas con propiedades de tipos específicos.

### ¿Qué son los tipos enumerados (Enums) y cómo se crean?
Los tipos enumerados, también conocidos como enums, son una característica de TypeScript que permite definir un conjunto de constantes con nombre. Estas constantes representan valores relacionados entre sí y pueden ser utilizadas para mejorar la legibilidad, seguridad y mantenibilidad del código.

### ¿Cómo se definen las funciones con tipos en TypeScript?
Sintaxis básica: Para definir una función con tipos en TypeScript, se especifican los tipos de los parámetros y el tipo de retorno.

Explicación de la sintaxis:

nombreFuncion: Es el nombre que se le da a la función.
parametro1: tipoParametro1: Define el primer parámetro de la función, especificando su nombre y tipo de dato.
parametro2: tipoParametro2: Define el segundo parámetro de la función, especificando su nombre y tipo de dato.
...: Indica que puede haber más parámetros en la función.
tipoRetorno: Especifica el tipo de dato que devuelve la función.
{}: Define el bloque de código que representa el cuerpo de la función.

### ¿Qué son los parámetros opcionales y los parámetros predeterminados en funciones?
Parámetros opcionales y parámetros predeterminados en funciones:

Parámetros opcionales: Un parámetro opcional es aquel al que no es obligatorio proporcionarle un valor al llamar a la función. Si no se proporciona un valor para un parámetro opcional, la función utiliza un valor predeterminado o se comporta de una manera específica definida por el programador.

### ¿Cuáles son las mejores prácticas para escribir código limpio y mantenible en TypeScript?
Habilitar comprobaciones de tipos: TypeScript se destaca por su sistema de tipos, el cual permite detectar errores en tiempo de compilación que podrían pasar desapercibidos en JavaScript.

Usar interfaces y tipos personalizados: Las interfaces y los tipos personalizados permiten definir estructuras de datos más complejas y precisas, mejorando la legibilidad y la autodocumentación del código.

Aprovechar las inferencias de tipos: TypeScript infiere automáticamente los tipos de variables y expresiones basadas en su uso, lo que significa que no siempre es necesario escribir anotaciones de tipo explícitas, haciendo que el código sea más conciso y fácil de leer.