import React, { useEffect, useState } from "react"

function GetAddress ({ postalCode }) {
    const [address, setAddress] = useState ("")
    const [loading, setLoading] = useState(false)
    const [erro, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        setError(null)

        console.log("userEffect executing (build or updated from CEP")

        fetch(`https://viacep.com.br/ws/${postalCode}/json/`)
        .then(res => {
            if(!res.ok)  throw new Error("Error in the return from API")    
                return res.json()           
            
        })
        .then(data => setAddress(data))
        .catch(err => {
            setError(err.message)
        })
        .finally(() => setLoading(false))
    }, [postalCode] )

    return(
        <div>
            <h2>Address:</h2>
            <p><strong>PostalCode:</strong> {address.cep}</p>
            <p><strong>Street:</strong> {address.logradouro}</p>
            <p><strong>Neighborhood:</strong> {address.bairro}</p>
            <p><strong>City:</strong> {address.localidade}</p>
            <p><strong>State:</strong> {address.uf}</p>
        </div>
    )
}

export default GetAddress