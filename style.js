const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});


function loadCoupon(){
    document.getElementById('coupon').style.visibility = 'visible'
}

function closeCoupon(){
    document.getElementById('coupon').style.visibility = 'hidden'
}



const categoryUrl = "https://rehan1032.github.io/2nd-Project-Data/"
const ProductUrl = "https://rehan1032.github.io/2nd-Project-Data/data.json"



function getCategory() {
  fetch(categoryUrl, {
      method: 'GET'
    })
    .then((res) => res.json())
    .then((data) => {

      data["Category"].map((item) => {
        console.log(item)
        let element = document.createElement('option')
        let text = document.createTextNode(item.category)
        element.appendChild(text)
        element.value = item.id
        document.getElementById('categories').appendChild(element)
      })

    })

}



async function getProduct() {
  // Get the id of category
  let category = document.getElementById("categories").value;
  //   Select local options HTML
  let rest = document.getElementById("restSelect");
  //   Empty array for filling filtered the data
  let local_data = [];
  //   Remove all the options that were associated from other cities
  while (rest.length > 0) {
    rest.remove(0);
  }



  //   Fetch all the Products
  let response = await fetch(`${ProductUrl}`, {
    method: "GET",
  });
  let data = await response.json();
  //  Since it is not a real API, filter the Product manually as per Category_id
  let finalData = data["Product"].filter((item1) => {
    if (category == item1.Category_id) {
      local_data.push(item1);
    }
  });
  //  Map the filtered data and create local options
  local_data.map((item) => {
    let element = document.createElement("option");
    let text = document.createTextNode(
      `${item.type} `
    );
    element.appendChild(text);
    element.value = item.Category_id;
    document.getElementById("restSelect").appendChild(element);
  });
}

