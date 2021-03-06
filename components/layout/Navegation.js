import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

const Nav = styled.nav`
    padding-left: 2rem; 

    a {
        font-size: 1.8rem; 
        margin-left: 2rem; 
        color: var(--gris2);
        font-family: 'PT Sans', sans-serif; 

        &:last-of-type {
            margin-right: 0; 
        }
    }
`

const Navegation = () => {
    return (
        <Nav>
            <Link href="/">Main</Link>
            <Link href="/populars">Populars</Link>
            <Link href="/new-product">New Product</Link>
        </Nav>
    )
}

export default Navegation
