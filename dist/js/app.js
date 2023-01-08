const API_BASE_ENDPOINT = "https://neru-rest-food-api.deta.dev/api"
/**
 * Cette fonction lance le programme
 */
function main(){
  console.log("App is calling !");
  fetchData();
}

/**
 * Charger les données dans le tableau
 * @param {any} data 
 */
function loadDataToTable(data) {
  // Récupération de la référence au tableau HTML
  const table = document.getElementById('postTable');

  // Parcours des données
  for (const item of data) {
    // Création d'une nouvelle ligne de tableau
    const row = document.createElement('tr');

    // on ajoute le contenue dans la ligne
    // ici on peut verifier le contenue de item en faisant console.log(item)
    // c'est un objet json 
    // on acceder à la cle avec la syntaxe suivante obj['key']
    row.innerHTML = `<tr>
      
      <td>${item['age']}</td>
      <td>${item['gender']}</td>
      <td>${item['favourite_dish']}</td>
      </tr>
      `

    // Ajout de la ligne au tableau
    table.appendChild(row);
  }
}


/**
 * Recuperer les données et les charges dans le tableau
 * @param {String} url 
 */
async function fetchData() {
  console.log("call fetchData");
  // call fetch data
  const rep = await fetch(`${API_BASE_ENDPOINT}/foods/women/foods`, { method: 'GET' })
  .then((rep) => rep.json())
  .then((data) => {
    console.log('Success:', data);
    // appelle la fonction pour charger les données
    loadDataToTable(data);
  })
  .catch((error) => {
      console.error('Error:', error);
  });
}

// appeller de la fonction main
main();
