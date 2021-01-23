export const data =
{
   "navbarLinkHome": "Home",
   "navbarLinkPrepareBefore": "Prepare before class",
   "navbarLinkGithub": "GitHub",
   "navbarLinkHtml": "HTML",
   "navbarLinkCss": "CSS",
   "navbarLinkJs": "JavaScript",
   "navbarLinkReact": "React",
   "navbarLinkNode": "Node",
   "navbarLinkDevops": "Devops",
   "htmlTableTitleTag": "Etiqueta",
   "TableDescription": "Descripción",
   "htmlTableTitle": "Los tags más utilizadas",
   "htmlStructureTitle": "La structura basica",
   "jsAboutTitle": "WHAT HOW WHERE",
   "jsTableTitle": "JavaScript data types",
   "htmlUsefulLinksTitle": "Saber mas",
   "UsefullLinkNameOne": "W3 Schools",
   "htmlUsefullLinkOne": "https://www.w3schools.com/html/",
   "UsefullLinkNameTwo": "Developer Mozilla",
   "htmlUsefullLinkTwo": "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
   "htmlUsefullLinkThree": "https://github.com/Codeme-Cursos/c1__html",
   "cssTableTitle": "Los selectors más utilizados",
   "cssTableTitleSelector": "Selector",
   "cssTableTitleExample": "Ejemplo",
   "cssUsefullLinkOne": "https://www.w3schools.com/css/default.asp",
   "cssUsefullLinkTwo": "https://developer.mozilla.org/en-US/docs/Web/CSS",
   "cssUsefullLinkThree": "https://github.com/Codeme-Cursos/c1__html__css",
   "cssTablePropertyTitle": "Los properties más utilizadas",
   "jsUsefullLinkOne": "https://www.w3schools.com/js/default.asp",
   "jsUsefullLinkTwo": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
   "jsUsefullLinkThree": "https://github.com/Codeme-Cursos/c1__html__css__javascript",
   "cssTableTitleProperty": "Property",
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
      "description": 'Selects all elements with class="intro"'
   },{
      "selector": ".class1.class2 ",
      "examlpe": ".name1.name2 ",
      "description": 'Selects all elements with both name1 and name2 set within its class attribute'
   },{
      "selector": ".class1 .class2",
      "examlpe": ".name1 .name2",
      "description": 'Selects all elements with name2 that is a descendant of an element with name1'
   },{
      "selector": "#id",
      "examlpe": "#firstname",
      "description": 'Selects the element with id="firstname"'
   },{
      "selector": "*",
      "examlpe": "*",
      "description": 'Selects all elements'
   },{
      "selector": "element",
      "examlpe": "p",
      "description": 'Selects all <p> elements'
   },{
      "selector": "element.class",
      "examlpe": "p.intro",
      "description": 'Selects all <p> elements with class="intro"'
   },{
      "selector": "element,element",
      "examlpe": "div, p",
      "description": 'Selects all <div> elements and all <p> elements'
   },{
      "selector": "element element",
      "examlpe": "div p",
      "description": 'Selects all <p> elements inside <div> elements'
   },{
      "selector": " element>element",
      "examlpe": "div > p",
      "description": '	Selects all <p> elements where the parent is a <div> element'
   },{
      "selector": "element+element",
      "examlpe": "div + p",
      "description": ' Selects the first <p> element that are placed immediately after <div> elements'
   },{
      "selector": "[attribute]",
      "examlpe": "[target]",
      "description": '	Selects all elements with a target attribute'
   },{
      "selector": "[attribute=value]",
      "examlpe": "[target=_blank]",
      "description": 'Selects all elements with target="_blank"'
   },{
      "selector": ":active",
      "examlpe": "a:active",
      "description": 'Selects the active link'
   },{
      "selector": "::after",
      "examlpe": "p::after",
      "description": 'Insert something after the content of each <p> element'
   },{
      "selector": "::before",
      "examlpe": "	p::before",
      "description": '	Insert something before the content of each <p> element'
   },{
      "selector": " :checked",
      "examlpe": " input:checked",
      "description": ' 	Selects every checked <input> element'
   },{
      "selector": ":first-child",
      "examlpe": "p:first-child",
      "description": '	Selects every <p> element that is the first child of its parent'
   },{
      "selector": " :focus",
      "examlpe": "	input:focus ",
      "description": '	Selects the input element which has focus '
   },{
      "selector": " :hover",
      "examlpe": " 	a:hover",
      "description": ' Selects links on mouse over'
   },{
      "selector": " :last-child",
      "examlpe": "p:last-child ",
      "description": 'Selects every <p> element that is the last <p> element of its parent '
   }
]

