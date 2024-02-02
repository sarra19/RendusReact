let lastId = 0;

const Tab = [
  { id: ++lastId, nom: "Objet 1", propriete: "Valeur 1" },
  { id: ++lastId, nom: "Objet 2", propriete: "Valeur 2" },
  { id: ++lastId, nom: "Objet 3", propriete: "Valeur 3" },
];

Tab.push({ id: ++lastId, nom: "Objet 4", propriete: "Valeur 4" });
Tab.unshift({ id: ++lastId, nom: "Objet 0", propriete: "Valeur 0" });

export default Tab;
