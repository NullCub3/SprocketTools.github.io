const pageTitle = document.title;
const pages = {
  Home: "index.html",
  Gear_Calculator: "TopGearCalculator.html",
  Contests: "ContestsList.html",
  Random_Tank_Picker: "VehicleGenerator.html",
  Guides: "resources.html",
  Credits: "credits.html",
  Get_Trolled: "https://www.youtube.com/watch?v=p7YXXieghto",
  Decal_Catalog: "Decals/DecalsFeatured.html",
  RGB_Decal_Maker: "Decals/DecalsRGBmaker.html",
};

var i = 0;
var list = '<div class="navbar">\n<img src="assets/SprocketToolsLogo.png">\n';
for (p in pages) {
  let pname = p.replace(/_/g, " ");
  let url = pages[`${p}`];
  if (new RegExp(`.*${pname}.*`).test(pageTitle)) {
    list += `<a class="active" href="${pages[`${p}`]}">${pname}</a>\n`;
  } else {
    list += `<a href="${url}">${pname}</a>\n`;
  }
}

console.log(pageTitle);
console.log(pages);
console.log(list);

const header = list + "</div>";

const style =
  '<link rel="icon" type="image/x-icon" href="assets/SprocketToolsLogo.png">';

function add_items() {
  document.body.innerHTML = header + document.body.innerHTML;
  document.head.innerHTML = style + document.head.innerHTML;
}

console.log(document);
window.addEventListener("load", add_items);
