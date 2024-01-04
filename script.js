document.querySelector('img').addEventListener('click', add);
let count = 0;
function add(){
    console.log("hi")
    count += 1;
    document.querySelector('p').innerHTML ="Clicks: " + count;
}
