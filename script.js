const bodyElement = document.querySelector('body');
//bodyElement.innerHTML = "Bonjour";




const urlDeApi = `https://reqres.in/api/users?page=2/json`;
fetch(urlDeApi)
    .then((response) => {
        return response.json();
    })
    .then((responseJson) => {
        for (let i = 0; i < responseJson.data.length; i++) {
            bodyElement.innerHTML += `
            <div class="je">
                    <div class="avatar">
                        <p><img src= ${responseJson.data[i].avatar}></p>
                        <p>${responseJson.data[i].first_name}</p>
                        <p>${responseJson.data[i].last_name}</p>
                        <p>${responseJson.data[i].email}</p>
                        <p>${responseJson.data[i].id}</p>
                    </div>
                </div>
                    `
        }

        console.log(responseJson);
    })

carte()
