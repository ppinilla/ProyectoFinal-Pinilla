import './itemCount.css'
import React from 'react'
import { useState, useEffect } from 'react'

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(parseInt(initial));

    const Decrease = () => {
        setCount(count - 1)
    }
    const Increase = () => {
        setCount(count + 1)
    }

    //El useEffect en este caso se usa para que cada vez que cambie el valor initial, este se resetee y no haya que actualizarlo
    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])

    return (
        <div className='counter'>
            <button className='button' disabled={count <= 1} onClick={Decrease}>-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={Increase}>+</button>
            <div>
                <button disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount