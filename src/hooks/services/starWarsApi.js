const urlBaseStarWars = "https://www.swapi.tech/api"

export async function getPeople() {
    try {
        let result = []
        const response = await fetch(`${urlBaseStarWars}/people?page=1&limit=15`)
        const data = await response.json()
        for(let item of data.results){
            const responseDetail = await fetch(item.url)
            const dataDetail = await responseDetail.json()
            result.push(dataDetail.result)
        }
        localStorage.setItem("people", JSON.stringify(result))
       return result
    } catch (error) {
        
    }
}
