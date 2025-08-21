import { useState } from 'react'

function ConsultCep() {

    const [postalCode, setPostalCode] = useState('');
    const [data, setData] = useState(null);
    

    function handleClick(){
        console.log(postalCode)
        const hr = new XMLHttpRequest();
        hr.open('GET', `https://viacep.com.br/ws/${postalCode}/xml/`);
        console.log(hr.open)
        hr.onload = function(){ 
            if(hr.status === 200){
                setData(hr.responseText)    ;
            }
        };
        hr.send()
    }
    
    return (
        <div>
            <input 
                value={postalCode}
                name='Digite o CEP'
                placeholder='Digite o CEP'
                onChange={ e => setPostalCode(e.target.value)}
            />
            <button onClick={handleClick}>Consultar CEP</button>
            {data ? <div>{JSON.stringify(data)}</div> : <div>loading ...</div>} */}
        </div>
    );
}

export default ConsultCep