export default async function Home() {
  const res = await fetch("http://localhost:8000/health");
  const data = await res.json();
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Welcome to KH2 Randomizer Seed Sharing.
          </h1>
          <p className="max-w-xs text-lg text-black/80 dark:text-zinc-50/80">
            This is a website for sharing Kingdom Hearts 2 randomizer seeds. You can view and download seeds that other users have shared, as well as upload your own seeds for others to enjoy.
          </p>
          <p className="max-w-xs text-lg text-black/80 dark:text-zinc-50/80">
            The API is currently running at: {data.status}
          </p>
        </div>

    </div>
  );
}
