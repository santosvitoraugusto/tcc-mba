import { useState } from "react";

function Dashboard() {
  const [busca, setBusca] = useState("");
  const [modalAberto, setModalAberto] = useState(false);

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

        <button
          data-testid="botao-novo-produto"
          style={styles.botaoNovo}
          onClick={() => setModalAberto(true)}
        >
          Novo Produto
        </button>

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

      {modalAberto && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <h2>Novo Produto</h2>

            <input
              data-testid="input-produto"
              placeholder="Descrição do produto"
              style={styles.inputModal}
            />

            <input
              data-testid="input-quantidade"
              placeholder="Quantidade"
              style={styles.inputModal}
            />

            <div style={styles.modalButtons}>
              <button
                data-testid="botao-salvar"
                style={styles.salvar}
                onClick={() => setModalAberto(false)}
              >
                Confirmar
              </button>       

              <button
                style={styles.cancelar}
                onClick={() => setModalAberto(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
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

  botaoNovo: {
    marginBottom: "20px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#38bdf8",
    color: "#000",
    fontWeight: "bold",
    cursor: "pointer",
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

  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  modal: {
    backgroundColor: "#1e293b",
    padding: "30px",
    borderRadius: "10px",
    width: "400px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  inputModal: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #334155",
    backgroundColor: "#0f172a",
    color: "#fff",
  },

  modalButtons: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
  },

  salvar: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#22c55e",
    color: "#fff",
    cursor: "pointer",
  },

  cancelar: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#ef4444",
    color: "#fff",
    cursor: "pointer",
  },
};

export default Dashboard;