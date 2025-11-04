import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
import Input from "./components/ui/Input";
import Title from "./components/ui/Title";

function App() {
  return (
    <>
      <Title level={1} title={"Bienvenidos a Markway"} description={"🚧 En construcción... 🚧"}/>
      <Button variant="btn--secondary">Click me</Button>
      <Input label={"hola"} placeholder={"esto es un ejemplo"} />
      <Card title="Ejemplo de Card" description="Esta es una descripción de ejemplo para la tarjeta." />
    </>
  );
}

export default App;
