import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";

type Props = {
  voltarParaLogin: () => void;
  setUsuario: (nome: string) => void;
  setEmail: (email: string) => void;
  setSenha: (senha: string) => void;
};

export default function Cadastro({ voltarParaLogin, setUsuario, setEmail, setSenha }: Props) {
  const [nome, setNomeLocal] = useState('');
  const [email, setEmailLocal] = useState('');
  const [senha, setSenhaLocal] = useState('');

  const cadastrar = () => {
    if (!nome || !email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    if (!email.includes("@")) {
      Alert.alert("Erro", "Digite um email válido");
      return;
    }

    setUsuario(nome);
    setEmail(email);
    setSenha(senha);

    Alert.alert("Sucesso", "Cadastro realizado!");

    setNomeLocal('');
    setEmailLocal('');
    setSenhaLocal('');

    voltarParaLogin();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNomeLocal}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmailLocal}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenhaLocal}
        secureTextEntry
      />

      <View style={styles.botao}>
        <Button title="Cadastrar" onPress={cadastrar} />
      </View>

      <View style={styles.botao}>
        <Button title="Voltar" onPress={voltarParaLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    maxWidth: 300,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  botao: {
    width: '100%',
    maxWidth: 300,
    marginTop: 8,
  },
});''