const btns = document.querySelectorAll(".btn");
const body = document.body;



// console.log(btns);

btns.forEach((btn)=>{ 
    btn.addEventListener("click" , () =>{
        
        changeBackgroundColor(btn.value.slice(0,1));
    });
});

body.addEventListener("keypress" , (e)=>{
    console.log(e);
    changeBackgroundColor(e.key);
});


function changeBackgroundColor(color) {
    
        switch (color) {
            case "p":
              body.classList.add("purple");
              break;
            case "b":
              body.classList.add("blue");
              break;
            case "r":
              body.classList.add("red");
              break;
            case "g":
              body.classList.add("green");
              break;
            case "y":
              body.classList.add("yellow");
              break;
            case "t":
              body.classList.add("teal");
              break;
            default:
              break;
    }
    
}