export const cssPropertyTableData = [
   {
      "property": "align-content: center | flex-start | flex-end | space-between | space-around | stretch | initial | inherit",
      "description": "Specifies the alignment of flexible container's items within the flex container.",  
   },{
      "property": "align-items: baseline | center | flex-start | flex-end | stretch | initial | inherit",
      "description": "Specifies the default alignment for items within the flex container.",  
   },{
      "property": "align-self: auto | baseline | center | flex-start | flex-end | stretch | initial | inherit ",
      "description": " Specifies the alignment for selected items within the flex container.",  
   },{
      "property": " animation: 	[ name duration timing-function delay iteration-count direction fill-mode play-state ] | initial | inherit",
      "description": "	Specifies the keyframe-based animations. ",  
   },{
      "property": " background: 	[ image position/size repeat attachment origin clip color ] | initial | inherit",
      "description": " 	Defines a variety of background properties within one declaration.",  
   },{
      "property": "background-color: 	color | transparent | initial | inherit",
      "description": " 	Defines an element's background color.",  
   },{
      "property": " background-image: 	url | none | initial | inherit",
      "description": " 	Defines an element's background image.",  
   },{
      "property": "background-position: [ percentage | length | left | center | right ]1 or 2 values | initial | inherit",
      "description": " Defines the origin of a background image. ",  
   },{
      "property": " background-repeat: repeat | repeat-x | repeat-y | no-repeat | initial | inherit",
      "description": " Specify whether/how the background image is tiled.",  
   },{
      "property": " border: 	[ border-width border-style border-color ] | initial | inherit",
      "description": " 	Sets the width, style, and color for all four sides of an element's border.",  
   },{
      "property": "border-bottom: [ border-bottom-width border-bottom-style border-bottom-color ] | initial | inherit ",
      "description": "	Sets the width, style, and color of the bottom border of an element. ",  
   },{
      "property": "border-radius: value",
      "description": "	Defines the shape of the border corners of an element. ",  
   },{
      "property": "color: 	color | initial | inherit",
      "description": "	Specify the color of the text of an element. ",  
   },{
      "property": " flex: [ flex-grow flex-shrink flex-basis ] | none | auto | initial | inherit",
      "description": "	Specifies the components of a flexible length.",  
   },{
      "property": "font-family: [ family-name | generic-family ] [, family-name | generic-family ]one or more pairs | initial | inherit ",
      "description": "	Defines a list of fonts for element. ",  
   },{
      "property": "font-size: xx-small | x-small | small | medium | large | x-large | xx-large | smaller | larger | length | percentage | initial | inherit ",
      "description": " 	Defines the font size for the text.",  
   },{
      "property": "font-weight: normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | initial | inherit ",
      "description": "Specify the font weight of the text. ",  
   },{
      "property": " height: 	length | percentage | auto | initial | inherit",
      "description": " 	Specify the height of an element.",  
   },{
      "property": "justify-content: flex-start | flex-end | center | space-between | space-around | initial | inherit",
      "description": "Specifies how flex items are aligned along the main axis of the flex container after any flexible lengths and auto margins have been resolved. ",  
   },{
      "property": " margin: 	[ length | percentage | auto ] 1 to 4 values | initial | inherit",
      "description": " 	Sets the margin on all four sides of the element.",  
   },{
      "property": " margin-top(-left, -right, -bottom): 	length | percentage | auto | initial | inherit",
      "description": "Sets the top or left, or right, or bottom margin of the element. ",  
   },{
      "property": "  padding: 	[ length | percentage] 1 to 4 values | initial | inherit",
      "description": " Sets the padding on all four sides of the element.",  
   },{
      "property": "padding-bottom(-left, -right, -top): 	length | percentage | initial | inherit",
      "description": "	Sets the padding to the bottom or to the top, or to the right, or left side of an element. ",  
   },{
      "property": " position: 	static | relative | absolute | fixed | sticky | initial | inherit",
      "description": "	Specifies how an element is positioned. ",  
   },{
      "property": " text-align: 	left | right | center | justify | initial | inherit",
      "description": "	Sets the horizontal alignment of inline content. ",  
   },{
      "property": " vertical-align: baseline | sub | super | top | text-top | middle | bottom | text-bottom | length | percentage | initial | inherit",
      "description": " 	Sets the vertical positioning of an element relative to the current text baseline.",  
   },{
      "property": " width: 	length | percentage | auto | initial | inherit",
      "description": " Specify the width of an element.",  
   },{
      "property": "z-index:  integer | auto | initial | inherit",
      "description": "	Specifies a layering or stacking order for positioned elements. ",  
   }
]

export const jsTableData = [
   {
      "example": "var length = 16",
      "description": "Number"
   },{
      "example": 'var lastName = "Johnson"',
      "description": "String"
   },{
      "example": 'var x = {firstName:"John", lastName:"Doe"}',
      "description": "Object"
   },{
      "example": 'var cars = ["Saab", "Volvo", "BMW"]',
      "description": "array"
   },{
      "example": 'var names = [{firstName:"John", lastName:"Doe"}]',
      "description": "array of objects" 
   },{
      "example": "var x = 5, var y = 5, (x == y)",
      "description": "Returns true"
   },{
      "example": "var x = 5, var z = 6, (x == z)",
      "description": "Returns false"
   }
]