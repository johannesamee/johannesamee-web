export type Categories = 'svelte' | 'markdown' | 'vercel' | 'llm'

export type Post = {
  title: string
  slug: string
  description: string
  date: string
  categories: Categories[]
  published: boolean
}
