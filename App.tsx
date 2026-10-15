import React, { useState } from 'react';

import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleBack = () => {
    console.log('Артқа қайту батырмасы басылды');
  };

  const forgetPassword = () =>{
    console.log("Забыль пароль?");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>
        {/* Кнопка "Назад" в виде стрелочки */}
        <Pressable
          style={styles.backButton}
          onPress={handleBack}
        >
          <Text style={styles.backButtonText}>←</Text>
        </Pressable>

        <Text style={styles.title}>
          Привет, с возвращением!
        </Text>

        <Text style={styles.subtitle}>
          Войдите в свой аккаунт.
        </Text>

        <View style={styles.inputContainer}>
          {/* Иконка телефона в виде текстового символа 📞 */}
          <Text style={styles.inputIconText}>📞</Text>

          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            placeholder="Номер телефона"
            placeholderTextColor="#AAA9B2"
            keyboardType="phone-pad"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputIconText}>🔒</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Пароль"
            placeholderTextColor="#AAA9B2"/>
        </View>

        <Pressable 
         onPress={forgetPassword}>
          <Text style={styles.forgetBtn}>
            Забыль пароль? 
          </Text>
        </Pressable>

        <Pressable style={styles.loginBtn}>
          <Text style={styles.loginBtnText}>Войти</Text>
        </Pressable>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  container: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 10,
    backgroundColor: '#FFFFFF',
  },

  backButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 24,
  },

  /* Стили для текстовой стрелочки назад */
  backButtonText: {
    fontSize: 32,
    color: '#1B1923',
    fontWeight: '300',
  },

  title: {
    color: '#1B1923',
    fontSize: 27,
    fontWeight: '700',
    lineHeight: 34,
  },

  subtitle: {
    color: '#AAA9B2',
    fontSize: 18,
    marginTop: 3,
    marginBottom: 29,
  },

  inputContainer: {
    width: '100%',
    height: 62,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8FA',
    borderRadius: 18,
    paddingHorizontal: 18,
    marginBottom:14,
  },

  /* Стили для текстовой иконки телефона */
  inputIconText: {
    fontSize: 20,
    marginRight: 14,
  },

  input: {
    flex: 1,
    height: '100%',
    color: '#1B1923',
    fontSize: 18,
  },
  forgetBtn:{
    color:"#A811DA",
    fontSize:18,
    fontWeight:600,
    marginLeft:200,
  },
  loginBtn:{
    marginTop:16,
    width: '100%',
    height: 62,
    justifyContent:'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#A811DA',
    borderRadius: 18,
    paddingHorizontal: 18,
    marginBottom:14,
  },
  loginBtnText:{
    fontWeight:600,
    fontSize:18,
    color:"#FFFF"
  },

});

