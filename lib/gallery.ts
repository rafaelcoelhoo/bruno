export const galleryCategories = ['Casas de banho e cozinhas', 'Interiores', 'Exteriores'] as const

export type GalleryCategory = (typeof galleryCategories)[number]

export type GalleryItem = {
  src: string
  alt: string
  title: string
  location: string
  category: GalleryCategory
}

const unsplash = (path: string) => `https://images.unsplash.com/${path}?auto=format&fit=crop&w=1400&q=80`

export const galleryItems: GalleryItem[] = [
  {
    src: unsplash('photo-1584622650111-993a426fbf0a'),
    alt: 'Casa de banho remodelada com base de duche e móvel de lavatório',
    title: 'Remodelação completa de casa de banho',
    location: 'Esmoriz',
    category: 'Casas de banho e cozinhas',
  },
  {
    src: unsplash('photo-1618832515490-e181c4794a45'),
    alt: 'Móvel branco de madeira junto a uma janela, parede acabada de pintar',
    title: 'Carpintaria e pintura interior',
    location: 'Válega',
    category: 'Interiores',
  },
  {
    src: unsplash('photo-1696846911635-83b97e53fb65'),
    alt: 'Moradia com logradouro relvado e alpendre coberto',
    title: 'Alpendre e arranjos exteriores',
    location: 'Maceda',
    category: 'Exteriores',
  },
  {
    src: unsplash('photo-1571843439991-dd2b8e051966'),
    alt: 'Cozinha remodelada com ilha central e bancos altos',
    title: 'Cozinha com ilha central',
    location: 'Ovar',
    category: 'Casas de banho e cozinhas',
  },
  {
    src: unsplash('photo-1736182615481-3795ea557614'),
    alt: 'Divisão em remodelação com paredes em reboco e ferramentas no chão',
    title: 'Remodelação de sala em curso',
    location: 'Cortegaça',
    category: 'Interiores',
  },
  {
    src: unsplash('photo-1696846912973-3233cc80bf86'),
    alt: 'Pátio coberto com sofá e mesa de exterior',
    title: 'Pátio coberto e pavimento exterior',
    location: 'Furadouro',
    category: 'Exteriores',
  },
  {
    src: unsplash('flagged/photo-1573168710465-7f7da9a23a15'),
    alt: 'Cozinha com candeeiros suspensos sobre a bancada',
    title: 'Cozinha e iluminação',
    location: 'Santa Maria da Feira',
    category: 'Casas de banho e cozinhas',
  },
  {
    src: unsplash('photo-1444419988131-046ed4e5ffd6'),
    alt: 'Paredes em betão e pavimento levantado durante a fase de demolição',
    title: 'Demolição e preparação de pavimento',
    location: 'Arada',
    category: 'Interiores',
  },
]
