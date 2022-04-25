

async function getBeers(){
    try{
        const response = await axios.get("https://api.punkapi.com/v2/beers")
        console.log("reponse", response);
    }catch (error){
        console.error(error);
    }
}

await getBeers()


// const axios = require('axios').default;

// // Make a request for a user with a given ID
// axios.get('https://api.punkapi.com/v2/beers/1')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });



