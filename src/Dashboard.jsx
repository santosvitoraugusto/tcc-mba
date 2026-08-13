import { useState } from "react";

function Dashboard() {
  const [busca, setBusca] = useState("");

  const produtos = [
    {
      id: 1,
      nome: "Notebook Dell",
      quantidade: 12,
      status: "Em estoque",
    },
    {
      id: 2,
      nome: "Mouse Logitech",
      quantidade: 3,
      status: "Baixo estoque",
    },
    {
      id: 3,
      nome: "Monitor LG",
      quantidade: 0,
      status: "Sem estoque",
    },
  ];

  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Armazena Pro</h1>

        <button style={styles.logout}>
          Sair
        </button>
      </header>

      <div style={styles.cards}>
        <div style={styles.card}>
          <h2>Produtos</h2>
          <p>152</p>
        </div>

        <div style={styles.card}>
          <h2>Pedidos</h2>
          <p>38</p>
        </div>

        <div style={styles.card}>
          <h2>Alertas</h2>
          <p>5</p>
        </div>
      </div>

      <div style={styles.tableContainer}>
        <h2>Estoque</h2>

        <input
          type="text"
          placeholder="Buscar produto"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          data-testid="campo-busca"
          style={styles.inputBusca}
        />

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Produto</th>
              <th style={styles.th}>Quantidade</th>
              <th style={styles.th}>Status</th>
            </tr>
          </thead>

          <tbody>
            {produtosFiltrados.map((produto) => (
              <tr key={produto.id}>
                <td style={styles.td}>{produto.id}</td>
                <td style={styles.td}>{produto.nome}</td>
                <td style={styles.td}>{produto.quantidade}</td>
                <td style={styles.td}>{produto.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#0f172a",
    color: "#fff",
    padding: "30px",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
  },

  logout: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#ef4444",
    color: "#fff",
    cursor: "pointer",
  },

  cards: {
    display: "flex",
    gap: "20px",
    marginBottom: "30px",
  },

  card: {
    backgroundColor: "#1e293b",
    padding: "20px",
    borderRadius: "10px",
    flex: 1,
  },

  tableContainer: {
    backgroundColor: "#1e293b",
    padding: "20px",
    borderRadius: "10px",
  },

  inputBusca: {
    width: "100%",
    boxSizing: "border-box",
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "5px",
    border: "1px solid #334155",
    backgroundColor: "#0f172a",
    color: "#fff",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  th: {
    textAlign: "left",
    padding: "10px",
    borderBottom: "1px solid #334155",
  },

  td: {
    padding: "10px",
    borderBottom: "1px solid #334155",
  },
};

export default Dashboard;