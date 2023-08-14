import { Layout } from '@/components/layouts'
import React, { FC, PropsWithChildren } from 'react'

interface Props {}

const FavoritesPage: FC<PropsWithChildren<Props>> = () => {
  return (
    <Layout title="Listado de Favoritos - Pokemon">
      <div>
      FavoritesPage
      </div>
    </Layout>
  )
}

export default FavoritesPage