const jokeURL = "https://api.chucknorris.io/jokes/random";

fetch( jokeURL ).then( response  => {
    response.json().then(({id, value}) => {
        console.log(id);
        console.log(value);
    })
});