import {navbar,footer} from "../script/comp.js"

document.getElementById("nav").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();

let hamburger = document.querySelector("#menu");
let link = document.querySelector("#link");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    link.classList.toggle("active");
})

let button = document.querySelectorAll("button");

button.forEach((x) => {
    x.addEventListener("click", ()=>{
        let link = x.innerText;
        let url;
        if(link == "Resume"){
            let file = 'File/Yethu_Nanthan_Resume.pdf'

            let dwnld =  document.createElement('a');
            dwnld.href = file;
            dwnld.download = file.substring(file.lastIndexOf('/') + 1);
            dwnld.click();
            
            url = "https://drive.google.com/file/d/1XlVIiCBZgo6ttXjd3Jqz5J6Z-HYOqDfc/view?usp=sharing";
            window.open(url);

        }else if(link == "GitHub"){
            url = "https://github.com/yedhunanthan"

            window.open(url);
        }
        else if(link == "Github"){

            if(x.value == "blue"){
                url = "https://github.com/rajshekar11/dangerous-smash-6971";
            }else if(x.value == "boat"){
                url = "https://github.com/rameshmane7218/apollo-Project"
            }else if(x.value == "payment"){
                url = "https://github.com/yedhunanthan/geekbuying"
            }

            window.open(url);
        }else if(link == "Live"){

           if(x.value == "boat"){
                url = "https://beautiful-liger-b337d8.netlify.app/"
            }else if(x.value == "payment"){
                url = "https://yedhunanthan.github.io/geekbuying/"
            }

            window.open(url);
        }
        else if(link == "LinkedIn"){
            url = "https://www.linkedin.com/in/yethu-nandhan-s-38348418a/";
            window.open(url);
        }
        
    })})