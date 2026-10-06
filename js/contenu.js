/*
  TOUT LE CONTENU ÉVOLUTIF DU SITE EST ICI : contact, projets, lab.

  Champs d'un projet (seuls titre, categorie et resume sont obligatoires) :
    titre        Nom du projet
    categorie    Sert aux filtres (créés automatiquement)
    periode      Date ou durée, ex. "2024 – 2025" ou "4 mois"
    resume       Une phrase, affichée sur la carte
    contexte     Le contexte et le problème à résoudre
    role         Ce que tu as fait
    points       Liste de points clés : ["...", "..."]
    resultats    Liste de résultats : ["...", "..."]
    technos      Liste de technologies : ["Unity", "C#"]
    lien         { texte: "Voir le projet", url: "https://..." }
    video        Lien YouTube, lien Vimeo, ou fichier "assets/videos/demo.mp4"
    image        Capture principale, ex. "assets/images/projet.jpg"
    galerie      Captures supplémentaires : ["assets/images/a.jpg", "..."]
    vedette      true = carte en grand format

  Les éléments du LAB utilisent les mêmes champs, avec "statut" à la place
  de "categorie".

  Attention : GitHub refuse les fichiers de plus de 100 Mo. Pour les vidéos
  lourdes, passe par YouTube ou Vimeo et colle le lien.
*/

// Laisse un champ vide ("") pour masquer le lien correspondant.
const CONTACT = {
  email: "tsmalbeen@gmail.com",
  github: "",
  linkedin: "https://www.linkedin.com/in/tristan-smalbeen-443681a7",
};

