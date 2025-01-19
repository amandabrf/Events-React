import "./styles.css";

export default function App() {
  const handleChange = (e) => {
    console.log("Valor digitado:", e.target.value);
  };

  const handleClick = () => {
    console.log("Botão Clicado!");
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //Evita o reload da página
    console.log("Formulário enviado!");
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Digite seu nome!"
        />
        <button type="submit" onClick={handleClick}>
          Enviar
        </button>
      </form>
    </div>
  );
}
