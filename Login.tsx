import React from "react";
import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import App from "./App";
 
type LoginProps = {
    irParaCadastro: () => void;
};
 
function Login({ irParaCadastro }: LoginProps) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
 
  const entrar = () => {
    console.log('Tentando login com:', { email, senha });
 
    Alert.alert('Login', 'Botão entrar clicando com sucesso!')
 
    setMensagem(`Bem-vindo(a)! login tentando com o email: ${email}`)
  };
 
  return (
    //View é o container principal - DIV PRINCIPAL
    <View style={styles.container}>
      {/*Titulo da tela */}
      <Text style={styles.titulo}>Login</Text>
      {/*TextInput é o campo onde o user digita o texto
                Value recebe o estado atual
                OnChangeText recebe a função para atualizar o estado */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {/* Campo de senha com secureTextEntry para esconder os caracteres*/}
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
      {/*{Botão que usa prop irParaCadastro para trocar de tela} */}
      <View style={styles.botao}>
        <Button title="Ir para Cadastro" onPress={irParaCadastro} />
      </View>
      {/*{Exibe a mensagem somente quando a tela tiver conteúdo}*/}
      {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}
    </View>
  )
}
 
const styles = StyleSheet.create({
  //Container principal centralizado
  container: {
    //flex: 1,
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
    borderWidth: 1,
    borderColor: '#cccccccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
 
  },
  botao: {
    width: '100%',
    marginTop: 8,
 
  },
  mensagem: {
    marginTop: 16,
    textAlign: 'center',
    color: '#1f7a1f',
 
  },
});
export default Login;