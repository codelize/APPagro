//import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

export default function VeterinarioDetails() {
  const [favorito, setFavorito] = useState(false);

  const toggleFavorito = () => {
    setFavorito(!favorito);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Imagem principal */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/vet3.jpg')}
            style={styles.mainImage}
          />
          <TouchableOpacity onPress={toggleFavorito} style={styles.favoritoIcon}>
            <Ionicons
              name={favorito ? 'heart' : 'heart-outline'}
              size={32}
              color={favorito ? '#68D391' : '#fff'}
            />
          </TouchableOpacity>
        </View>

        {/* Informações do veterinário */}
        <View style={styles.infoContainer}>
          <Text style={styles.nome}>Dr. Carlos Pereira, 50</Text>
          <Text style={styles.localizacao}>
            <Ionicons name="location-outline" size={16} color="#fff" /> Fazenda Boa Vista
          </Text>
          <Text style={styles.distancia}>
            <Ionicons name="walk-outline" size={16} color="#fff" /> 5 km
          </Text>

          {/* Descrição breve */}
          <Text style={styles.descricao}>
            Dr. Carlos é especialista em cuidados com bovinos e tem mais de 20 anos de experiência no campo. Ele é conhecido pelo seu trabalho humanitário em várias fazendas da região.
          </Text>

          {/* Ações */}
          <View style={styles.actionsContainer}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionText}>Ver Perfil Completo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionText}>Agendar Consulta</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Carrossel de imagens adicionais */}
        <View style={styles.carouselContainer}>
          <Text style={styles.carouselHeader}>Imagens do Trabalho</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Image source={require('../../assets/vet1.jpg')} style={styles.carouselImage} />
            <Image source={require('../../assets/vet2.jpg')} style={styles.carouselImage} />
            <Image source={require('../../assets/vet3.jpg')} style={styles.carouselImage} />
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  scrollContainer: {
    paddingBottom: 40,
  },
  imageContainer: {
    position: 'relative',
  },
  mainImage: {
    width: '100%',
    height: 300,
    borderRadius: 12,
    marginBottom: 20,
  },
  favoritoIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  infoContainer: {
    paddingHorizontal: 20,
  },
  nome: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  localizacao: {
    fontSize: 16,
    color: '#A8A8A8',
    marginBottom: 5,
  },
  distancia: {
    fontSize: 16,
    color: '#A8A8A8',
    marginBottom: 20,
  },
  descricao: {
    fontSize: 16,
    color: '#EAEAEA',
    marginBottom: 20,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: '#68D391',
    padding: 12,
    borderRadius: 8,
    width: '48%',
  },
  actionText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  carouselContainer: {
    paddingHorizontal: 20,
  },
  carouselHeader: {
    color: '#EAEAEA',
    fontSize: 18,
    marginBottom: 10,
  },
  carouselImage: {
    width: width * 0.6,
    height: 150,
    borderRadius: 12,
    marginRight: 10,
  },
});
