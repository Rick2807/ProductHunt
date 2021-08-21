import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import Search from '../ui/Search'
import Button from '../ui/Button'
import Navegation from './Navegation'



const HeaderContainer = styled.div`
    max-width: 1200px; 
    width: 95%;
    margin: 0 auto; 
    @media (min-width: 768px){
        display: flex; 
        justify-content: space-between; 
    }
`
const Logo = styled.p`
    color: var(--naranja);
    font-size: 4rem; 
    line-height: 0; 
    font-weight: 700; 
    font-family: 'Roboto Slab', serif; 
    margin-right: 2rem; 

    &:hover{
        cursor: pointer; 
    }
`

const Header = () => {
    
    const user = false; 

    return (

        <header
            css={css`
                    border-bottom: 2px solid var(--gris3);
                    padding: 1rem 0;
                `}
        >

            <HeaderContainer>

                <div
                    css={css`
                            display: flex; 
                            align-items: center; 
                        `}
                >
                    <Link href="/">
                        <Logo>P</Logo>
                    </Link>
                    {/* Search Input goes here */}
                    <Search />
                    {/* Nav Here */}     
                    <Navegation />
                </div>

                <div 
                    css={css`
                        display: flex; 
                        align-items: center; 
                    `}
                >
                    {/**  Admin Menu Goes here */}

                    {user ?
                        <>
                            <p
                            css={css`
                                margin-right: 2rem;  
                            `  }
                            >Hi: Rick</p>

                            <Button bgColor="true">Sign Out</Button>
                        </> :
                        <>
                            <Link href="/login">
                            <Button
                                bgColor="true"
                            >Log In</Button>
                            </Link>
                            <Link href="/create-account">
                                <Button>Create Account</Button>
                            </Link>
                        </>
                    }           
                </div>

            </HeaderContainer>
        </header>
    )
}

export default Header
