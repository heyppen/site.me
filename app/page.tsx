import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        tentt dev
      </h1>
      <p className="mb-4">
        {`I'm tentt, an indie hacker starting at 2024.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
