import { useState } from "react";
import logo from "./assets/armazena_pro.png";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [tipoMensagem, setTipoMensagem] = useState("");

  function handleLogin() {
    if (email === "admin@test.com" && senha === "123") {
      setMensagem("Login realizado com sucesso!");
      setTipoMensagem("sucesso");
    } else {
      setMensagem("Email ou senha inválidos");
      setTipoMensagem("erro");
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img
          src={logo}
          alt="Armazena Pro"
          style={styles.logo}
        />

        <p style={styles.subtitle}>
          Plataforma de Qualidade e Automação de Testes
        </p>

        <h2 style={styles.loginTitle}>
          Acesso ao sistema
        </h2>

        {mensagem && (
          <div
            data-testid="mensagem-login"
            style={
              tipoMensagem === "erro"
                ? styles.mensagemErro
                : styles.mensagemSucesso
            }
          >
            {mensagem}
          </div>
        )}

        <input
          data-testid="input-email"
          style={styles.input}
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          data-testid="input-senha"
          style={styles.input}
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button
          data-testid="botao-login"
          style={styles.button}
          onClick={handleLogin}
        >
          Acessar
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0f172a",
  },

  card: {
    backgroundColor: "#1e293b",
    padding: "40px",
    borderRadius: "10px",
    width: "320px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    boxShadow: "0 0 20px rgba(0,0,0,0.5)",
  },

  logo: {
    width: "300px",
    margin: "0 auto",
    display: "block",
  },

  subtitle: {
    color: "#94a3b8",
    fontSize: "12px",
    textAlign: "center",
    marginBottom: "20px",
  },

  loginTitle: {
    color: "#e2e8f0",
    textAlign: "center",
  },

  mensagemErro: {
    backgroundColor: "#7f1d1d",
    color: "#fecaca",
    padding: "10px",
    borderRadius: "5px",
    textAlign: "center",
    fontSize: "14px",
  },

  mensagemSucesso: {
    backgroundColor: "#064e3b",
    color: "#6ee7b7",
    padding: "10px",
    borderRadius: "5px",
    textAlign: "center",
    fontSize: "14px",
  },

  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #334155",
    backgroundColor: "#0f172a",
    color: "#fff",
  },

  button: {
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#38bdf8",
    color: "#000",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Login;