import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native"
import { useSelector, useDispatch } from 'react-redux';
import { userChangeHandler, passChangeHandler, inValidHandler, fetchJsonData } from "./actions"

export default function loginApp({ navigation }) {

  const userName = useSelector((state) => state.username)
  const password = useSelector((state) => state.password)
  const invalid = useSelector((state) => state.invalid)
  const employeData = useSelector((state) => state.employeData)
  
  const dispatch = useDispatch();

  const changeHandlerUesrName = (e) => dispatch(userChangeHandler(e))
  const changeHandlerPassword = (e) => dispatch(passChangeHandler(e))
  const setInvalid = (e) => dispatch(inValidHandler(e))
  const fetchJsonDataHandle = (e) => dispatch(fetchJsonData(e))

  useEffect(() => {
    fetchJsonDataHandle()
  }, [])

  const onSubmit = (e) => {
    if (userName == employeData.auth.username && password == employeData.auth.password) {
      setInvalid("")
      navigation.navigate('Details')
    } else {
      setInvalid("email and password not matched")
    }
  }

  const buttonEnable = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(userName) && /^(?=.*\d)(?=.*[a-z]).{8,20}$/.test(password)) {
      return (<TouchableOpacity style={styles.ButtonDis} onPress={onSubmit} disabled={false}>
        <Text style={styles.button}>Login</Text>
      </TouchableOpacity>)
    } else {
      return (<TouchableOpacity style={styles.ButtonEna} disabled={true}>
        <Text style={styles.buttonDis}>Login</Text>
      </TouchableOpacity>)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Login</Text>
      <Text style={styles.invalid}>{invalid}</Text>
      <Text style={{ marginLeft: 55, alignSelf: 'flex-start', marginBottom: -30, fontSize: 15, color: '#b3b3b3' }}>username</Text>
      <TextInput
        style={styles.input}
        placeholder="username"
        onChangeText={changeHandlerUesrName}
      />
      <Text style={{ fontSize: 10, color: '#b3b3b3' }}>Ex : hruday@gmail.com</Text>

      <Text style={{ marginLeft: 55, alignSelf: 'flex-start', marginBottom: -30, fontSize: 15, color: '#b3b3b3' }}>password</Text>
      <TextInput
        type="password"
        style={styles.input}
        placeholder="password"
        secureTextEntry={true}
        minLength={8}
        maxLength={20}
        onChangeText={changeHandlerPassword}
      />
      <Text style={{ fontSize: 10, color: '#b3b3b3' }}>Ex : hruday123</Text>

      {buttonEnable()}

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 35,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  buttonDis: {
    color: '#cccccc',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  invalid: {
    fontSize: 10,
    textAlign: 'center',
    color: 'red',
    marginBottom: 5,
  },
  input: {
    backgroundColor: "white",
    width: 260,
    height: 50,
    borderWidth: 2,
    borderColor: "#8e9591",
    borderRadius: 5,
    marginTop: 40
  },
  ButtonEna: {
    borderColor: "#cccccc",
    width: 230,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 40
  },
  ButtonDis: {
    backgroundColor: "#2ccce4",
    width: 230,
    height: 50,
    borderRadius: 5,
    marginTop: 40
  }
});










