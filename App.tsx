import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Login from "./Login";
import Cadastro from "./Cadastro";

export default function App() {
  const [telaAtual, setTelaAtual] = useState<'login' | 'cadastro'>('login');

  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      {telaAtual === 'login' ? (
        <Login
          irParaCadastro={() => setTelaAtual('cadastro')}
          usuarioSalvo={usuario}
          emailSalvo={email}
          senhaSalva={senha}
        />
      ) : (
        <Cadastro
          voltarParaLogin={() => setTelaAtual('login')}
          setUsuario={setUsuario}
          setEmail={setEmail}
          setSenha={setSenha}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
});