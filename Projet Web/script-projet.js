function Affichage_supervisé() {

    remove();

    engrenage();
    
    var block = document.getElementById("overlay");
    
    var texte = document.createElement("p");
    texte.innerHTML = "L'apprentissage supervisé (supervised learning en anglais) est une tâche d'apprentissage automatique consistant à apprendre une fonction de prédiction à partir d'exemples annotés, au contraire de l'apprentissage non supervisé.Les exemples annotés constituent une base d'apprentissage, et la fonction de prédiction apprise peut aussi être appelée « hypothèse » ou « modèle ». On suppose cette base d'apprentissage représentative d'une population d'échantillons plus large et le but des méthodes d'apprentissage supervisé est de bien généraliser, c'est-à-dire d'apprendre une fonction qui fasse des prédictions correctes sur des données non présentes dans l'ensemble d'apprentissage.";
    block.appendChild(texte);

    var texte = document.createElement("p");
    texte.innerHTML = "En d'autres mots, l'apprentissage supervisé consiste à donner à l'algorythme un dataset contenant des questions et leurs réponses, puis de donner à ce meme algorythme une question, à laquelle il essayera de répondre au plus proche de ce qu'il connait.";
    block.appendChild(texte);

    var texte = document.createElement("p");
    texte.innerHTML = "Voici un petit exemple pour que vous puissiez comprendre :";
    block.appendChild(texte);

    var image = document.createElement("img");
    image.src="./Explication_Supervised.png";
    block.appendChild(image);

    var texte = document.createElement("p");
    texte.innerHTML = "Ici, notre data set contient une data : le prix d'un appartemment en fonction de sa surface en m², en entrant une valeur dans notre algorythme, le premier traitement va etre très simple : f(x) = x par exemple, la sortie de ce traitement simple va être comparée au résultat attendu, (ici, 300.000 quand x vaut 100), puis va modifier f afin de réduire cet écart, notre nouvelle fonction va donc être par exemple f(x) = 10x... etc jusqu'à arriver à une erreur satisfaisante ou à un resultat exact, notre modèle (notre fonction) sera alors 'entrainée'. ";
    block.appendChild(texte);

    
}

function Affichage_non_supervisé() {

    remove();

    engrenage();

    var block = document.getElementById("overlay");
    
    var texte = document.createElement("p");
    texte.innerHTML = "Dans le domaine informatique et de l'intelligence artificielle, l'apprentissage non supervisé désigne la situation d'apprentissage automatique où les données ne sont pas étiquetées. Il s'agit donc de découvrir les structures sous-jacentes à ces données non étiquetées. Puisque les données ne sont pas étiquetées, il est impossible à l'algorithme de calculer de façon certaine un score de réussite.L'absence d'étiquetage ou d'annotation caractérise les tâches d'apprentissage non-supervisé et les distingue donc des tâches d'apprentissage supervisé.L'introduction dans un système d'une approche d'apprentissage non supervisé est un moyen d'expérimenter l'intelligence artificielle. En général, des systèmes d'apprentissage non supervisé permettent d'exécuter des tâches plus complexes que les systèmes d'apprentissage supervisé, mais ils peuvent aussi être plus imprévisibles. Même si un système d'IA d'apprentissage non supervisé parvient tout seul, par exemple, à faire le tri entre des chats et des chiens, il peut aussi ajouter des catégories inattendues et non désirées, et classer des races inhabituelles, introduisant plus de bruit que d'ordre.";
    block.appendChild(texte);

    var texte = document.createElement("p");
    texte.innerHTML = "En d'autres mots, l'apprentissage non supervisé a pour but d'identifier des structures différentes ou identiques dans de nombreuses données, l'exemple suivant illustera mes propos :";
    block.appendChild(texte);

    var image = document.createElement("img");
    image.src="./Explication_unSupervised.png";
    block.appendChild(image);

    var texte = document.createElement("p");
    texte.innerHTML = "Sur cet exemple, notre data set contient des données dans lesquelles l'algorithme reconnaitra des sous-parties différentes et/ou semblables, ils classera alors les données en plusieurs groupes, c'est le principe de l'algorithme 'K-mean Clustering' ";
    block.appendChild(texte);
    
    var lien = document.createElement("a");
    lien.innerHTML = "Vidéo explicative de l'algorithme K-mean Clustering";
    lien.href ="https://www.youtube.com/watch?v=4b5d3muPQmA"
    block.appendChild(lien);
}

function Affichage_renforcé() {

    remove();

    engrenage();

    var block = document.getElementById("overlay");

    var texte = document.createElement("p");
    texte.innerHTML = "En intelligence artificielle, plus précisément en apprentissage automatique, l'apprentissage par renforcement consiste, pour un agent autonome (robot, etc.), à apprendre les actions à prendre, à partir d'expériences, de façon à optimiser une récompense quantitative au cours du temps. L'agent est plongé au sein d'un environnement, et prend ses décisions en fonction de son état courant. En retour, l'environnement procure à l'agent une récompense, qui peut être positive ou négative. L'agent cherche, au travers d'expériences itérées, un comportement décisionnel (appelé stratégie ou politique, et qui est une fonction associant à l'état courant l'action à exécuter) optimal, en ce sens qu'il maximise la somme des récompenses au cours du temps.";
    block.appendChild(texte);

    var texte = document.createElement("p");
    texte.innerHTML = "Sur cet exemple, notre agent est une voiture qui évolue au sein d'un environnement : la route, si elle heurte un mur ou un autre véhicule à cause de l'une de ses actions, elle recevra une récompense négative elle décidera donc d'éviter ce genre de comportement dans ce genre de situations";
    block.appendChild(texte);

    var image = document.createElement("img");
    image.src = "./Explication_reinforcement.png";
    block.appendChild(image);
}


function remove()
{
    var parent = document.getElementById("overlay");
    while (parent.lastChild != null)
    {
        var image = document.getElementById("overlay").lastChild;
        document.getElementById("overlay").removeChild(image);
    }
    
}

function engrenage()
{
    var image_engrenage = document.createElement("img");
    image_engrenage.className = "Engrenage";
    image_engrenage.src="./Engrenage.jpg";
    var block = document.getElementById("overlay");
    image_engrenage.style.height = '100px';
    image_engrenage.style.width = '100px';
    block.appendChild(image_engrenage);
}

function commente()
{
    var prenom = document.getElementById("surname").value;
    var message = document.getElementById("msg").value;
    if (prenom == "" || message =="")
    {
        alert("Veuillez renseigner votre prénom et un message.");
    }
    else
    {
        var block = document.getElementById("commentaires");
        var texte = document.createElement("p");
        texte.innerHTML=   message +". Par " + prenom;
        texte.className = "commentaires_écrits"
        block.appendChild(texte);
        
        
    }
}


