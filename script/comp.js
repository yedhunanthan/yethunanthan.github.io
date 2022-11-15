let navbar = () =>{
    return`
        <div id="menu">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
        </div>

        <div id="icon">
            <a href="#"><img src="./Image/Icon.png"></a>
        </div>

        <div id="link">
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#techStack">Skill</a>
            <a href="#project">Projects</a>
            <a href="#contact">Contact</a>
        </div>
        <button>Resume</button>
    `
}

let footer = () =>{
    return`
    <p>Created from scratch with <img src="./Image/heart.png"></p>
    <p>© Copyright 2022</p>
    <p>All Right Reserved</p>
    `
}

export {navbar, footer};