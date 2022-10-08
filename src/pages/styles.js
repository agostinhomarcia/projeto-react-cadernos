import styled from "styled-components"


export const ContainerItens = styled.div`
    display:flex;
    gap: 50px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    div{
        height:320px;
        width:230px;
        border: 1px solid crimson;
        display: flex;
        justify-content: space-between;
        flex-direction:column;
        align-items:center;
        padding:20px;

        button{
            font-size:25px;
            background: transparent;
            border:none;
            color:crimson;
        }
    }
`
export const H1 = styled.h1`
    color:crimson;
    margin-top: 25px;
    margin-bottom: 25px;
`;



export const Button = styled.button`
    font-size: 50px;
    background: transparent;
    border:none;
    color:crimson;
    margin-top: 15px;
    cursor: pointer;
    
                
        
`;

export const H3 = styled.h3`
    color:crimson;
    margin-bottom: 10px;
`;