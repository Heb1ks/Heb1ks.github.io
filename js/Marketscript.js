$(document).ready(function () {
  const skins = [
    { name: "AK-47 | Anubis", category: "rifle", price: 35.3, img: "images/Ak/Ak_Anubis.webp" },
    { name: "AK-47 | Azimov", category: "rifle", price: 56.2, img: "images/Ak/Ak_Azimov.webp" },
    { name: "AK-47 | Elite Build", category: "rifle", price: 2.3, img: "images/Ak/Ak_EliteBuild.webp" },
    { name: "AK-47 | Fire Serpent", category: "rifle", price: 3501.2, img: "images/Ak/Ak_FireSerpent.webp" },
    { name: "AK-47 | Frontside Misty", category: "rifle", price: 15.8, img: "images/Ak/Ak_FrontsideMisty.webp" },
    { name: "AK-47 | Outsiders", category: "rifle", price: 8.65, img: "images/Ak/Ak_Outsiders.webp" },
    { name: "AK-47 | Safari Mesh", category: "rifle", price: 0.9, img: "images/Ak/Ak_SafariMesh.webp" },
    { name: "AK-47 | Slate", category: "rifle", price: 4.49, img: "images/Ak/Ak_Slate.webp" },
    { name: "AK-47 | Vulkan", category: "rifle", price: 854.76, img: "images/Ak/Ak_Vulkan.webp" },
    { name: "AK-47 | Wild Lotus", category: "rifle", price: 18038, img: "images/Ak/Ak_WildLotus.webp" },

    { name: "M4A4 | Buzz Kill", category: "rifle", price: 923.23, img: "images/M4a4/M4a4_BuzzKill.webp" },
    { name: "M4A4 | Converter", category: "rifle", price: 1.07, img: "images/M4a4/M4a4_Converter.webp" },
    { name: "M4A4 | Neo-Noir", category: "rifle", price: 35.12, img: "images/M4a4/M4a4_NeoNoir.webp" },
    { name: "M4A4 | Temukau", category: "rifle", price: 41.00, img: "images/M4a4/M4a4_Temukau.webp" },
    { name: "M4A4 | Tornado", category: "rifle", price: 7.02, img: "images/M4a4/M4a4_Tornado.webp" },

    { name: "Glock-18 | Bullet Queen", category: "pistol", price: 59.99, img: "images/Glock/Glock_BulletQueen.webp" },
    { name: "Glock-18 | Candy Apple", category: "pistol", price: 4.59, img: "images/Glock/Glock_CandyApple.webp" },
    { name: "Glock-18 | Neo-Noir", category: "pistol", price: 39.12, img: "images/Glock/Glock_Neo-noir.webp" },
    { name: "Glock-18 | Nuclear Garden", category: "pistol", price: 9.11, img: "images/Glock/Glock_Nucleat.webp" },
    
    { name: "AWP | Atheris", category: "sniper", price: 15.94, img: "images/Awp/AWP_Atheris.webp" },
    { name: "AWP | BOOM", category: "sniper", price: 631.11, img: "images/Awp/AWP_BOOM.png" },
    { name: "AWP | Desert Hydra", category: "sniper", price: 3568, img: "images/Awp/AWP_Desert_Hydra.png" },
    { name: "AWP | Lightning Strike", category: "sniper", price: 567.77, img: "images/Awp/AWP_Lightning.webp" },
    { name: "AWP | Neo-Noir", category: "sniper", price: 68, img: "images/Awp/AWP_NeoNoir.webp" },
    { name: "AWP | Printstream", category: "sniper", price: 361.72, img: "images/Awp/AWP_Printstream.webp" },
    { name: "AWP | Red Line", category: "sniper", price: 73, img: "images/Awp/AWP_RedLine.webp" },
    { name: "AWP | Dragon Lore", category: "sniper", price: 12308.99, img: "images/Awp/DragonLore.avif" },

    { name: "Desert Eagle | Code Red", category: "pistol", price: 181, img: "images/Deagle/Deagle_CodeREd.webp" },
    { name: "Desert Eagle | Mecha Industries", category: "pistol", price: 6.88, img: "images/Deagle/Deagle_MechaIndust.webp" },
    { name: "Desert Eagle | Printstream", category: "pistol", price: 85, img: "images/Deagle/Deagle_Prtintstream.webp" },
    { name: "Desert Eagle | Tilted", category: "pistol", price: 0.82, img: "images/Deagle/Deagle_Tilted.webp" },

    { name: "M4a1-S| Chantico's Fire", category: "rifle", price: 499.11, img: "images/M4a1s/M4a1s_Chantico.webp" },
    { name: "M4a1-S| Cyrex", category: "rifle", price: 225, img: "images/M4a1s/M4a1s_Cyrex.webp" },
    { name: "M4a1-S| Fizyy POP", category: "rifle", price: 1.62, img: "images/M4a1s/M4a1s_FizzyPOP.webp" },
    { name: "M4a1-S| Flashback", category: "rifle", price: 3.3, img: "images/M4a1s/M4a1s_Flasback.webp" },
    { name: "M4a1-S| Guardian", category: "rifle", price: 51.4, img: "images/M4a1s/M4a1s_Guardian.webp" },
    { name: "M4a1-S| Hot Rod", category: "rifle", price: 2800, img: "images/M4a1s/M4a1s_HotRod.webp" },
    { name: "M4a1-S| Mecha Industries", category: "rifle", price: 93.12, img: "images/M4a1s/M4a1s_Mecha.webp" },

    { name: "MAC-10 | Allure", category: "smg", price: 1.81, img: "images/Mac10/Mac_Allure.webp" },
    { name: "MAC-10 | Disco Tech", category: "smg", price: 4.99, img: "images/Mac10/Mac_DiscoTech.webp" },
    { name: "MAC-10 | Noen Rider", category: "smg", price: 90.28, img: "images/Mac10/Mac_NeonRider.webp" },
    { name: "MAC-10 | Propoganda ", category: "smg", price: 112, img: "images/Mac10/Mac_Propoganda.webp" },

    { name: "SSG 08 | Abyss", category: "sniper", price: 0.36, img: "images/Ssg08/SSG08_Abyss.webp" },
    { name: "SSG 08 | Acid Fade", category: "sniper", price: 1.11, img: "images/Ssg08/SSG08_AcidFade.webp" },
    { name: "SSG 08 | Big Iron", category: "sniper", price: 9.72, img: "images/Ssg08/SSG08_BigIron.webp" },
    { name: "SSG 08 | Dragonfire", category: "sniper", price: 181.11, img: "images/Ssg08/SSG08_Dragonfire.webp" },

    { name: "Tec-9 | Citric Acid", category: "pistol", price: 0.48, img: "images/Tec9/Tec_CitricAcid.webp" },
    { name: "Tec-9 | Fuel Injector", category: "pistol", price: 45.46, img: "images/Tec9/Tec_FuelInjector.webp" },
    { name: "Tec-9 | Red Quartz", category: "pistol", price: 0.41, img: "images/Tec9/Tec_RedQuartz.webp" },
    { name: "Tec-9 | Whiteout", category: "pistol", price: 270, img: "images/Tec9/Tec_Whiteout.webp" },

    { name: "USP-S | Check Engine", category: "pistol", price: 1.01, img: "images/Usp/Usp_CheckEngine.webp" },
    { name: "USP-S | Cortex", category: "pistol", price: 3.89, img: "images/Usp/Usp_Cortex.webp" },
    { name: "USP-S | Neo-Noir", category: "pistol", price: 137, img: "images/Usp/Usp_Neo-Noir.webp" },
    { name: "USP-S | Printstream", category: "pistol", price: 117.14, img: "images/Usp/Usp_Printstream.webp" },

    { name: "Butterfly Knife | Gamma Doppler", category: "knife", price: 506.11, img: "images/Knife/Butterfly_BrightWater.webp" },
    { name: "Bayonet Knife | Doppler", category: "knife", price: 559, img: "images/Knife/Bayonet_Doppler.webp" },
    { name: "Bowie Knife | Gamma Doppler", category: "knife", price: 289.3, img: "images/Knife/Bowie_Doppler.webp" },
    { name: "Bowie Knife | Rust Coat", category: "knife", price: 59.86, img: "images/Knife/Bowie_rustCoat.png" },
    { name: "Falchion Knife | Black Laminate ", category: "knife", price: 122.2, img: "images/Knife/Falchion_Laminate.webp" },
    { name: "Falchion Knife | Lore", category: "knife", price:168.2, img: "images/Knife/Falchion_Lore.webp" },
    { name: "Flip Knife | Doppler", category: "knife", price: 400.13, img: "images/Knife/FlipKnife_Dopplet.webp" },
    { name: "Huntsman Knife | Gamma Doppler", category: "knife", price: 266, img: "images/Knife/Huntsman_Dopler.webp" },
    { name: "Huntsman Knife | Black Laminate" , category: "knife", price: 194.43, img: "images/Knife/Huntsman_Laminate.webp" },
    { name: "Kukri Knife | Fade", category: "knife", price: 244, img: "images/Knife/Kukri_Fade.webp" },
    { name: "Nomad Knife | Marble Fade", category: "knife", price: 294, img: "images/Knife/Nomad_MarbleFade.webp" },
    { name: "Shadow Daggers | Gamma Doppler", category: "knife", price: 143, img: "images/Knife/ShadowDaggers_Doppler.webp" },
    { name: "Shadow Daggers | Freehand", category: "knife", price: 75, img: "images/Knife/ShadowDaggers_Freehand.webp" },
    { name: "Skeleton Knife | Vanila", category: "knife", price: 308.4, img: "images/Knife/Skeleton_Vanila.webp" },
    { name: "Stiletto Knife | Vanila", category: "knife", price: 203.04, img: "images/Knife/Stiletto_Vanila.webp" },
    { name: "Taloon Knife | Rust Coat", category: "knife", price: 228.74, img: "images/Knife/Taloon_RustCoat.webp" },
    { name: "Taloon Knife | Doppler", category: "knife", price: 898.2, img: "images/Knife/TaloonKnife_dopler.avif" },
    { name: "Ursus Knife | Marble Fade", category: "knife", price: 185, img: "images/Knife/Ursus_MarbleFade.webp" },

    { name: "Moto Gloves | Polygon", category: "glove", price: 836.31, img: "images/Gloves/Moto_Polygon.webp" },
    { name: "Moto Gloves | POW!", category: "glove", price: 523, img: "images/Gloves/Moto_POW.webp" },
    { name: "Driver Gloves | Imperial Plaid", category: "glove", price: 1291, img: "images/Gloves/Driver_ImperialPlaid.webp" },
    { name: "Hand Wraps | Overprint", category: "glove", price: 89.12, img: "images/Gloves/Hand_Overprint.webp" },
    { name: "Hydra Gloves | Case Harderned", category: "glove", price: 314, img: "images/Gloves/Hydra_CaseHarderned.webp" },
    { name: "Hydra Gloves | Rattler", category: "glove", price: 43.83, img: "images/Gloves/Hydra_Rattler.webp" },
    { name: "Sport Gloves | Bronze Morph", category: "glove", price: 873.51, img: "images/Gloves/Sport_BronzeMorph.webp" },
    { name: "Sport Gloves | Vice", category: "glove", price: 11790.00, img: "images/Gloves/Sport_Vice.webp" },
    { name: "Specialist Gloves | Fade", category: "glove", price: 2807.1, img: "images/Gloves/Specialist_Fade.webp" },

    

  ];

  const container = $("#itemContainer");

  // === функция отображения карточек ===
  function displaySkins(filteredSkins) {
    container.empty();
    filteredSkins.forEach((skin) => {
      const card = `
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card item-card">
            <img src="${skin.img}" class="card-img-top" alt="${skin.name}">
            <div class="card-body">
              <h5 class="card-title">${skin.name}</h5>
              <p class="price">$${skin.price.toFixed(2)}</p>
              <button class="btn btn-buy">Buy Now</button>
            </div>
          </div>
        </div>`;
      container.append(card);
    });
  }

  // === показать все при загрузке ===
  displaySkins(skins);

  // === поиск по названию ===
  $("#searchInput").on("keyup", function () {
    const value = $(this).val().toLowerCase();
    const filtered = skins.filter((s) => s.name.toLowerCase().includes(value));
    displaySkins(filtered);
  });

  // === фильтр по категории ===
  $(".category-list li").click(function () {
    $(".category-list li").removeClass("active");
    $(this).addClass("active");

    const category = $(this).data("category");
    const filtered =
      category === "all" ? skins : skins.filter((s) => s.category === category);
    displaySkins(filtered);
  });

  // === фильтр по цене ===
  $("#priceRange").on("input", function () {
    const maxPrice = parseFloat($(this).val());
    const filtered = skins.filter((s) => s.price <= maxPrice);
    displaySkins(filtered);
  });
});
