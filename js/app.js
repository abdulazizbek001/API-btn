const elBtn = document.querySelector('button');

fetch('https://jsonplaceholder.typicode.com/users')
    .then((rec) => rec.json())
    .then((data) => mapper(data))

function mapper(data) {
    elBtn.addEventListener('click', () => {
        data.map((item) => {
            let elDiv = document.createElement('div');
            let newCard = `
            <div class="card" style="width: 18rem;">
                <h5 class="card-title">${item.username}</h5>
                <p class="card-text"></p>
                <a href="#" class="btn btn-primary">Meet width ${item.name}</a>
            </div>
            `
            elDiv.innerHTML = newCard
            document.querySelector('body').appendChild(elDiv)
        })
    })

}