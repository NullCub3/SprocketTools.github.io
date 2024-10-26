import * as navbar from "/scripts/buildNavBar.js";
const pageTitle = document.title;

const contestPages = {
  Featured: "/Decals/index.html",
  Chalk: "/Decals/Chalk.html",
  Contribute_your_own: "/Decals/Contribute.html",
  Fictional_Insignia: "/Decals/Fictional Insignia.html",
  Historical_Insignia: "/Decals/Historical Insignia.html",
  Inscriptions: "/Decals/Inscriptions.html",
  Labels: "/Decals/Labels.html",
  Letters: "/Decals/Letters.html",
  Memes: "/Decals/Memes.html",
  Miscellaneous: "/Decals/Miscellaneous.html",
  Numbers: "/Decals/Numbers.html",
  Optics: "/Decals/Optics.html",
  Seams: "/Decals/Seams.html",
  Symbols: "/Decals/Symbols.html",
  Textures: "/Decals/Textures.html",
  Weathering: "/Decals/Weathering.html",
  Welding: "/Decals/Welding.html",
};

window.addEventListener(
  "load",
  navbar.makePage(
    document,
    navbar.buildNav(
      contestPages,
      pageTitle,
      "container center navbar",
      '<h1 class="text-center">Decal Catalog</h1>\n',
    ),
  ),
);
