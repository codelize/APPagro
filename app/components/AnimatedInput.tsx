import React, { useEffect } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

const AnimatedInput = ({ placeholder, secureTextEntry, error }) => {
  const shakeValue = useSharedValue(0); // Valor compartilhado para animar o shake

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(shakeValue.value, {
            damping: 4,
            stiffness: 150,
          }),
        },
      ],
    };
  });

  // Atualiza a animação quando houver um erro
  useEffect(() => {
    if (error) {
      shakeValue.value = 10; // Inicia o shake
      setTimeout(() => {
        shakeValue.value = 0; // Volta ao normal após a animação
      }, 500);
    }
  }, [error]); // Atualiza apenas quando o valor de 'error' mudar

  return (
    <Animated.View style={[animatedStyle]}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={[styles.input, error && styles.inputError]} // Aplica o estilo de erro
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '90%',
    height: 50,
    backgroundColor: '#333',
    paddingHorizontal: 15,
    marginBottom: 15,
    borderRadius: 12,
    fontSize: 16,
    color: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 2,
  },
  inputError: {
    borderColor: 'red',
    borderWidth: 1,
  },
});

export default AnimatedInput;
