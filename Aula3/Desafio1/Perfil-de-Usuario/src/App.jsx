import Card from "./components/Card";

function App() {
  return (
    <>
      <Card
        nome="Matheus"
        idade={21}
        foto="https://i.pravatar.cc/150?img=3"
      />

      <br />

      <Card
        nome="Santiago"
        idade={20}
        foto="https://i.pravatar.cc/150?img=4"
      />
    </>
  );
}

export default App;