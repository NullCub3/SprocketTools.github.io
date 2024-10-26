export const globalPages = {
  Home: "/index.html",
  Gear_Calculator: "/TopGearCalculator.html",
  Contests: "/contests/index.html",
  Random_Tank_Picker: "/VehicleGenerator.html",
  Guides: "/resources.html",
  Credits: "/credits.html",
  Get_Trolled: "https://www.youtube.com/watch?v=p7YXXieghto",
  Decal_Catalog: "/Decals/DecalsFeatured.html",
  RGB_Decal_Maker: "/Decals/DecalsRGBmaker.html",
};

export function buildNav(pl, pt = "", c = "navbar", img = true) {
  let list = `<div class="${c}">\n`;

  if (img) {
    list += '<img src="/assets/SprocketToolsLogo.png">\n';
  }

  for (let p in pl) {
    let pname = p.replace(/_/g, " ");
    let url = pl[`${p}`];

    if (new RegExp(`.*${pname}.*`).test(pt)) {
      list += `<a class="active" href="${pl[`${p}`]}">${pname}</a>\n`;
    } else {
      list += `<a href="${url}">${pname}</a>\n`;
    }
  }
  let finalBar = `${list}</div>`;
  return finalBar;
}

export function makePage(doc, h = "", s = "") {
  doc.body.innerHTML = h + doc.body.innerHTML;
  doc.head.innerHTML = s + doc.head.innerHTML;
}
