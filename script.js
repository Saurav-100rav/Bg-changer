alert("Click on color to change background color of screen.\nYou can also enter color name to see respective background color")
const color_bar = document.querySelector(".color-bar");
const btn_arr = document.getElementsByTagName("button");
console.log(typeof(btn_arr),btn_arr.length);
// console.log(getComputedStyle(btn_arr[0]).backgroundColor);


for(let i=1;i<btn_arr.length;i++){
    // console.log(getComputedStyle(btn_arr[i]).backgroundColor);
    const color = getComputedStyle(btn_arr[i]).backgroundColor
    btn_arr[i].addEventListener("click",()=>{
        document.getElementsByClassName('container')[0].style.backgroundColor = color;
    })
}

document.getElementById("submit").addEventListener("click",()=>{
    console.log("clicked");
    const color = document.getElementById("text").value;
    console.log(color);
    document.getElementsByClassName('container')[0].style.backgroundColor = color;
})

