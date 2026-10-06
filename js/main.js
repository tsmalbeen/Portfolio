const grilleProjets = document.querySelector("#grille-projets");
const grilleLab = document.querySelector("#grille-lab");
const filtres = document.querySelector("#filtres");
const fiche = document.querySelector("#fiche");
const ficheMedia = document.querySelector("#fiche-media");
const ficheCategorie = document.querySelector("#fiche-categorie");
const ficheTitre = document.querySelector("#fiche-titre");
const ficheResume = document.querySelector("#fiche-resume");
const ficheDetails = document.querySelector("#fiche-details");

const ICONE_LECTURE =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';

function el(balise, classe, texte) {
  const element = document.createElement(balise);
  if (classe) element.className = classe;
  if (texte) element.textContent = texte;
  return element;
}

function creerTags(liste, balise = "span") {
  const tags = el(balise === "span" ? "span" : "ul", "tags");
  for (const nom of liste) tags.append(el(balise, null, nom));
  return tags;
}

// Reconnaît un lien YouTube, Vimeo, ou un fichier vidéo local
function analyserVideo(url) {
  if (!url) return null;

  const youtube = url.match(
    /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/|live\/)|youtu\.be\/)([\w-]{11})/
  );
  if (youtube) return { type: "youtube", id: youtube[1] };

  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeo) return { type: "vimeo", id: vimeo[1] };

  return { type: "fichier", src: url };
}

function creerMiniature(element, video) {
  const miniatureYoutube = video && video.type === "youtube" && !element.image;
  const source =
    element.image ||
    (miniatureYoutube ? `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg` : "");

  if (source) {
    const img = document.createElement("img");
    img.src = source;
    img.alt = "";
    img.loading = "lazy";
    if (miniatureYoutube) {
      // Sans miniature HD, YouTube renvoie une vignette grise de 120 px : on repasse en qualité standard
      img.addEventListener("load", () => {
        if (img.naturalWidth <= 120) img.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
      });
    }
    return img;
  }

  // Fichier local sans image : on affiche la première image de la vidéo
  if (video && video.type === "fichier") {
    const apercu = document.createElement("video");
    apercu.src = `${video.src}#t=0.5`;
    apercu.muted = true;
    apercu.playsInline = true;
    apercu.preload = "metadata";
    apercu.tabIndex = -1;
    return apercu;
  }

  return null;
}

function creerCarteProjet(projet, index) {
  const video = analyserVideo(projet.video);

  const carte = el("button", "carte" + (projet.vedette ? " carte--vedette" : ""));
  carte.type = "button";
  carte.dataset.categorie = projet.categorie;

  const visuel = el("span", "carte__visuel");
  const miniature = creerMiniature(projet, video);
  if (miniature) {
    visuel.append(miniature);
  } else {
    // Pas encore de visuel : numéro du projet sur fond quadrillé
    visuel.append(el("span", "carte__numero", String(index + 1).padStart(2, "0")));
  }
  if (video) {
    const lecture = el("span", "carte__lecture");
    lecture.innerHTML = ICONE_LECTURE;
    visuel.append(lecture);
  }

  const corps = el("span", "carte__corps");
  corps.append(
    el("span", "etiquette", projet.categorie),
    el("span", "carte__titre", projet.titre),
    el("span", "carte__resume", projet.resume)
  );
  if (projet.technos) corps.append(creerTags(projet.technos.slice(0, 5)));

  carte.append(visuel, corps);
  carte.addEventListener("click", () => ouvrirFiche(projet, projet.categorie));
  return carte;
}

function creerCarteLab(experience) {
  const carte = el("button", "carte carte--lab");
  carte.type = "button";

  const corps = el("span", "carte__corps");
  corps.append(
    el("span", "statut", experience.statut),
    el("span", "carte__titre", experience.titre),
    el("span", "carte__resume", experience.resume)
  );
  if (experience.technos) corps.append(creerTags(experience.technos));

  carte.append(corps);
  carte.addEventListener("click", () => ouvrirFiche(experience, `Lab, ${experience.statut.toLowerCase()}`));
  return carte;
}

function creerMedia(element) {
  const video = analyserVideo(element.video);

  if (video && video.type === "fichier") {
    const lecteur = document.createElement("video");
    lecteur.src = video.src;
    lecteur.controls = true;
    lecteur.autoplay = true;
    lecteur.playsInline = true;
    return lecteur;
  }

  if (video) {
    const iframe = document.createElement("iframe");
    iframe.src =
      video.type === "youtube"
        ? `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`
        : `https://player.vimeo.com/video/${video.id}?autoplay=1`;
    iframe.title = element.titre;
    iframe.allow = "autoplay; fullscreen; picture-in-picture; encrypted-media";
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    return iframe;
  }

  if (element.image) {
    const img = document.createElement("img");
    img.src = element.image;
    img.alt = element.titre;
    return img;
  }

  return null;
}

function ajouterBloc(titre, contenu) {
  const bloc = el("div", "fiche-projet__bloc");
  bloc.append(el("h4", null, titre), contenu);
  ficheDetails.append(bloc);
}

