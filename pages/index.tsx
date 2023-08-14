import { pokeApi } from "@/api";
import { Layout } from "@/components/layouts";
import { PokemonListResponse, SmallPokemon } from "@/interfaces";
import { NextPage } from "next";
import { GetStaticProps } from 'next'
import { PropsWithChildren } from "react";
import { PokemonCard } from "@/components/pokemon";

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<PropsWithChildren<Props>> = ({ pokemons }) => {
  return (
    <Layout title="Listado de Pokémon's">
      <div className="gap-6 grid grid-cols-2 mt-4 sm:grid-cols-4">
        {
          pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        }
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }))
  
  return {
    props: {
      pokemons
    }
  }
}

export default HomePage;