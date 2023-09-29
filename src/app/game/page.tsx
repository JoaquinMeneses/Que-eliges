import NavBar from "../../components/NavBar";

const Game = () => {
  return (
    <div className="h-screen flex flex-col">
      <NavBar />
      <div className="flex flex-row flex-1">
        <div className="w-1/2 bg-blue-500">Contenido Azul</div>
        <div className="w-1/2 bg-red-500">Contenido Rojo</div>
      </div>
    </div>
  );
};

export default Game;
