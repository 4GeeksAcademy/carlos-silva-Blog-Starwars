import { useEffect } from "react";


import { useParams } from "react-router-dom"


export const DetailCharacters = () => {
    const {characterId} = useParams()
   




    useEffect(() => {
        console.log("llamar api sw")

    }, [])


    return(
<div className="contaniner">
    <div className="row">
        <div className="col-12 col-md-6">
            <h1>{characterId} </h1>
        </div>

    </div>
</div>
    )
}