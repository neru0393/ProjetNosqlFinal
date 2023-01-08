const API_BASE_ENDPOINT = "https://neru-rest-food-api.deta.dev"

// Traitement des formualaire
/// Publication des données
let formPost = document.getElementById("form-dish");

if (formPost != null){
  formPost.addEventListener("submit" , function(e){
    e.preventDefault();
  
    // recuprer les données du formualaire pour chaque champs
  
    let time=document.getElementById("timestamp").value  
    let age=document.getElementById("age").value  
    let city=document.getElementById("city").value  
    let weight=document.getElementById("weight").value 
    let height=document.getElementById("height").value 
    let bmi=document.getElementById("bmi").value  
    let salary=document.getElementById("salary").value  
    let gender=document.getElementById("gender").value  
    let qualification=document.getElementById("qualification") .value 
    let employment_status=document.getElementById("employment_status") .value 
    let covid_vaccine=document.getElementById("covid_vaccine").value 
    let marital_status=document.getElementById("marital_status").value 
    let copilot_user=document.getElementById("copilot_user").value  
    let favourite_dish=document.getElementById("favourite_dish").value  

   
    // ecrire une fonction pour verifier
    if (verifierChamps(time, age,city,weight,height,bmi,salary,gender,qualification,employment_status,
      covid_vaccine,marital_status,copilot_user,favourite_dish)){
        alert("Les champs sont vide")
    } else {
        // poster les donner
        // creer un objet json
        const data = {
          "Timestamp": time,
          "age": age,
          "city": city,
          "weight": weight,
          "height": height,
          "BMI": bmi,
          "salary": salary,
          "gender": gender,
          "qualification": qualification,
          "employment_status": employment_status,
          "covid_vaccine": covid_vaccine,
          "marital_status": marital_status,
          "copilot_user": copilot_user,
          "favourite_dish": favourite_dish
        }
  
        // appeler à la fonction postData
        postData(`${API_BASE_ENDPOINT}/api/foods`, data)
    }
  })
}


  function verifierChamps(time, age,city,weight,height,bmi,salary,gender,qualification,employment_status,
    covid_vaccine,marital_status,copilot_user,favourite_dish){
    if (time == "" && age == "" && city == "" && weight == ""&& height=="" && bmi == ""
    && salary == "" && gender == "" && qualification == "" && employment_status == ""&&
    covid_vaccine == "" && marital_status == "" && copilot_user =="" && favourite_dish=="") return true;
    return false;
  }
  
  
  async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
        .then((response) => response.json())
       .then((data) => {
        console.log('Success:', data);
        alert("Resource crée avec success");
        window.location.reload();
    })
    .catch((error) => {
        console.error('Error:', error);
    });
  }
  
