import React from 'react'
import { data } from '../data/es'
import Image1 from '../statics/Images/Image1.png'
import Image2 from '../statics/Images/Image2.png'
import Image3 from '../statics/Images/Image3.png'
import Image4 from '../statics/Images/Image4.png'
import Image5 from '../statics/Images/Image5.png'
import Image6 from '../statics/Images/Image6.png'
import Image7 from '../statics/Images/Image7.png'
import Image8 from '../statics/Images/Image8.png'
const GithubLyout = () => {
    return (
        <main className="main__content container mb-5">
            <article className="banner__content">
                <h1 className="text-center pb-5">{data.navbarLinkGithub}</h1>
                <h4 className="text-center pb-3">Step 0: Install git and create a GitHub account </h4>
                <code className="html__code">
                    #Download Git on MacOs:<br />
                    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"<br />
                    brew install git <br />
                    git --version <br /><br />
                    #Download Git on Windows:<br />
                    <a href="https://git-scm.com/download/win">https://git-scm.com/download/win</a><br />
                    git --version <br /><br />

                    #Create GitHub account
                    <a href="https://github.com/">https://github.com/</a><br/><br/>

                    #In terminal setup you username and password<br />
                    git config --global user.name "your username from GitHub"<br/>
                    git config --global user.password "your password from GitHub"<br/>
                    
                </code>
                <h4 className="text-center pb-3">Step 1:  Create a local git repository  </h4>
                <code className="html__code">
                    #Create empty folder in your desktop and add new file to it<br />
                    #Open VisulaStudio Code<br />
                    #Click on button "Open Folder"<br /><br/>
                    <img src={Image1} alt="imageone" width="80%"/><br/><br/>
                    #Drag your folder to VS Code<br /><br/>
                    <img src={Image2} alt="imagetwo" width="80%"/><br/><br/>
                    #Click on righ button on your mouse and ctreate new file<br />
                    #Give name to it "index.html" and copy html code from <a href="https://codeme.cl/html">https://codeme.cl/html</a> website <br /><br/>
                    <img src={Image3} alt="imagethree" width="80%"/><br/><br/>
                </code>
                <h4 className="text-center pb-3">Step 3:  Create GitHub repository </h4>
                <code className="html__code">
                    #Go to GitHub <a href="https://github.com/">https://github.com/</a><br />
                    #In top right of screen click on plus and select "New repository"<br /><br/>
                    <img src={Image4} alt="imagefour" width="80%"/><br/><br/>
                    #Write Repository name and click "Create repository"<br /><br/>
                    <img src={Image5} alt="imagefive" width="80%"/><br/><br/>
                    #Click on copy icon and come back to VS Code<br /><br/>
                    <img src={Image6} alt="imagethree" width="80%"/><br/><br/>
                </code>
                <h4 className="text-center pb-3">Step 4:  Submit your local repository to GitHub </h4>
                <code className="html__code">
                    #Open terminal in your VS Code<br /><br/>
                    <img src={Image7} alt="imageseven" width="80%"/><br/><br/>
                    #Type in terminal following commands:<br />
                    git init <br/>
                    git add . <br/>
                    git commit -m "here could be any text" <br/>
                    #Remember in step 3 we click on icon and copy text that looks like this "https://github.com/yanachernova/my-first-repo.git" ?(dont copy mine copy yours) <br/>
                    #Now you need to paste it in following code: <br/>
                    git remote add origin https://github.com/yanachernova/my-first-repo.git <br/>
                    git push -u origin master<br/>
                </code>
                <h4 className="text-center pb-3">Step 5:  Congratulations! You upload your first repo to GitHub </h4>
                <code className="html__code">
                    #In your browser go back to GitHub and refresh webpage to see changes<br /><br/>
                    <img src={Image8} alt="imageeight" width="80%"/><br/><br/>
                    #And finally you can see repository that you had in your local in your GitHub<br />
                    
                </code>
            </article>
        </main >
    )
}

export default GithubLyout
