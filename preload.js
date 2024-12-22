function changeCSSonLoad(){

    let ele1  = document.querySelector('123-some large class list > div > div.flex.h-full.flex-1.flex-col.md\\:pl-\\)');
    let ele2  = document.querySelector('456-some large class list > div > div.flex.h-full.flex-1.flex-col.md\\:pl-\\)');
    let ele3  = document.querySelector('789-some large class list > div > div.flex.h-full.flex-1.flex-col.md\\:pl-\\)');

    ele2.style.display = "none";
    ele3.style.display = "none";
    ele4.style.display = "none";



    console.log("IT WERRRRKS")

}

setTimeout(function(){ changeCSSonLoad(); }, 1000);