import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        boocai's tent
      </h1>
      <p className="mb-4">
        {`I'm boocai, an indie hacker starting at 2024.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
