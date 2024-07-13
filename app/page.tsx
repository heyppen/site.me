import { BlogPosts } from 'app/components/posts'
import { Projects } from './components/projects'

export default function Page() {
  return (
    <section className='lg:mt-24'>
      <h1 className="text-2xl font-semibold tracking-tighter">
      🏕️ tentt dev 
      </h1>
      <p className="mt-4">
        {`I'm tentt, an indie hacker starting at 2024.`}
      </p>
      <div className="mt-8">
        <h2 className='mb-4 text-lg font-semibold'>Projects</h2>
        <Projects />
      </div>
      <div className="mt-8">
        <h2 className='mb-4 text-lg font-semibold'>Blogs</h2>
        <BlogPosts />
      </div>
    </section>
  )
}
