import React from 'react'

const JsCode = () => {
    return (
        <code className="html__code">
            <strong> #The example below "finds" an HTML element (with id="demo"), and changes the element content (innerHTML) to "Hello JavaScript":</strong><br/>
            document.getElementById("demo").innerHTML = "Hello JavaScript";<br/><br/>

            <strong>#Changing the style of an HTML element, is a variant of changing an HTML attribute: </strong><br/>
            document.getElementById("demo").style.fontSize = "35px";<br/><br/>

           <strong> #Hiding HTML elements can be done by changing the display style:</strong> <br/>
            document.getElementById("demo").style.display = "none"; <br/><br/><br/>

            <strong> #Where to put JS code</strong> <br/>
            <strong>&lt;! -- Scripts can be placed in the &lt;body&#62;, or in the &lt;head&#62; section of an HTML page, or in both. --&#62;</strong><br/>
            &lt;!DOCTYPE html&#62; <br />
                &lt;html&#62;<br />
                &lt;head&#62; <br />
                &lt;title&#62;Page Title&lt;/title&#62;<br />
                &lt;/head&#62; <br />
                &lt;body&#62; <br />
                &lt;h1&#62;My First Heading&lt;/h1&#62; <br />
                &lt;p id="demo"&#62;My first paragraph&lt;/p&#62; <br />
                &lt;button onclick="myFunction()"&#62;Try it&lt;/button&#62; <br />
                &lt;script&#62;<br/>
                function myFunction()&#123;<br/>
                &emsp;&emsp; document.getElementById('demo').innerHTML = 'Paragraph changed.'; <br/>
                &#125;<br/>
                &lt;/script&#62; <br />

                &lt;/body&#62; <br />
                &lt;/html&#62;

            <br/><br/>
            <strong>&lt;! -- Scripts can also be placed in external files: --&#62;</strong><br/>
            <strong> #External file: scripts.js</strong> <br/>
            function myFunction()&#123;<br/>
                &emsp;&emsp; document.getElementById('demo').innerHTML = 'Paragraph changed.'; <br/>
                &#125;<br/>
            <strong> #In HTML</strong> <br/>
            &lt;script src="scripts.js"&#62;&lt;/script&#62; <br />


            <br/><br/><br/>
            <strong> #Types of functions</strong> <br/>
            &lt;p&#62;Player 1: Chris&lt;/p&#62;<br /><br/>

            const para = document.querySelctor('p');<br/>

            para.addEventListener('click', updateName);<br/><br/>

          <strong>&lt;! -- old function structure --&#62;</strong><br/>

            function updateName() &#123; <br />
            &emsp;&emsp; let name = prompt('Enter a new name');<br/>
            &emsp;&emsp; para.textContent = 'Player 1: ' + name;<br/>
            &#125;<br/><br/>


           <strong>&lt;! -- arrow function structure --&#62;</strong><br/>

            const updateName = () =&#62; &#123; <br />
            &emsp;&emsp; let name = prompt('Enter a new name');<br/>
            &emsp;&emsp; para.textContent = 'Player 1: ' + name;<br/>
            &#125;
               
        </code>
    )
}

export default JsCode
