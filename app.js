console.log("Jay shree ram");

let movementField1 = document.getElementById("name_assets");

movementField1.addEventListener("mousemove",function(e)
{
    let x = e.clientX;
    let y = e.clientY;
    // console.log(x,y);

    let asset2 = document.getElementById("asset2");
    let asset3 = document.getElementById("asset3");
    
    asset2.style.transform = `translate(${x*0.02}px,${y*0.08}px)`;
    asset3.style.transform = `translate(-${x*0.02}px,-${y*0.08}px)`;
    asset2.style.transformStyle = "preserve-3d";
    asset3.style.transformStyle = "preserve-3d";

});

let movementField2 = document.getElementById("image_intro");

movementField2.addEventListener("mousemove",function(e)
{
    let x = e.clientX;
    let y = e.clientY;
    // console.log(x,y);

    let asset4 = document.getElementById("asset4");
    let asset5 = document.getElementById("asset5");

    asset4.style.transform = `translate(${x*0.02}px,${y*0.02}px)`; 
    asset5.style.transform = `translate(-${x*0.02}px,-${y*0.02}px)`; 
    asset4.style.transformStyle = "preserve-3d";
    asset5.style.transformStyle = "preserve-3d";
});

let card_transition = document.querySelectorAll(".project-card");
console.log(card_transition);

card_transition.forEach((element) => {

    element.style.transitionDuration = "800ms";

    element.addEventListener("mouseover", function()
    {
        element.style.transform = "scale3d(1.05, 1.05, 1.01)";
        
    })

    element.addEventListener("mouseout", function()
    {
        element.style.transform = "scale3d(1, 1, 1)";
    })
});

// let i = 0; 

function move()
{
    let html = document.getElementById("html");
    let css = document.getElementById("css");
    let js = document.getElementById("js");
    let figma = document.getElementById("figma");
    let language = document.getElementById("language");
    let dsa = document.getElementById("dsa");

    let widthH = 0;let widthC = 0;let widthJ = 0;let widthF = 0;let widthL = 0;let widthD = 0;

    let idHTML = setInterval(()=>
    {       
        widthH++;
        html.style.width = widthH + "%";
        html.innerHTML = widthH + "%";

        if(widthH >= 90)
        {
            clearInterval(idHTML);
        }        
    },35)

    let idCSS = setInterval(()=>
    {       
        widthC++;
        css.style.width = widthC + "%";
        css.innerHTML = widthC + "%";

        if(widthC >= 75)
        {
            clearInterval(idCSS);
        }        
    },35)

    let idJS = setInterval(()=>
    {       
        widthJ++;
        js.style.width = widthJ + "%";
        js.innerHTML = widthJ + "%";

        if(widthJ >= 60)
        {
            clearInterval(idJS);
        }        
    },35)

    let idfigma = setInterval(()=>
    {       
        widthF++;
        figma.style.width = widthF + "%";
        figma.innerHTML = widthF + "%";

        if(widthF >= 80)
        {
            clearInterval(idfigma);
        }        
    },35)

    let idLanguage = setInterval(()=>
    {       
        widthL++;
        language.style.width = widthL + "%";
        language.innerHTML = widthL + "%";

        if(widthL >= 75)
        {
            clearInterval(idLanguage);
        }        
    },35)

    let idDSA = setInterval(()=>
    {       
        widthD++;
        dsa.style.width = widthD + "%";
        dsa.innerHTML = widthD + "%";

        if(widthD >= 70)
        {
            clearInterval(idDSA);
        }        
    },35)

    
}
move();
setInterval(()=>
{    move();
},7000)

let movementField3 = document.getElementById("contact");

movementField3.addEventListener("mousemove",function(e)
{
    let x = e.clientX;
    let y = e.clientY;
    // console.log(x,y);

    let asset12 = document.getElementById("asset12");

    asset12.style.transform = `translate(${x*0.02}px,${y*0.02}px)`; 
    asset12.style.transformStyle = "preserve-3d";
});

let anchor = document.querySelectorAll("a");
console.log(anchor);

anchor.forEach((elem) => 
{
    elem.style.transitionDuration = `600ms`;    
    elem.addEventListener("mouseover",()=>
    {
        elem.style.color = `hsla(0, 0%, 100%, 0.6)`;
    })

    elem.addEventListener("mouseout",()=>
    {
        elem.style.color = `white`;
    })
})

let mobile_nav = document.getElementById("mobile-nav");
let mobile_menu = document.getElementById("mobile-menu");

mobile_nav.addEventListener("click",()=>
{
    console.log("jil");
    console.log(mobile_menu.classList);

    if(mobile_menu.classList.contains("mobile-menu-hide") == true)
    {
        mobile_menu.classList.remove("mobile-menu-hide");
        mobile_menu.classList.add("mobile-menu-show");
    }
    // if(mobile_menu.classList.contains("mobile-menu-show") === false)
    else{
        mobile_menu.classList.add("mobile-menu-hide");
        mobile_menu.classList.remove("mobile-menu-show");
    }
})