const PROJETS = [
  {
    titre: "Formations VR pour France Travail",
    categorie: "Simulation et formation",
    periode: "Janv. 2024 – janv. 2025",
    resume:
      "Trois modules de formation en réalité virtuelle pour faire découvrir des métiers industriels.",
    contexte:
      "Projet Reviatech mené avec SJT et France Travail, à Paris. Nous étions trois, un graphiste, un développeur et moi comme chef de projet technique.",
    role: "Chef de projet technique, du cahier des charges à la livraison.",
    points: [
      "Cahier des charges, propositions et écriture des scénarios, validation avec le client",
      "Plans et références visuelles pour le graphiste, plan de tâches détaillé pour le développeur",
      "Conception en amont de la structure du projet et des outils d'interaction, d'animation et de scénarisation",
      "Suivi d'avancement de l'équipe et développement des interactions complexes",
      "Tests, corrections, build final et packaging (readme, tutoriels d'installation)",
      "Livraison et démonstrations chez le client",
    ],
    resultats: [
      "Formation intégrée dans différents centres France Travail",
      "Commande de deux nouveaux modules après le succès du premier",
      "Outils réutilisables pour accélérer la création de formations scénarisées",
    ],
    technos: ["Unity", "C#", "Meta Quest 3", "Mecanim", "Cascadeur", "Mixamo", "Blender", "Git"],
    image: "assets/images/france-travail-0.jpg",
    galerie: ["assets/images/france-travail-1.jpg"],
    vedette: true,
  },
  {
    titre: "Matform pour Bouygues Construction",
    categorie: "Simulation et formation",
    periode: "4 mois",
    resume:
      "Formation à l'installation de plateformes de travail dans le bâtiment, en VR et sur tablette.",
    contexte:
      "Projet Reviatech. Nous étions trois, un graphiste, un chef de projet et moi comme lead développeur.",
    role: "Lead développeur.",
    points: [
      "Intégration de l'environnement 3D (scènes, objets, lumières)",
      "Outils de génération de QCM interactifs, compatibles VR et tablette",
      "Interactions utilisateur (saisie d'objets, glissières)",
      "Scénario (introduction, présentation des exercices, score, fin d'exercice)",
      "Interfaces utilisateur",
      "Animation des modèles 3D (vues éclatées, vues de coupe, cinématiques)",
    ],
    resultats: [
      "Formation intégrée par Bouygues dans son module Matform",
      "Modules d'interaction et de QCM réutilisés, en VR comme sur tablette",
      "Système de manipulation d'objets physiques ou contraints, développé en amont du projet",
    ],
    technos: ["Unity", "C#", "Oculus Quest 2", "Android", "Photoshop", "Git"],
    image: "assets/images/matform-0.jpg",
    galerie: ["assets/images/matform-tablette-0.jpg", "assets/images/matform-tablette-1.jpg"],
  },
  {
    titre: "Visite de caves Moët & Chandon",
    categorie: "Simulation et formation",
    periode: "6 mois",
    resume:
      "Simulateur de conduite pour apprendre aux employés à se repérer dans les caves, en casque VR ou sur poste triple écran avec volant.",
    contexte:
      "Projet Reviatech, à Reims et Épernay. Le module devait fonctionner à la fois sur HTC Vive et sur un simulateur à triple écran, avec un volant et des commandes reproduisant l'un des véhicules de la maison.",
    role: "Lead développeur. Participation au cahier des charges, puis développement jusqu'à la livraison et aux démonstrations chez le client.",
    points: [
      "Intégration des caves scannées en 3D puis retravaillées",
      "Intégration des équipements (multi-écrans, volant, boutons, casque)",
      "Système de conduite",
      "Scénarios et véhicules autonomes (animation, trajectoires)",
      "Interfaces utilisateur",
      "Optimisation du chargement des modèles 3D",
    ],
    resultats: ["Formation utilisée sur site à Reims ou Épernay"],
    technos: ["Unity", "C#", "HTC Vive", "Mixamo", "Photoshop", "Git"],
    image: "assets/images/moet-caves.jpg",
  },
  {
    titre: "Device Bridge",
    categorie: "Outils et R&D",
    periode: "En cours",
    resume:
      "Un dongle USB et son application compagnon, pour envoyer en temps réel les données de capteurs Bluetooth du commerce vers AcqKnowledge.",
    contexte:
      "Le dongle embarque sa propre radio Bluetooth. Une application compagnon pour Windows et macOS affiche les appareils appairés et les canaux en direct, puis transmet les données à AcqKnowledge par Lab Streaming Layer. Le produit n'est pas encore sorti.",
    role: "Développement logiciel en Python pour l'intégration des capteurs physiologiques.",
    points: [
      "Ceinture Polar H10 pour l'ECG et la fréquence cardiaque",
      "Oxymètre Wellue FS20F pour la SpO2 et le pouls",
      "Jusqu'à quatre capteurs en simultané sur un seul dongle",
      "Bouton matériel pour marquer des événements dans l'enregistrement",
      "Latence typique de 50 à 100 ms",
    ],
    technos: ["Python", "ESP", "Bluetooth", "LSL", "AcqKnowledge", "Claude AI"],
    image: "assets/images/dongle-application.jpg",
  },
  {
    titre: "Vortrix",
    categorie: "Projets perso",
    resume: "Jeu WebGL jouable directement dans le navigateur.",
    contexte:
      "Projet personnel autonome, de la conception à la publication en ligne. Une partie des assets a été créée ou assistée par des outils d'IA.",
    role: "Développement gameplay, optimisation pour les contraintes WebGL, mise en ligne.",
    technos: ["Unity", "C#", "WebGL", "Claude AI"],
    lien: { texte: "Jouer dans le navigateur", url: "https://tsmalbeen.github.io/Vortrix/" },
    video: "https://youtu.be/cC14EfcfetY",
  },
  {
    titre: "Museum Generator",
    categorie: "Projets perso",
    periode: "V1 terminée, bientôt disponible",
    resume:
      "Une application qui transforme une simple liste de tableaux en musée 3D que l'on peut visiter.",
    contexte:
      "On compose l'exposition dans un outil web, en ajoutant les œuvres avec leur image et leurs dimensions réelles, puis en les répartissant par salles. Une fois l'exposition publiée, l'application construit le musée toute seule, avec ses salles, ses portes, son éclairage, ses cadres et ses cartels.",
    role: "Projet développé en solo, de l'outil d'édition à l'application de visite.",
    points: [
      "Chaque tableau garde sa taille réelle, c'est le musée qui s'adapte en ajoutant des salles ou en allongeant une galerie pour les très grands formats",
      "Les appareils récupèrent l'exposition sur le réseau local, puis fonctionnent sans connexion",
      "Mise à jour de l'exposition depuis un menu d'administration sur l'appareil",
      "Fonctionne sur ordinateur et sur téléphone Android, versions casque VR et navigateur en préparation",
      "Mobilier et cadres générés avec Meshy, textures Poly Haven, reproductions Wikimedia Commons",
    ],
    technos: ["Unity", "C#", "Outil web", "Android", "Meshy", "Claude AI"],
    video: "https://www.youtube.com/watch?v=jFGEuK4IQG8",
    image: "assets/images/museum-generator-outil.jpg",
  },
  {
    titre: "Formation projection mapping pour Disney",
    categorie: "Simulation et formation",
    periode: "4 mois",
    resume:
      "Module VR de formation aux logiciels de projection d'images, de vidéos et d'effets sur différentes surfaces.",
    contexte:
      "Projet Reviatech. Il fallait reproduire en VR l'interface et les fonctions d'un logiciel de type Hippotizer (déformation d'images et de vidéos, remapping, effets, mixage).",
    role: "Chef de projet technique. Participation au cahier des charges et à l'écriture du scénario, puis développement.",
    points: [
      "Interface inspirée des applications de remapping",
      "Outils de gestion d'images et de vidéos (mapping, découpe, déformation, transformation)",
      "Shaders pour les effets",
      "Pseudo-langage de scénarisation, pour qu'un collaborateur écrive les scénarios en autonomie",
      "Optimisation d'un système à nombreuses caméras",
    ],
    technos: ["Unity", "C#", "Meta Quest 3", "Shader Graph", "Mecanim", "Mixamo", "Git"],
    image: "assets/images/disney-mapping-0.jpg",
    galerie: ["assets/images/disney-mapping-1.jpg"],
  },
  {
    titre: "Technicien lumière pour Disney",
    categorie: "Simulation et formation",
    resume: "Simulation interactive autour du métier de technicien lumière.",
    contexte:
      "Projet réalisé chez Reviatech. L'application reproduit des situations professionnelles du métier pour s'y former.",
    technos: ["Unity", "C#", "Simulation", "Formation"],
    image: "assets/images/disney-lumiere-0.jpg",
    galerie: ["assets/images/disney-lumiere-1.jpg"],
  },
  {
    titre: "Programmes de recherche",
    categorie: "Outils et R&D",
    resume: "Prototypes développés dans le cadre de projets ANR, européens et DGA RAPID.",
    contexte:
      "Des projets menés avec plusieurs partenaires, où il fallait prototyper vite et intégrer des technologies très différentes pour faire fonctionner un concept de recherche.",
    points: [
      "Orchestra, projet DGA RAPID (capture ci-dessus)",
      "Un démonstrateur WebGL de visualisation de données en arbre 3D",
    ],
    technos: ["Unity", "C#", "WebGL", "Prototypage", "Intégration"],
    image: "assets/images/orchestra.jpg",
  },
  {
    titre: "Lovage de câbles pour IDEA",
    categorie: "Simulation et formation",
    periode: "2022, 4 mois",
    resume:
      "Module de formation VR au lovage, l'enroulage de câbles de plusieurs kilomètres.",
    contexte:
      "Projet Reviatech, à Lille. Nous étions trois, un graphiste, un responsable commercial et moi comme chef de projet technique.",
    role: "Chef de projet technique, de la découverte du métier à la livraison.",
    points: [
      "Cahier des charges, interactions et scénarios validés avec le client",
      "Système de détection de gestuelle pour reconnaître la posture de l'utilisateur",
      "Simulation d'un câble « infini » contrôlable par plusieurs points",
      "Scénarios, activités et interactions",
      "Animation des personnages (Mecanim, synchronisation labiale)",
      "Environnement sonore et voix des personnages",
    ],
    technos: ["Unity", "C#", "HTC Vive", "Mecanim", "Audacity", "Git"],
    image: "assets/images/idea-0.jpg",
    galerie: ["assets/images/idea-1.jpg"],
  },
  {
    titre: "Light of the Nine",
    categorie: "Projets perso",
    resume: "Escape room en VR développé en solo avec Unity, publié sur Meta Quest et PCVR.",
    contexte:
      "Une petite salle médiévale et un planétarium représentant les neuf planètes. Le joueur doit comprendre puis résoudre un système de puzzle fondé sur des faisceaux lumineux. J'ai voulu éviter les énigmes qui reposent sur la lecture d'un texte, sur des miroirs ou sur des instructions explicites.",
    role: "J'ai tout réalisé seul, de la conception du puzzle aux systèmes de gameplay et d'interaction en C#, en passant par les environnements 3D, la modélisation sous Blender, les textures et le son.",
    points: [
      "Publié sur Meta Quest et PCVR",
      "Prototype très avancé en environ deux semaines",
      "Optimisation et performances sur Quest",
      "Compatibilité OpenXR, plugins XR, différences Quest 1 / Quest 2",
      "Effets graphiques compatibles avec les contraintes du casque",
    ],
    technos: ["Unity", "C#", "OpenXR", "Meta Quest", "PCVR", "Blender", "Photoshop", "Audacity", "Claude AI"],
    lien: { texte: "Page du projet", url: "https://miyvi.github.io/LightOfTheNine/" },
    video: "https://youtu.be/OyLwqI_UXEQ",
    image: "assets/images/light-of-the-nine.jpg",
  },
];

