
let card = document.getElementById("card")
let nameBr = ""
let imageBr =""
let taglineBr =""
let descriptionBr =""
async function getBeers() {
    try {
      const response = await axios.get('https://api.punkapi.com/v2/beers');
      for(const element of response.data){
        console.log(response.data)
        nameBr = element.name
        imageBr = element.image_url
        taglineBr = element.tagline
        descriptionBr = element.description
        card.innerHTML +=
        `<p> `+nameBr+`</p>
        <img src = "`+imageBr+`"</img>
        <p> `+taglineBr+`</p>
        <p>`+descriptionBr+`</p>`
      }

    }  
    catch (error) {
      console.log(error);
    }
}
await getBeers()