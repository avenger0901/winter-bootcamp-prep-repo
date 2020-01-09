const colorbox=document.getElementById('the-name');
const myInput=document.getElementById('colors');
const button=document.getElementById('colorbutton');

const colorchange=()=>{
    colorbox.style.color=myInput.value
}
button.addEventListener('click',colorchange);