// Use `Vibrant` in script
// https://jariz.github.io/vibrant.js/

Vibrant.from('images/VanGogh-OliveTrees.jpg').getPalette(function(err, palette) {
  for (let swatch in palette) {
    console.log(swatch, palette[swatch].getHex());
    
    const div = document.createElement("div");
    div.className = 'swatch';
    div.style.backgroundColor = palette[swatch].getHex();
    let element = document.getElementById("palette_container");
    element.appendChild(div);
  }
});