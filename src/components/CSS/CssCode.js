import React from 'react'

const CssCode = () => {
    return (
        <>
            <code className="html__code">
                p&#123; <br />
                &emsp;&emsp;text-align: center; <br />
                &emsp;&emsp;color: red; <br />
                &#125;<br/><br/>

                #firstname&#123; <br />
                &emsp;&emsp;align-content: center; <br />
                &emsp;&emsp;background: green; <br />
                &#125;<br/><br/>

                .intro&#123; <br />
                &emsp;&emsp;background-repeat: no-repeat; <br />
                &emsp;&emsp;background-color: #FFFFFF; <br />
                &#125;<br/><br/>

                p.intro&#123; <br />
                &emsp;&emsp;bprder: 1px solid #ff0000; <br />
                &emsp;&emsp;border-radius: 5px; <br />
                &#125;<br/><br/>

                &lt;p class="intro" id="firstname"&#62;Page Title&lt;/p&#62;<br />
            </code>
        </>
    )
}

export default CssCode
