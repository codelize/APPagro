import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {
    const navigation = useNavigation();

    const handleLogout = () => {
        alert('Logout realizado!');
        navigation.navigate('Login'); 
      };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Perfil</Text>
      </View>

      <View style={styles.profileContainer}>
        <View style={styles.profileImageContainer}>
          <Image
            source={{ uri: 'https://avatar.iran.liara.run/public/job/farmer/male' }}
            style={styles.avatar}
          />
          <TouchableOpacity style={styles.editIcon}>
            <FontAwesome name="pencil" size={16} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.userName}>Usuario logado</Text>
        <Text style={styles.userLocation}>📍 São Paulo, SP</Text>
        <View style={styles.ratingContainer}>
          <FontAwesome name="star" size={16} color="gold" />
          <Text style={styles.ratingText}>4.8</Text>
        </View>
      </View>


      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}onPress={() => navigation.navigate('MainTabs', { screen: 'Atividades' })}>
          <MaterialIcons name="account-circle" size={24} color="white" />
          <Text style={styles.menuText}>Detalhe do Perfil</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}onPress={() => navigation.navigate('MainTabs', { screen: 'Atividades' })}>
          <MaterialIcons name="folder" size={24} color="white" />
          <Text style={styles.menuText}>Avaliações</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}onPress={() => navigation.navigate('MainTabs', { screen: 'Atividades' })}>
          <MaterialIcons name="event" size={24} color="white" />
          <Text style={styles.menuText}>Atividadess</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}onPress={() => navigation.navigate('MainTabs', { screen: 'Atividades' })}>
          <MaterialIcons name="palette" size={24} color="white" />
          <Text style={styles.menuText}>Aparência</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}onPress={handleLogout}>
          <MaterialIcons name="logout" size={24} color="white" />
          <Text style={styles.menuText}>Sair</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#103F19',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#103F19',
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    marginLeft: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImageContainer: {
    position: 'relative',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#41784C',
    borderRadius: 50,
    padding: 5,
  },
  userName: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  userLocation: {
    color: '#ccc',
    fontSize: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  ratingText: {
    color: 'white',
    marginLeft: 5,
    fontSize: 16,
  },
  menuContainer: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomColor: '#41784C',
    borderBottomWidth: 1,
  },
  menuText: {
    color: 'white',
    fontSize: 18,
    flex: 1,
    marginLeft: 15,
  },
});