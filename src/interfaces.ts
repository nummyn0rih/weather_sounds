export interface Weather {
  id: number
  name: string
  bg: string
  sound: string
  icon: string
}

export type WeathersItems = Record<number, Weather>
