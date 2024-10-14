export default function Page() {
  return (
    <div className="py-16">
      <div className="mt-8 mx-2">
        <h1 className="font-bold text-[36px] mb-4">CamFinder</h1>
        <h2 className="text-2xl" id="privacy">
          Privacy
        </h2>
        <p>
          CamFinder needs access to your camera to display what you see, then
          run OCR algorithm via apple Vision library to find what you want. The
          data are all stored in local (in fact in memory). CamFinder does not
          collect any information except UI interactions or share any data with
          anyone. It also works well without network.
        </p>

        <h2 className="mt-4 text-2xl" id="support">
          Support
        </h2>
        <p>Any feedback or support, please contact hi@tentt.dev</p>
      </div>
    </div>
  );
}
