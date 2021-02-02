export const data =
{
   "navbarLinkHome": "Home",
   "navbarLinkPrepareBefore": "Prepare before class",
   "navbarLinkGithub": "GitHub",
   "navbarLinkYoutube": "Youtube",
   "navbarLinkHtml": "HTML",
   "navbarLinkCss": "CSS",
   "navbarLinkJs": "JavaScript",
   "navbarLinkReact": "React",
   "navbarLinkNode": "Node",
   "navbarLinkDevops": "Devops",
   "htmlTableTitleTag": "Etiqueta",
   "TableDescription": "Descripción",
   "htmlTableTitle": "Los tags más utilizados",
   "htmlStructureTitle": "Estructura básica",
   "jsAboutTitle": "¿Qué, Cómo y Cuándo?",
   "jsTableTitle": "Tipos de datos",
   "htmlUsefulLinksTitle": "Saber más",
   "UsefullLinkNameOne": "W3 Schools",
   "htmlUsefullLinkOne": "https://www.w3schools.com/html/",
   "UsefullLinkNameTwo": "Developer Mozilla",
   "htmlUsefullLinkTwo": "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
   "htmlUsefullLinkThree": "https://github.com/Codeme-Cursos/c1__html",
   "cssTableTitle": "Los selectores más utilizados",
   "cssTableTitleSelector": "Selector",
   "cssTableTitleExample": "Ejemplo",
   "cssUsefullLinkOne": "https://www.w3schools.com/css/default.asp",
   "cssUsefullLinkTwo": "https://developer.mozilla.org/en-US/docs/Web/CSS",
   "cssUsefullLinkThree": "https://github.com/Codeme-Cursos/c1__html__css",
   "cssTablePropertyTitle": "Las propiedades más utilizadas",
   "jsUsefullLinkOne": "https://www.w3schools.com/js/default.asp",
   "jsUsefullLinkTwo": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
   "jsUsefullLinkThree": "https://github.com/Codeme-Cursos/c1__html__css__javascript",
   "jsUsefullLinkFour": "https://youtube.com/playlist?list=PLfHRwXiiwL3rGg6YfOXck_PmiRdLVZhdM",
   "cssTableTitleProperty": "Propiedad",
   "cssTableTitlePropertyValue": "Property value",
}

export const htmlTagsTableData = [
   {
      "tag": "<a>",
      "description": "Define un hipervínculo"
   }, {
      "tag": "<b>",
      "description": "Define texto en negrita"
   }, {
      "tag": "<br>",
      "description": "Define un salto de línea"
   }, {
      "tag": "<button>",
      "description": "Define un botón clickeable"
   }, {
      "tag": "<div>",
      "description": "Define una sección en un documento"
   }, {
      "tag": "<form>",
      "description": "Define un formulario html"
   }, {
      "tag": "<h1>, <h2>, <h3>, <h4>, <h5> y <h6> ",
      "description": "Define encabezados o títulos"
   }, {
      "tag": "<img>",
      "description": "Define una imagen"
   }, {
      "tag": "<input>",
      "description": "Define un control de entrada de texto"
   }, {
      "tag": "<i>",
      "description": "Define una parte del texto de modo alternativo"
   }, {
      "tag": "<hr>",
      "description": "Define un cambio de temática a partir de una línea dibujada"
   }, {
      "tag": "<li>",
      "description": "Define un ítem de una lista"
   }, {
      "tag": "<nav>",
      "description": "Define un link de navegación"
   }, {
      "tag": "<label>",
      "description": "Define el rótulo para un elemento <input>"
   }, {
      "tag": "<ol>",
      "description": "Define una lista ordenada"
   }, {
      "tag": "<option>",
      "description": "Define una opción en una lista desplegable"
   }, {
      "tag": "<p>",
      "description": "Define un párrafo"
   }, {
      "tag": "<select>",
      "description": "Define un drop-down list"
   }, {
      "tag": "<small>",
      "description": "Define texto pequeño"
   }, {
      "tag": "<span>",
      "description": "Define una pequeña sección de un documento"
   }, {
      "tag": "<strong>",
      "description": "Define un texto en negrita"
   }, {
      "tag": "<table>",
      "description": "Define una tabla"
   }, {
      "tag": "<tbody>",
      "description": "Define el cuerpo de una tabla"
   }, {
      "tag": "<td>",
      "description": "Define una celda en una tabla"
   }, {
      "tag": "<textarea>",
      "description": "Define un control de entrada de múltiples líneas"
   }, {
      "tag": "<th>",
      "description": "Define una celda de encabezado en una tabla"
   }, {
      "tag": "<thead>",
      "description": "Agrupa los encabezados de una tabla"
   }, {
      "tag": "<tr>",
      "description": "Define una fila en una tabla"
   },{
      "tag": "<ul>",
      "description": "Define una lista desordenada"
   },

]

