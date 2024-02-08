const api = fetch('https://api.chucknorris.io/jokes/random')
.then(response => {
    return response.json();
})
.then((data) => {
    // console.log("Data is : ", data);
    var joke = data.value;
    console.log("JOKe :", joke);
})

.catch(error =>{
    console.log("error fetching churks norris joke: " ,error);
})