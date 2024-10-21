// src/components/Profile.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface ProfileProps {
  userName: string;
  userLocation: string;
  avatarUrl: string;
}

const Profile: React.FC<ProfileProps> = ({ userName, userLocation, avatarUrl }) => {
  return (
    <View style={styles.profileContainer}>
      <Image source={{ uri: avatarUrl }} style={styles.avatar} />
      <Text style={styles.userName}>{userName}</Text>
      <Text style={styles.userLocation}>{userLocation}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#333',
    borderRadius: 12,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
    borderColor: '#555',
    borderWidth: 2,
  },
  userName: {
    color: '#EAEAEA',
    fontSize: 20,
    fontWeight: '600',
  },
  userLocation: {
    color: '#A8A8A8',
    fontSize: 14,
    marginTop: 3,
  },
});

export default Profile;
