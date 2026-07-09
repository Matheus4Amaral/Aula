import { useState } from "react";

function Contador() {
    const [contador, setContador] = useState(10);

    return (
        <>
            <h1>Esse é meu contador</h1>

            <button onClick={() => {contador ? setContador(contador - 1) : alert('O valor já chegou em zero. Não é possível mais diminuir!!!')}}>-</button>

            <p>{contador}</p>

            <button onClick={() => setContador(contador + 1)}>+</button>
        </>
    );
}

export default Contador;
