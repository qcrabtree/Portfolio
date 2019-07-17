function classHas(base, has) {
  const arr = base.split(" ")
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === has) 
      return true;
  }
}

function play(){
  let audio = document.getElementById("audio");
  audio.play();
}




function classReplace(base, replace, next) {
  return base.replace(replace, next)
}

function onBtnClick() {
  const block = document.getElementById("block");
  const btn = document.getElementById("btn");
  const overlay = document.getElementById("overlay");

  if (classHas(block.className, "div-show")) {
    block.className = classReplace(block.className, "div-show", "div-hidden", "card-img-top")
    btn.innerHTML = "<img src=\"./new assets/gauntlet2.jpeg\" width=\"610px\" height=\"352px\">";
    const content = block.innerHTML;
    this.audio.play();
    overlay.innerHTML = "<div class=\"div-overlay div-overlay-left\">" + content + "</div>" + "<div class=\"div-overlay div-overlay-right\">" + content + "</div>" + "<div class=\"card-img-top\">" + "</div>";
  } else {
    block.className = classReplace(block.className, "div-hidden", "div-show", "card-img-top")
    btn.innerHTML = "<img src=\"./new assets/gauntlet2.jpeg\" width=\"610px\" height=\"352px\">";
    overlay.innerHTML = null;
  }
}