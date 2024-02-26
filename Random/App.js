const btn = document.querySelectorAll("#emoji");

const emojis = [
  "😆",
  "😅",
  "🤣",
  "😂",
  "😀",
  "🤑",
  "🤨",
  "🙂",
  "😊",
  "😗",
  "😛",
  "😏",
  "🤥",
  "😴",
  "🥺",
  "😧",
  "😇",
  "😳",
  "🙃",
  "🥴",
  "🧐",
  "🤨",
  "😒",
  "🤔",
  "🤭",
  "🥰",
  "🤐",
  "😄",
  "🤔",
  "🤪",
  "😃",
  "😁",
  "😬",
];

for (let index = 0; index < btn.length; index++) {
   
    
    btn[index].addEventListener("mouseover" , ()=>{
        //console.log(Math.floor(Math.random()*2));
        btn[index].innerHTML = emojis[Math.floor(Math.random()*10)]; 
    });
}




// 
