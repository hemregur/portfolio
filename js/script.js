let button2 = document.querySelector(".iconHand");
let handButton = document.querySelector(".iconSimsek");
let container = document.querySelector("body");
let domLinesBg = document.querySelector(".linesBg");
let dompSubTitle = document.querySelector(".pSubTitle");
let loveElement= null; 
let loveItems = ["love","love"];
let pawElement = document.querySelector(".iconPaw img");
let catElement = document.querySelector(".cat img");
handButton.addEventListener("click", ()=>{
    let loveDom = document.querySelector(".love");
    
    let loveItemSelect = loveItems[Math.floor(Math.random()*(loveItems.length))];
    loveDom.innerHTML+=`<img class="loveAnimation" src="./media/icons/${loveItemSelect}.png" alt="" srcset="">`;
    
    loveElement = document.querySelectorAll(".loveAnimation");
    
    setTimeout(()=>{ 
        for(let i = 0; i<loveElement.length-1; i++){
                loveElement[i].remove();
        } 
    },1500);
});
button2.addEventListener("click", function(){
    button2 = document.querySelector(".iconHand");
    container = document.querySelector("body");
    button2.classList.remove("sunAnimation");
    catElement.classList.remove("catAnimation");
    pawElement.classList.remove("pawAnimation");
        setTimeout(()=>{
            pawElement.classList.add("pawAnimation");
            catElement.classList.add("catAnimation");
        },1)
    setTimeout(()=>{
        setTimeout(()=>{
            button2.classList.add("sunAnimation"); 
        }, 1);
        if(container.classList.contains("dark")){ 
            container.classList.remove("dark");
            setTimeout(()=>{
                button2.innerHTML='<img class="rotate" src="./media/icons/sunn.png" alt="" srcset="">';
            },300);
        }else{ 
            container.classList.add("dark"); 
            setTimeout(()=>{
                button2.innerHTML='<img class="rotate" src="./media/icons/moonn.png" alt="" srcset="">';
            },300);
      }
    },600)

});
