const WHITE_KEYS = ['z','x','c','v','b','n','m']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']


const keys = document.querySelectorAll('.key')
const whitekeys = document.querySelectorAll('.key.white')
const blackkeys = document.querySelectorAll('.key.black')


document.addEventListener("keydown", e =>{
    const key = e.key
    const whitekeyIndex = WHITE_KEYS.indexOf(key)
    const blackkeyIndex = BLACK_KEYS.indexOf(key)

    if(whitekeyIndex > -1) playNote(whitekeys[whitekeyIndex])
    if(blackkeyIndex > -1) playNote(blackkeys[blackkeyIndex])

})




keys.forEach(key =>{
    key.addEventListener('mouseover', ()=> playNote(key))
    key.addEventListener('click', ()=> playNote(key))
})
function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime=0
    noteAudio.play();
    key.classList.add('active')
    noteAudio.addEventListener('ended', () =>{
        key.classList.remove('active')
    })
}



// Color Selections
// let mybody = document.getElementsByClassName("mybody");
// let box1 = document.getElementsByClassName("box1");
// box1.addEventListener("click", ()=>{
//     if(mybody.style.color.background!="red"){
//         mybody.style.color.background="red"
//     }
// })

let mybody = document.getElementById("mybody")
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let text = document.getElementById("text")

b1.addEventListener("click", ()=>{

    mybody.style.background="red";
    text.style.color="white"

})
b2.addEventListener("click", ()=>{
    mybody.style.background="yellow";
    text.style.color="black"
    

})
b3.addEventListener("click", ()=>{
    mybody.style.background="orange";
    text.style.color="white"
})
b4.addEventListener("click", ()=>{
    mybody.style.background="green";
    text.style.color="white"
})
// mybody.style.background="#143fb1";
// Button Logic
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", ()=> btn1fun())
function btn1fun(){
    mybody.style.background="#143fb1";
}
b1.addEventListener("mouseover",()=> b1fun())
b2.addEventListener("mouseover",()=> b2fun())
b3.addEventListener("mouseover",()=> b3fun())
b4.addEventListener("mouseover",()=> b4fun())








// btn1.addEventListener("click", ()=>{
//     if(mybody.style.background !="#143fb1"){
//         mybody.style.background="#143fb1"
//     }
// });
// btn1.addEventListener("onmouseover", ()=>{
//     if(mybody.style.background !="#143fb1"){
//         mybody.style.background="#143fb1"
//     }
// });
// btn1.addEventListener("onmouseover", btnfun());
// function btnfun(){
//     if(mybody.style.background !="#143fb1"){
//         mybody.style.background="#143fb1"
//     }
// }
// btnfun();