export const cssSelectorsTableData = [
   {
      "selector": ".class",
      "examlpe": ".intro",
      "description": 'Selecciona todos los tags con class="intro"'
   },{
      "selector": ".class1.class2 ",
      "examlpe": ".name1.name2 ",
      "description": 'Selecciona todos los tags con class="name1 name2"'
   },{
      "selector": ".class1 .class2",
      "examlpe": ".name1 .name2",
      "description": 'Selecciona todos los tags que class="name2" que sean descendientes de class="name1"'
   },{
      "selector": "#id",
      "examlpe": "#firstname",
      "description": 'Selecciona el tag con id="firstname"'
   },{
      "selector": "*",
      "examlpe": "*",
      "description": 'Selecciona todos los tags del proyecto'
   },{
      "selector": "tag",
      "examlpe": "p",
      "description": 'Selecciona todos los tags <p>'
   },{
      "selector": "element.class",
      "examlpe": "p.intro",
      "description": 'Selecciona todos los tags <p> con class="intro"'
   },{
      "selector": "element,element",
      "examlpe": "div, p",
      "description": 'Selecciona todos los tags <div> y <p>'
   },{
      "selector": "element element",
      "examlpe": "div p",
      "description": 'Selecciona todos los tags <p> que existan dentro de div <div>'
   },{
      "selector": " element>element",
      "examlpe": "div > p",
      "description": 'Selecciona todos los tags <p> que sean directamente descendientes de un <div>'
   },{
      "selector": "element+element",
      "examlpe": "div + p",
      "description": 'Selecciona el primer tag <p> ubicado inmediatamente después de un <div>'
   },{
      "selector": "[attribute]",
      "examlpe": "[target]",
      "description": 'Selecciona todos los tags que tengan el atributo "target"'
   },{
      "selector": "[attribute=value]",
      "examlpe": "[target=_blank]",
      "description": 'Selecciona todos los tags con el atributo target="_blank"'
   },{
      "selector": ":active",
      "examlpe": "a:active",
      "description": 'Selecciona todos los links activos'
   },{
      "selector": "::after",
      "examlpe": "p::after",
      "description": 'Inserta algo después de cada tag <p>'
   },{
      "selector": "::before",
      "examlpe": "	p::before",
      "description": 'Inserta algo antes de cada tag <p>'
   },{
      "selector": " :checked",
      "examlpe": " input:checked",
      "description": 'Selecciona todos los tags <input> checkeados'
   },{
      "selector": ":first-child",
      "examlpe": "p:first-child",
      "description": 'Selecciona todos los tags <p> que sean el primer hijo del tag padre'
   },{
      "selector": " :focus",
      "examlpe": "	input:focus ",
      "description": 'Selecciona todos los inputs que esten seleccionados o focalizados'
   },{
      "selector": " :hover",
      "examlpe": " 	a:hover",
      "description": 'Selecciona los links con que tengan el cursor del mouse sobre ellos'
   },{
      "selector": " :last-child",
      "examlpe": "p:last-child ",
      "description": 'Selecciona todos los tags <p> que sean el último hijo del tag padre'
   }
]

