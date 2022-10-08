import React, { useState } from 'react'
import { getItem, setItem} from '../services/LocalStorageFuncs'
import {BsCartDashFill} from 'react-icons/bs'
import {ContainerItens, H1,H3} from "./styles";



function Cart() {
    const [data, setData ] = useState(getItem('carrinhoYt') || [])

    const removeItem = (obj) =>{
        const arrFilter = data.filter((element) => element.id !== obj.id)
        setData(arrFilter)
        setItem('carrinhoYt', arrFilter)
    }
    const subTotal = data.reduce((acc, cur) => acc + cur.price , 0)

  return (
    <div>
        <H1>Cart</H1>
        <H3> {`SubTotal: R$ ${subTotal}`} </H3>
        <ContainerItens>
            {
                data.map((event) =>(
                    <div key={event.id}>
                        <h4>{event.title} </h4>
                        
                        <img src={event.thumbnail} alt={event.title} />
                        <h4>{`R$ ${event.price}`} </h4>
                        <button onClick={() => removeItem(event)}>
                            <BsCartDashFill/>
                        </button>

                    </div>
                ))
            }
        </ContainerItens>
    </div>
  )
}

export default Cart