function creerListe(elements) {
  const liste = el("ul", "fiche-projet__points");
  for (const texte of elements) liste.append(el("li", null, texte));
  return liste;
}

function ouvrirFiche(element, categorie) {
  const media = creerMedia(element);
  ficheMedia.replaceChildren();
  ficheMedia.hidden = !media;
  if (media) ficheMedia.append(media);

  ficheCategorie.textContent = [categorie, element.periode].filter(Boolean).join(", ");
  ficheTitre.textContent = element.titre;
  ficheResume.textContent = element.resume;

  ficheDetails.replaceChildren();
  if (element.contexte) ajouterBloc("Contexte", el("p", null, element.contexte));
  if (element.role) ajouterBloc("Rôle", el("p", null, element.role));
  if (element.points) ajouterBloc("Points clés", creerListe(element.points));
  if (element.resultats) ajouterBloc("Résultats", creerListe(element.resultats));
  if (element.technos) ajouterBloc("Technologies", creerTags(element.technos, "li"));
  if (element.galerie) {
    const galerie = el("div", "fiche-projet__galerie");
    for (const source of element.galerie) {
      const lien = lienExterne("", source);
      const img = document.createElement("img");
      img.src = source;
      img.alt = `${element.titre}, capture d'écran`;
      img.loading = "lazy";
      lien.append(img);
      galerie.append(lien);
    }
    ajouterBloc("Captures", galerie);
  }
  if (element.lien) {
    const lien = el("a", "bouton bouton--plein", element.lien.texte);
    lien.href = element.lien.url;
    lien.target = "_blank";
    lien.rel = "noopener";
    ficheDetails.append(lien);
  }

  fiche.showModal();
  fiche.scrollTop = 0;
}

function filtrer(categorie, boutonActif) {
  for (const bouton of filtres.children) {
    bouton.setAttribute("aria-pressed", String(bouton === boutonActif));
  }
  for (const carte of grilleProjets.children) {
    carte.hidden = categorie !== null && carte.dataset.categorie !== categorie;
  }
}

function creerFiltres() {
  const categories = [...new Set(PROJETS.map((p) => p.categorie))];
  if (categories.length < 2) return;

  [null, ...categories].forEach((categorie) => {
    const bouton = el("button", "filtre", categorie ?? "Tout");
    bouton.type = "button";
    bouton.setAttribute("aria-pressed", String(categorie === null));
    bouton.addEventListener("click", () => filtrer(categorie, bouton));
    filtres.append(bouton);
  });
}

function lienExterne(texte, url, classe) {
  const lien = el("a", classe, texte);
  lien.href = url;
  lien.target = "_blank";
  lien.rel = "noopener";
  return lien;
}

function afficherContact() {
  const zone = document.querySelector("#contact-liens");
  const reseaux = [
    ["GitHub", CONTACT.github],
    ["LinkedIn", CONTACT.linkedin],
  ].filter(([, url]) => url);

  if (CONTACT.email) {
    const mail = el("a", "contact__mail", CONTACT.email);
    mail.href = `mailto:${CONTACT.email}`;
    zone.append(mail);
  }

  if (reseaux.length) {
    const liste = el("div", "contact__reseaux");
    const heroActions = document.querySelector("#hero-actions");
    for (const [nom, url] of reseaux) {
      liste.append(lienExterne(nom, url, "bouton"));
      heroActions.append(lienExterne(nom, url, "bouton bouton--discret"));
    }
    zone.append(liste);
  }

  if (!CONTACT.email && !reseaux.length) {
    zone.append(el("p", "contact__vide", "Coordonnées à renseigner dans js/contenu.js"));
  }
}

// --- Démarrage ---

PROJETS.forEach((projet, index) => grilleProjets.append(creerCarteProjet(projet, index)));
LAB.forEach((experience) => grilleLab.append(creerCarteLab(experience)));
creerFiltres();
afficherContact();

// Fermeture de la fiche : bouton, clic à côté, ou touche Échap (gérée par <dialog>)
document.querySelector("#fiche-fermer").addEventListener("click", () => fiche.close());
fiche.addEventListener("click", (e) => {
  if (e.target === fiche) fiche.close();
});
// On vide le média pour couper le son à la fermeture
fiche.addEventListener("close", () => ficheMedia.replaceChildren());

// Apparition douce des éléments au défilement
const aReveler = document.querySelectorAll(
  ".section__entete, .carte, .parcours > *, .competence, .contact > *"
);
if ("IntersectionObserver" in window) {
  const observateur = new IntersectionObserver(
    (entrees) => {
      for (const entree of entrees) {
        if (entree.isIntersecting) {
          entree.target.classList.add("est-visible");
          observateur.unobserve(entree.target);
        }
      }
    },
    { threshold: 0.05 }
  );
  aReveler.forEach((element) => {
    element.classList.add("a-reveler");
    observateur.observe(element);
  });
}

document.querySelector("#annee").textContent = new Date().getFullYear();
