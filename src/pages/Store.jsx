import React, { useEffect, useState } from 'react'
import {BsFillCartCheckFill, BsFillCartPlusFill, BsFillCartFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import {getItem, setItem} from '../services/LocalStorageFuncs'
import {ContainerItens, H1, Button} from "./styles";



function Store() {
    const [data, setData] = useState([])
    const [ cart, setCart] = useState(getItem('carrinhoYt') || [])

    useEffect(()=>{
        const  fetchApi =  async () =>{
            const url = 'https://api.mercadolibre.com/sites/MLB/search?q=cadernos'
            const response = await fetch(url);
            const objJson = await response.json()
            setData(objJson.results)
        }
        fetchApi();

    }, [])

    const  handleClick = (obj) =>{
        
        const element = cart.find((element) => element.id === obj.id)
        if(element){
            const arrFilter = cart.filter((element)=> element.id !== obj.id)
            setCart(arrFilter)
            setItem('carrinhoYt', arrFilter)
        }else{
            setCart([...cart, obj])
            setItem('carrinhoYt', [...cart,obj])
        }
    }

  return (
    <div>
            <Button>
                <Link to='cart'> <BsFillCartFill/>  </Link> 
            </Button>
        <H1>Store</H1>
        <ContainerItens>
            {
                data.map((event)=>(
                    <div key={event.id}>
                        <h4>{event.title}</h4>
                        <img src={event.thumbnail} alt={event.title} />
                        <h4>{`R$ ${event.price}`} </h4>
                        <button onClick={() => handleClick(event)}>
                            {
                                cart.some((itemCart) => itemCart.id === event.id) ?
                                (
                                    <BsFillCartCheckFill/>
                                ) : (
                                    <BsFillCartPlusFill/>
                                )
                            }
                        </button>

                    </div>

                ))
            }
        </ContainerItens>
    </div>
  )
}

export default Store