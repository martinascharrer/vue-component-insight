export type Color = 'mint' | 'red' | 'purple' | 'light-mint' | 'light-red' | 'light-purple';

export interface Mixin {
  name: string
  path: string
}

export type Prop = {
  name: string,
  type?: { name: string; func?: boolean | undefined; } | undefined,
  required?: boolean,
  default?: string,
  mixin?: Mixin,
}

export type Event = {
  name: string,
  isSync?: boolean,
  mixin?: Mixin,
}

export type Slot = {
  name: string,
}

export type Dependency = {
  fullPath: string,
  usedProps: number[], // indexOf used prop
  usedEvents: number[], // indexOf used event
}

export type VueComponent = {
  name: string,
  fullPath: string,
  fileName: string,
  fileType: string,
  fileContent: string,
  props: Prop[],
  events: Event[],
  slots: Slot[],
  dependencies: Dependency[],
}
export type Link = {
  source: string,
  target: string,
}

export type ForceLayout = {
  nodes: VueComponent[],
  links: Link[],
}
