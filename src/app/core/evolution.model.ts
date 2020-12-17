export interface Evolution {
  id: number,
  name: string,
  sprite: string,
  min_level: number,
  is_baby: boolean,
  item?: { name: string },
  min_happiness: number
}

export interface EvolutionChain {
  chain: {
    evolves_to?: [
      {
        evolution_details: [
          {
            min_level: number,
            item: { name?: any },
            min_happiness?: number
          }],
        species: { name: string },
        evolves_to?: [
          {
            evolution_details: [
              {
                min_level: number,
                item: { name?: any },
              }],

            species: { name: string },
          }],
      }],
    is_baby: boolean,
    species: { name: string }
  }
}
