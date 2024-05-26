export default function About() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="grid grid-cols-1 py-5 md:py-14">
      <div className="flex flex-col items-center justify-center bg-white rounded-md drop-shadow-md p-20">
        <div className="py-20">about</div>
        <div className="py-10">
          <p className="text-lg font-bold text-center pb-4">
            Taisei Hasegawa (tortilla)
          </p>
          <p className="py-2">
            web: <a href="https://tortilla.page">tortilla.page</a>
          </p>
          <p className="py-2">sns: </p>
          <p className="py-2">
            contact:
            <a href="mailto:tortillataco00@gmail.com">
              tacotortilla0@gmail.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
