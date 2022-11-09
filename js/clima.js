const btn = document.querySelector('#btnclima')
        btn.addEventListener('click', ()=>{
            const key  = "0ca063b746578ffb14d9f9455bdb165a"
            let ciudad = document.querySelector('#ciudad').value
            ciudad = encodeURIComponent(ciudad)
            console.log(ciudad)

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key}`
        console.log(url)

        if (ciudad != ""){
            fetch(url)
                .then(res => {
                    return res.json()
                })
                .then(clima => {
                    console.log(clima)
                    let temp = clima.main.temp
                    let tempC = temp - 273.15
                    let html = document.querySelector("#temperatura")
                    html.innerHTML = tempC.toFixed(0)

                    if (tempC < 12 ){
                        html.className = "cold"
                    }else {
                        html.className = "warm"
                    }
                })
                .catch(err => console.log(err))
        }else{
            alert("Indique Ciudad")
        }

        })
        