import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Proectos',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Proyectos en los que trabaje</h1>
      <BlogPosts />
    </section>
  )
}
