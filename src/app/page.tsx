import Link from "next/link";

const Main = () => {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <h1>Que eliges?</h1>
      <Link href="/game">Ir al juego</Link>{" "}
    </main>
  );
};

export default Main;
