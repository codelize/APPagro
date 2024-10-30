import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, SafeAreaView, TouchableOpacity, Image, ActivityIndicator, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FIRESTORE_DB, FIREBASE_STORAGE } from '../Firebase';
import { collection, getDocs, query, limit } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import styles from '../styles/LifeScreenStyles';

const formatDate = (timestamp) => {
    if (!timestamp) return '';
    const date = timestamp.toDate();
    return date.toLocaleDateString();
};

const formatCurrency = (value) => {
    if (typeof value !== 'number') return 'R$ 0,00';
    return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    });
};

const LifeScreen = ({ navigation }) => {
    const [animalStock, setAnimalStock] = useState([]);
    const [expandedId, setExpandedId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchAnimals = async () => {
        setLoading(true);
        setError(null);

        try {
            const animalQuery = query(collection(FIRESTORE_DB, 'bovine'), limit(10));
            const querySnapshot = await getDocs(animalQuery);

            const animals = await Promise.all(querySnapshot.docs.map(async (doc) => {
                const data = doc.data();
                let imageUrl = null;
                if (data.imageName) {
                    const imageRef = ref(FIREBASE_STORAGE, `animal_images/${data.imageName}`);
                    imageUrl = await getDownloadURL(imageRef);
                }

                return {
                    id: doc.id,
                    ...data,
                    imageUrl: imageUrl || 'https://via.placeholder.com/60'
                };
            }));

            setAnimalStock(animals);
        } catch (error) {
            console.error("Erro ao buscar dados do Firestore ou Storage:", error);
            setError("Não foi possível carregar os dados. Verifique sua conexão e tente novamente.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAnimals();
    }, []);

    const toggleExpand = (id) => {
        setExpandedId(prevId => (prevId === id ? null : id));
    };

    const handleViewHistory = (animalId) => {
        navigation.navigate('AnimalHistory', { animalId });
    };

    const renderAnimalItem = ({ item }) => {
        const isExpanded = item.id === expandedId;

        const healthStatusStyle = {
            "Saudável": { color: '#68D391' },
            "Em Observação/Tratamento": { color: '#FFD700' },
            "Crítico": { color: '#FF4C4C' },
        }[item.healthStatus] || { color: '#B0B0B0' };

        return (
            <TouchableOpacity onPress={() => toggleExpand(item.id)} style={styles.card}>
                <View style={styles.row}>
                    <Image source={{ uri: item.imageUrl }} style={styles.animalImage} />
                    <View style={styles.infoContainer}>
                        <Text style={[styles.title, { marginBottom: 4 }]}>{item.name}</Text>
                        <Text style={styles.info}>{item.species}</Text>
                        <Text style={styles.info}>
                            Saúde: <Text style={healthStatusStyle}>{item.healthStatus}</Text>
                        </Text>
                    </View>

                    <Ionicons
                        name={isExpanded ? 'chevron-up-outline' : 'chevron-down-outline'}
                        size={24}
                        color="#B0B0B0"
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 8,
                        }}
                    />
                </View>

                {isExpanded && (
                    <View style={styles.expandedSection}>
                        <Text style={styles.info}>
                            <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Nascimento: </Text>
                            {formatDate(item.birthDate)}
                        </Text>
                        <Text style={styles.info}>
                            <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Peso: </Text>
                            {item.weight}
                        </Text>
                        <Text style={styles.info}>
                            <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Última Consulta: </Text>
                            {formatDate(item.lastConsultation)}
                        </Text>
                        <Text style={styles.info}>
                            <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Localização: </Text>
                            {item.location}
                        </Text>
                        <Text style={styles.info}>
                            <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Valor de Mercado: </Text>
                            {formatCurrency(item.marketValue)}
                        </Text>

                        {/* Botão "Ver histórico" */}
                        <TouchableOpacity onPress={() => handleViewHistory(item.id)} style={styles.historyButton}>
                            <Text style={styles.historyButtonText}>Ver histórico</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={28} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Animais</Text>
            </View>

            {loading ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="#fff" />
                </View>
            ) : error ? (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>{error}</Text>
                    <TouchableOpacity onPress={fetchAnimals} style={styles.reloadButton}>
                        <Text style={styles.reloadText}>Tentar Novamente</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <FlatList
                    data={animalStock}
                    renderItem={renderAnimalItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{ flexGrow: 0 }}
                />
            )}
        </SafeAreaView>
    );
};

export default LifeScreen;