export const cssPropertyTableData = [
   {
      "property": "display: block | inline | inline-block | flex | initial | inherit",
      "description": "Define el alineamiento de los elementos.",  
   },{
      "property": "align-items: baseline | center | flex-start | flex-end | stretch | initial | inherit",
      "description": "Define la distribución de los elementos dentro de un contenedor flex, el efecto dependerá de la dirección de contenedor flex (vertical flex-direction: row; y horizontal flex-direction: column;).", 
   },{
      "property": "align-self: auto | baseline | center | flex-start | flex-end | stretch | initial | inherit ",
      "description": "Auto define la distribución del elemento que se encuentre dentro de un contener flex.",  
   },{
      "property": " animation: 	[ name duration timing-function delay iteration-count direction fill-mode play-state ] | initial | inherit",
      "description": "Define una animación.",  
   },{
      "property": " background: 	[ image position/size repeat attachment origin clip color ] | initial | inherit",
      "description": "Define una serie de propiedades del fondo.",  
   },{
      "property": "background-color: 	color | transparent | initial | inherit",
      "description": "Define el color de fondo.",  
   },{
      "property": " background-image: 	url | none | initial | inherit",
      "description": "Define el fondo como una imagen, se utiliza definiendo la url de la imagen con url('ruta/dela/imagen').",  
   },{
      "property": "background-position: [ percentage | length | left | center | right ]1 or 2 values | initial | inherit",
      "description": "Define la posición de la imagen de fondo.",  
   },{
      "property": " background-repeat: repeat | repeat-x | repeat-y | no-repeat | initial | inherit",
      "description": "Especifica la forma en que se repetirá la imagen de fondo.",  
   },{
      "property": " border: 	[ border-width border-style border-color ] | initial | inherit",
      "description": "Define el grosor, estilo y color del borde.",  
   },{
      "property": "border-radius: value",
      "description": "Define la curvatura de las esquinas.",  
   },{
      "property": "color: 	color | initial | inherit",
      "description": "Define el color del texto.",  
   },{
      "property": " flex: [ flex-grow flex-shrink flex-basis ] | none | auto | initial | inherit",
      "description": "Define la distribución proporcional de los elementos dentro de una contenerdor flex.",  
   },{
      "property": "font-family: [ family-name | generic-family ] [, family-name | generic-family ]one or more pairs | initial | inherit ",
      "description": "Define la familia de la fuente de texto.",  
   },{
      "property": "font-size: xx-small | x-small | small | medium | large | x-large | xx-large | smaller | larger | length | percentage | initial | inherit ",
      "description": "Define el tamaño de la fuente de texto.",  
   },{
      "property": "font-weight: normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | initial | inherit ",
      "description": "Define el grosor de la fuente de texto.",  
   },{
      "property": " height: 	length | percentage | auto | initial | inherit",
      "description": "Define el alto de un contenedor.",  
   },{
      "property": "justify-content: flex-start | flex-end | center | space-between | space-around | initial | inherit",
      "description": "Define la distribución de los elementos dentro de un contenedor flex, el efecto dependerá de la dirección de contenedor flex (horizontal flex-direction: row; y vertical flex-direction: column;).",  
   },{
      "property": " margin: 	[ length | percentage | auto ] 1 to 4 values | initial | inherit",
      "description": "Define el margen (espacio entre el borde hacia afuera) de un contenedor.",  
   },{
      "property": "  padding: 	[ length | percentage] 1 to 4 values | initial | inherit",
      "description": "Define el padding (espacio entre el borde hacia adentro) de un contenedor.",  
   },{
      "property": " position: 	static | relative | absolute | fixed | sticky | initial | inherit",
      "description": "Define el posicionamiento de un contenedor.",  
   },{
      "property": " text-align: 	left | right | center | justify | initial | inherit",
      "description": "Define el alineamiento del texto",  
   },{
      "property": " width: 	length | percentage | auto | initial | inherit",
      "description": "Define el ancho de un contenedor",  
   },{
      "property": "z-index:  integer | auto | initial | inherit",
      "description": "Especifica la posición de un contenedor en el eje z.",  
   }
]

export const jsTableData = [
   {
      "example": "let length = 16",
      "description": "Number"
   },{
      "example": 'let lastName = "Johnson"',
      "description": "String"
   },{
      "example": 'let x = {firstName:"John", lastName:"Doe"}',
      "description": "Object"
   },{
      "example": 'let cars = ["Saab", "Volvo", "BMW"]',
      "description": "Array"
   },{
      "example": 'let names = [{firstName:"John", lastName:"Doe"}]',
      "description": "Array of objects" 
   },{
      "example": "let x = 5, let y = 5, (x == y)",
      "description": "Returns true"
   },{
      "example": "let x = 5, let z = 6, (x == z)",
      "description": "Returns false"
   }
]