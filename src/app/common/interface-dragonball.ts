export interface InterfaceDragonball {
    items: Personaje[]
    meta: Meta
    links: Links
  }
  
  export interface Personaje {
    id: number
    name: string
    ki: string
    maxKi: string
    race: string
    gender: string
    description: string
    image: string
    affiliation: string
    deletedAt: any
    originPlanet: OriginPlanet
    transformations: Transformation[]
  }
  
  export interface Meta {
    totalItems: number
    itemCount: number
    itemsPerPage: number
    totalPages: number
    currentPage: number
  }
  
  export interface Links {
    first: string
    previous: string
    next: string
    last: string
  }

  export interface OriginPlanet {
    id: number
    name: string
    isDestroyed: boolean
    description: string
    image: string
    deletedAt: any
  }
  
  export interface Transformation {
    id: number
    name: string
    image: string
    ki: string
    deletedAt: any
  }
  