const LAB = [
  {
    titre: "Dungeon crawler multijoueur",
    statut: "En cours",
    resume:
      "Un jeu Unity qui simule un jeu de plateau de type dungeon crawler (cartes, dés, plateau, figurines).",
    contexte:
      "Gameplay inspiré des jeux de rôle tactiques, avec un éditeur intégré pour que les joueurs personnalisent personnages, cartes, plateaux, règles et dés.",
    points: [
      "Multijoueur (lobby, synchronisation des joueurs, gestion réseau)",
      "Éditeur intégré et règles paramétrables, sauvegardables par l'utilisateur",
      "Chargement dynamique d'assets personnalisés (sprites, modèles, cartes)",
      "Tours, initiative, sorts, actions et déplacements selon les règles",
      "Interface des joueurs, des cartes et des autres objets",
    ],
    technos: ["Unity", "C#", "Unity Netcode", "Blender", "Photoshop"],
  },
  {
    titre: "Prototype Unreal Engine",
    statut: "Prototype",
    resume:
      "Un jeu de type Vampire Survivors réalisé pour découvrir Unreal, avec des ressources générées par IA.",
    contexte:
      "Le but était de prendre en main Unreal dans son ensemble, des Blueprints aux systèmes d'animation et aux widgets d'interface.",
    points: [
      "Ressources générées par IA (concept arts, conversion 3D avec Meshy, rigging Mixamo / AccuRig)",
      "Structure du projet en Blueprints (personnages, attaques, bonus)",
      "Animation des personnages",
      "Menus et interface d'informations du joueur",
      "Niveaux, ennemis, attaques et bonus réglables par paramètres",
    ],
    technos: ["Unreal Engine", "Blueprints", "C++", "Meshy", "Mixamo", "AccuRig", "Blender"],
  },
  {
    titre: "Jeu de plateau imprimable en 3D",
    statut: "Conception",
    resume:
      "Un jeu de plateau inspiré des RTS, avec des ressources, des villageois, des bâtiments, des améliorations et des conflits.",
    contexte:
      "Deux civilisations au départ, des figurines et des bâtiments à imprimer, une grille, des cartes d'action et des actions simultanées. Le but est de retrouver la sensation d'APM d'un RTS sans imposer de chronomètre.",
    technos: ["Game design", "Impression 3D"],
  },
  {
    titre: "Impression 3D résine",
    statut: "Actif",
    resume:
      "Figurines, bâtiments, éléments de jeu, pièces techniques et réparations sur une Elegoo Saturn 3.",
    contexte:
      "Je fais toute la chaîne, de la modélisation ou de la génération du modèle jusqu'à l'impression, en passant par le nettoyage, la découpe et les supports.",
    technos: ["Blender", "Fusion", "Meshy", "Elegoo Satellite"],
  },
  {
    titre: "Modèles 3D générés par IA",
    statut: "Actif",
    resume:
      "Générer un modèle avec Meshy, puis le nettoyer, le modifier et le préparer pour Unity ou pour l'impression.",
    technos: ["Meshy", "Blender", "Unity"],
  },
];
