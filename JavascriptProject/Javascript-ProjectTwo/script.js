const containerEl=document.querySelector("#container");
const careers=["YouTuber","Web Developer","Freelancer","Indian"];


let carrerIndex=0;
let characterIndex=0;
updateText()
function updateText(){
    characterIndex++;
containerEl.innerHTML=
`<h1>I'm a ${careers[carrerIndex]
    .slice(0,characterIndex)}</h1>`;

if(characterIndex === careers
    [carrerIndex].length){
        carrerIndex++;
        characterIndex=0;
}
if(carrerIndex ===careers.length){
    carrerIndex=0;
}
setTimeout(updateText,400);
}
