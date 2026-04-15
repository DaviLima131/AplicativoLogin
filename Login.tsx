import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

type Props = {
  irParaCadastro: () => void;
  usuarioSalvo: string;
  emailSalvo: string;
  senhaSalva: string;
};

export default function Login({ irParaCadastro, usuarioSalvo, emailSalvo, senhaSalva }: Props) {
  const [nomeOuEmail, setNomeOuEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const entrar = () => {
    if (!nomeOuEmail || !senha) {
      Alert.alert("Erro", "Preencha tudo!");
      return;
    }

    const usuarioValido =
      nomeOuEmail === usuarioSalvo || nomeOuEmail === emailSalvo;

    if (!usuarioValido || senha !== senhaSalva) {
      Alert.alert("Erro", "Dados incorretos!");
      return;
    }

    setMensagem(`Bem-vindo(a), ${usuarioSalvo}!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>

      {usuarioSalvo ? (
        <Text>Último usuário: {usuarioSalvo}</Text>
      ) : null}

      <TextInput
        style={styles.input}
        placeholder="Nome ou Email"
        value={nomeOuEmail}
        onChangeText={setNomeOuEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <View style={styles.botao}>
        <Button title="Entrar" onPress={entrar} />
      </View>

      <View style={styles.botao}>
        <Button title="Ir para Cadastro" onPress={irParaCadastro} />
      </View>

      {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}
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
  mensagem: {
    marginTop: 16,
    textAlign: 'center',
    color: 'green',
  },
});