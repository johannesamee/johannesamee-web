export type Categories = 'svelte' | 'markdown' | 'vercel' | 'llm' | 'poetry'

export type Post = {
  title: string
  slug: string
  description: string
  date: string
  categories: Categories[]
  published: boolean
}
