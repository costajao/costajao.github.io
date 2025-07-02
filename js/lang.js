document.addEventListener("DOMContentLoaded", function () {
    const langToggle = document.getElementById("lang-toggle");
    let currentLang = "en";
  
    function setLanguage(lang) {
      fetch("json/lang.json")
        .then(res => res.json())
        .then(data => {
          document.getElementById("hero-greeting").innerHTML  = data[lang].hero_greeting;
          document.getElementById("hero-name").innerHTML  = data[lang].hero_name;
          document.getElementById("hero-role-one").innerHTML  = data[lang].hero_role_one;
          document.getElementById("hero-role-two").innerHTML  = data[lang].hero_role_two;
          document.getElementById("hero-subtitle").innerHTML  = data[lang].hero_subtitle;
          document.getElementById("about-one").innerHTML  = data[lang].about_one;
          document.getElementById("about-two").innerHTML  = data[lang].about_two;
          document.getElementById("work-vale").innerHTML  = data[lang].work_vale;
          document.getElementById("work-bb").innerHTML  = data[lang].work_bb;
          document.getElementById("work-sefaz").innerHTML  = data[lang].work_sefaz;
          document.getElementById("work-cda").innerHTML  = data[lang].work_cda;
          document.getElementById("contact-title").innerHTML  = data[lang].contact_title;
          document.getElementById("contact-text").innerHTML  = data[lang].contact_text;
  
          currentLang = lang;
          langToggle.src =
            lang === "en"
              ? "https://hatscripts.github.io/circle-flags/flags/br.svg"
              : "https://hatscripts.github.io/circle-flags/flags/us.svg";
          langToggle.alt = lang === "en" ? "Português" : "English";
        });
    }
  
    langToggle.addEventListener("click", function (e) {
      e.preventDefault();
      const newLang = currentLang === "en" ? "pt" : "en";
      setLanguage(newLang);
    });
  
    setLanguage(currentLang);
  });
  