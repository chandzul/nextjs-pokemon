import React, { FC, PropsWithChildren } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Layout } from '@/components/layouts'
import { pokeApi } from '@/api'
import { Pokemon, PokemonListResponse } from '@/interfaces'
import { Button, Divider } from '@nextui-org/react'
import Image from 'next/image'

interface Props {
  pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {  

  return (
    <Layout title={ pokemon.name + ' - Pokemon '}>

      <div className="gap-6 grid grid-cols-2 mt-8 sm:grid-cols-2">
        <div>
          <Image
            width={100}
            height={100}
            alt={pokemon.name}
            className="w-full object-cover h-full"
            src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
          />
        </div>
        <div>

          <div className='max-w-md flex h-5 items-center space-x-4 mb-12'>
            <h2 className='text-6xl'> { pokemon.name } </h2>
            <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
              Guardar en Favoritos
            </Button>
          </div>

          <div className="max-w-md">
            <div className="space-y-1">
              <h4 className="text-medium font-medium">Sprites</h4>
              {/* <p className="text-small text-default-400">One description here!</p> */}
            </div>
            <Divider className="my-4 mb-8" />
            <div className="flex h-5 items-center space-x-4 text-small">
              <Image
                width={100}
                height={100}
                alt={pokemon.name}
                className="object-cover"
                src={pokemon.sprites.front_default}
              />
              <Divider orientation="vertical" />
              <Image
                width={100}
                height={100}
                alt={pokemon.name}
                className="object-cover"
                src={pokemon.sprites.back_default}
              />
              <Divider orientation="vertical" />
              <Image
                width={100}
                height={100}
                alt={pokemon.name}
                className="object-cover"
                src={pokemon.sprites.front_default}
              />
              <Divider orientation="vertical" />
              <Image
                width={100}
                height={100}
                alt={pokemon.name}
                className="object-cover"
                src={pokemon.sprites.back_default}
              />
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemon151 = [...Array(151)].map((value, index) => `${index + 1}`)

  return {
    paths: pokemon151.map(id => ({ params: { id } })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { id } = params as { id: string}

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${ id }`)

  return {
    props: {
      pokemon: data
    }
  }
}

export default PokemonPage