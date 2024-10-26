import * as navbar from "/scripts/buildNavBar.js";
const pageTitle = document.title;

const contestPages = {
  Featured: "/Decals/DecalsFeatured.html",
  Chalk: "/Decals/DecalsChalk.html",
  Fictional_Insignia: "/Decals/DecalsFictional Insignia.html",
  Historical_Insignia: "/Decals/DecalsHistorical Insignia.html",
  Inscriptions: "/Decals/DecalsInscriptions.html",
  Labels: "/Decals/DecalsLabels.html",
  Letters: "/Decals/DecalsLetters.html",
  Miscellaneous: "/Decals/DecalsMiscellaneous.html",
  Memes: "/Decals/DecalsMemes.html",
  Numbers: "/Decals/DecalsNumbers.html",
  Optics: "/Decals/DecalsOptics.html",
  Seams: "/Decals/DecalsSeams.html",
  Symbols: "/Decals/DecalsSymbols.html",
  Textures: "/Decals/DecalsTextures.html",
  Weathering: "/Decals/DecalsWeathering.html",
  Welding: "/Decals/DecalsWelding.html",
  Contribute_your_own: "/Decals/DecalsContribute.html",
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
