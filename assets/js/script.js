function consultar() {
    let peticion = fetch(`https://digimon-api.vercel.app/api/digimon`).then((resp) => {
        return resp.json()
    }).then((data) => {
        for (const digimon of data) {
            $("#tabla-digimon").append(`
            <div class="col-12 col-md-6 col-lg-4"
            <div class="card">
                <img src="${digimon.img}" alt="${digimon.name} class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${digimon.name}</h5>
                    <p class="card-text"> ${digimon.level}</p>
                </div>
            </div>
            </div>
            `)
            $("#dropdown-digimon").append(`
            <li><a class="dropdown-item" href="#">${digimon.name}</a></li>
            `)
        }
    })
}
$(document).ready(function () {
    consultar();
    $(document).on("click", ".dropdown-item", function () {
        const nombre = $(this).text()
        fetch(`https://digimon-api.vercel.app/api/digimon/name/${nombre}`).then((resp) => {
            return resp.json()
        }).then((data) => {
            const digimon = data[0]
            $("#tabla-digimon").html(`
            <div class="col-12 col-md-6 col-lg-4"
            <div class="card">
                <img src="${digimon.img}" alt="${digimon.name} class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${digimon.name}</h5>
                    <p class="card-text"> ${digimon.level}</p>
                </div>
            </div>
            </div>
            `)
        })


        // $("#contenido-principal")
    })
})


