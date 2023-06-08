const moviesec=document.querySelector('.moviesec')
const input=document.querySelector('.input')
const form=document.querySelector('.form')

const fetchdata = () => {

    form.addEventListener('submit',async (e) => {

        e.preventDefault()

        let Searchparam=input.value
        moviesec.innerHTML=''

        const response=await fetch(`http://www.omdbapi.com/?apikey=d1c31abe&s=${Searchparam}`)
        const data=await response.json()
        console.log(data)


    data.Search.forEach((movie)=> {
        const container=document.createElement('div')
        container.classList.add('container')
        container.innerHTML=`<img src=${movie.Poster}></img>
                        <h2>${movie.Title}</h2>
                        <h3>${movie.Type}</h3>
                        <h4>${movie.Year}</h4>`

        moviesec.appendChild(container)

   });
})

   

}  

fetchdata()