import { SmallPokemon } from '@/interfaces'
import { Card, CardBody, CardFooter } from '@nextui-org/react'
import React, { FC, PropsWithChildren } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

interface Props {
  pokemon: SmallPokemon
}

export const PokemonCard: FC<PropsWithChildren<Props>> = ({ pokemon }) => {

  const router = useRouter()

  const onClick = () => {
    router.push(`/pokemon/${pokemon.id}`)
  }

  // className="w-full object-cover h-[140px]"

  return (
    <Card className="" shadow="sm" key={pokemon.id} isPressable onPress={onClick}>
      <CardBody className="overflow-visible p-0">
        <Image
          width={100}
          height={100}
          alt={pokemon.name}
          className="w-full object-cover h-full"
          src={pokemon.img}
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b className="uppercase">{pokemon.name}</b>
        <p className="text-default-500">{pokemon.id}</p>
      </CardFooter>
    </Card>
  )
}
