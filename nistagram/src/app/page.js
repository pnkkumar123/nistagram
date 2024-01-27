import Header from "../../components/Header";

export default function Home() {
  return (
    <>
      <div className="relative">
        <div className="w-full top-0 z-50 bg-white">
          <Header />
        </div>
        <div className="pt-16">
          <h1 className="text-2xl font-semibold">This is the Instagram 2.0 build</h1>
          {/* The rest of your content */}
        </div>
      </div>
    </>
  );
}
