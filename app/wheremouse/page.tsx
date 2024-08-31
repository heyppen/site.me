export default function Page() {
  return (
    <div className="md:max-w-3xl m-auto my-16">
      <article className="prose">
        <h1>WhereMouse</h1>
        <p>
          <a href="https://apps.apple.com/app/wheremouse/id6529533408" target="_blank">
            WhereMouse
          </a>{" "}
          is a free native macOS app, you can press <code>Ctrl+Ctrl</code> to
          reveal your mouse's position.
        </p>
        <img src="/wheremouse-mockup.png" />

        <h2>Privacy</h2>
        <p>
          WhereMouse is an offline app, it does not use any network or access
          any other information.
        </p>

        <h2>Support</h2>
        <p>Any feedback or support, please contact hi@tentt.dev</p>
      </article>
    </div>
  );
}
