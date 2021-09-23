document.getElementById('mealBtn').addEventListener('click', function () {
  $.ajax('https://www.themealdb.com/api/json/v1/1/random.php').then(function (data) {
    // console.log(data);  =>  check for getting data
    render(data);
  });
})

// try to hide this contents in my own way
function render(getData) {

  // set strIngredients and strMeasures values
  let newIngredients = [];

  for (let i = 1; i <= 20; i++) {
    if (getData.meals[0][`strIngredient${i}`]) {
      newIngredients.push(`<li>${getData.meals[0][`strIngredient${i}`]} - ${getData.meals[0][`strMeasure${i}`]}</li>`);
    } else {
      break;
    }
  }

  // top btn function - when click this button, this page scroll to the top
  function top() {
    $('html,body').animate({
      scrollTop: 0
    }, 300);
  }

  // make variable for using as HTML file
  const hideInnerHTML = `
        <br>
        <div id="img-des">
            <img src="${getData.meals[0].strMealThumb}" />
            <br>
            <br>
            <h3 id="meal">${getData.meals[0].strMeal}</h3>
            <div>
              <p><strong>Category:</strong> ${getData.meals[0].strCategory}<p>
              <p><strong>Area:</strong> ${getData.meals[0].strArea}<p>
              <p><strong>Tags:</strong> ${getData.meals[0].strTags}<p>
            </div>
        </div>
        <br>
        <div id="ing">
            <h4 id="ingredients">Ingredients: </h4>
            <ul>
              ${newIngredients.map(newIngredients => newIngredients).join('')}
            </ul>
        </div>
        <br>
        <div id="meal-ins">
            <h4 id="how">How to cook</h4>
            <p>${getData.meals[0].strInstructions}</p>
            <br>
        </div>
        
        <div id="youtube">
            <iframe id="video" src="https://www.youtube.com/embed/${getData.meals[0].strYoutube.slice(-11)}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <br>
        <div id="top">
        <button id="topBtn" onclick="top()"><strong>Top</strong></button>
        </div>
  `;
  // put hideInnerHTML into <main> on document
  document.querySelector('.hiddenHTML').innerHTML = hideInnerHTML;
}


// sharing sns function
function shareFacebook() {
  var sendUrl = "https://randomrecipes-verjs.netlify.app"; // send URL
  window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
}

function shareTwitter() {
  var sendText = "Random Recipes"; // send text
  var sendUrl = "https://randomrecipes-verjs.netlify.app"; // send URL
  window.open("https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl);
}














/*
<ul>
<li>${getData.meals[0].strIngredient1} - ${getData.meals[0].strMeasure1}</li>
  <li>${getData.meals[0].strIngredient2} - ${getData.meals[0].strMeasure2}</li>
  <li>${getData.meals[0].strIngredient3} - ${getData.meals[0].strMeasure3}</li>
  <li>${getData.meals[0].strIngredient4} - ${getData.meals[0].strMeasure4}</li>
  <li>${getData.meals[0].strIngredient5} - ${getData.meals[0].strMeasure5}</li>
  <li>${getData.meals[0].strIngredient6} - ${getData.meals[0].strMeasure6}</li>
  <li>${getData.meals[0].strIngredient7} - ${getData.meals[0].strMeasure7}</li>
  <li>${getData.meals[0].strIngredient8} - ${getData.meals[0].strMeasure8}</li>
  <li>${getData.meals[0].strIngredient9} - ${getData.meals[0].strMeasure9}</li>
  <li>${getData.meals[0].strIngredient10} - ${getData.meals[0].strMeasure10}</li>
  <li>${getData.meals[0].strIngredient11} - ${getData.meals[0].strMeasure11}</li>
  <li>${getData.meals[0].strIngredient12} - ${getData.meals[0].strMeasure12}</li>
  <li>${getData.meals[0].strIngredient13} - ${getData.meals[0].strMeasure13}</li>
  <li>${getData.meals[0].strIngredient14} - ${getData.meals[0].strMeasure14}</li>
  <li>${getData.meals[0].strIngredient15} - ${getData.meals[0].strMeasure15}</li>
  <li>${getData.meals[0].strIngredient16} - ${getData.meals[0].strMeasure16}</li>
  <li>${getData.meals[0].strIngredient17} - ${getData.meals[0].strMeasure17}</li>
  <li>${getData.meals[0].strIngredient18} - ${getData.meals[0].strMeasure18}</li>
  <li>${getData.meals[0].strIngredient19} - ${getData.meals[0].strMeasure19}</li>
  <li>${getData.meals[0].strIngredient20} - ${getData.meals[0].strMeasure20}</li>
</ul>
*/