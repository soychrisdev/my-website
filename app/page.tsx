import Navbar from "@/components/main/header/navbar";

export default function Home() {
  return (
    <main className="container m-auto min-h-screen py-4 px-4 p-2">
      <div className="grid grid-col-2 sm:grid-cols-1">
        {/* header / navbar */}
        <div className="flex justify-between">
          <Navbar />
        </div>
        {/* landing content 1 */}
        <div className="flex justify-center">
          <h1 className="font-extrabold text-2xl">
            Christian Mesina, Software Engineer.
          </h1>
        </div>
      </div>
    </main>
  );
}
