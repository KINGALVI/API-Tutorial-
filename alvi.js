// Example - 1

document.getElementById('Users-Button').addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(Data => console.log(Data))
})





// Example - 2 

document.getElementById('Comments-Button').addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(Data => fetchData(Data));

    const fetchData = (Data) => {
        for (const users of Data) {
            console.log(users);
        }
    }
})





// Example - 3 

document.getElementById('Email-Button').addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(Data => fetchData(Data))

    const fetchData = (Data) => {

        const ul = document.getElementById('Email-list')

        for (const Emails of Data) {
            const createElemant = document.createElement('li');
            createElemant.innerText = Emails.email
            ul.appendChild(createElemant);
        }
    }
})





// Most Important Example - 4 

document.getElementById('post-btn').addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(Data => fetchData(Data))

    const fetchData = (Data) => {
        const postContainer = document.getElementById('Post-Container');
        for (const post of Data) {
            const createElemant = document.createElement('div');
            createElemant.classList.add('Post-Container')
            createElemant.innerHTML = `
        <hr/>
        <h1>${post.id}. ${post.title}</h1>
        <p>${post.body}</p>
        <hr/>
        `
            postContainer.appendChild(createElemant);
        }
    }
})





// Example - 5

document.getElementById('quote-btn').addEventListener('click', function () {
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(Data => quoteLine(Data))


    const quoteLine = (Data) => {
        const quotePlace = document.getElementById('quote');
        quotePlace.innerText = Data.quote;
    }

})





// Most Important Example-6

document.getElementById('user-btn').addEventListener('click', function () {

    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(Data => userInformation(Data.results));

    const userInformation = Data => {

        const userContainer = document.getElementById('user-container');

        for (const user of Data) {
            const createElemant = document.createElement('div');
            createElemant.classList.add('user-container');
            createElemant.innerHTML = `
            <h1 class="user-info">User information</h1>
            <img src="${user.picture.large}">
            <p>Name : ${user.name.title}.${user.name.first} ${user.name.last} </p>
            <p>Gender : ${user.gender} </p>
            <p>Email : ${user.email}</p>
            <p>Location : ${user.location.city} , ${user.location.state} , ${user.location.country}

            `
            userContainer.appendChild(createElemant);
        }

    }

})





// Most Important Example -7

document.getElementById('country-btn').addEventListener('click', function () {

    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(Data => countryInfo(Data));

    const countryInfo = Data => {

        const countryContainer = document.getElementById('country-container');

        Data.forEach(country => {
            const createElemant = document.createElement('div');
            createElemant.classList.add('country');
            createElemant.innerHTML = `
            <h2> Country Name : ${country.name.common} </h2>
            <img src="${country.flags.png}">
            <h3> Official Name : ${country.name.official} </h3>
            <h3> Capital : ${country.capital ? country.capital[0] : 'No Capital'} </h3>
            `
            countryContainer.appendChild(createElemant);
        })

    }

})