function Card({ nome, idade, foto }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        width: "220px",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <img
        src={foto}
        alt={nome}
        width="120"
        height="120"
        style={{ borderRadius: "100%" }}
      />

      <h2>{nome}</h2>

      <p>Idade: {idade} anos</p>
    </div>
  );
}

export default Card;