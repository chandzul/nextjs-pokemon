import { FC, PropsWithChildren } from 'react'

import Head from 'next/head'
import { Navbar } from '../ui';

interface Props {
  title: string;
}

export const Layout: FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{ title || 'Pokémon App' }</title>
        <meta name='author' content='David Chandzul' />
        <meta name='description' content='Información sobre el pokémon XXXXXXX' />
        <meta name='keywords' content='XXXX, pokemon, pokedex' />
      </Head>

      <Navbar />

      <main className='container mx-auto px-4'>
        { children }
      </main>

    </>
  )
}
