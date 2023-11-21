import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';

const ViewIgor = ({ navigation }) => {
  const details = {
    name: 'Igor Moreno',
    age: 28,
    occupation: 'Developer',
    bio:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque libero vel massa commodo, id ultricies odio ultrices.',
  };

    // Estado para controlar a visibilidade do modal
    const [modalVisible1, setModalVisible1] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);
    const [modalVisible4, setModalVisible4] = useState(false);

  return (
    <LinearGradient
      colors={['rgb(61, 169, 78)', 'rgb(40, 101, 49)', 'rgb(19, 39, 23)', 'rgb(18, 18, 18)']}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} style={{ flex: 1 }}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Icon name="chevron-left" size={20} color="black" />
          </TouchableOpacity>
          <Image source={require('../../../assets/igor2.jpeg')} style={styles.image} />
          <View style={styles.nameAndButton}>
            <Text style={styles.name}>{details.name}</Text>
            <Image source={require("../../../assets/iconPlay.png")} style={{ width: 50, height: 50, marginRight: 10}}/>
          </View>
          <View style={styles.bandaDetails}>
            <Image source={require('../../../assets/bandaIgor.jpg')} style={styles.banda} />
            <Text style={styles.nomeBanda}>Rex Orange County</Text>
          </View>
          <View style={styles.album}>
            <Text style={styles.albumInfo}>Rex Orange County ° 2005</Text>
          </View>
          <View style={styles.function}>
            <Image source={require('../../../assets/functions.png')} style={styles.functionImage} />
          </View>
          <TouchableOpacity onPress={() => setModalVisible1(true)}>
            <View style={styles.bloco}>
              <Text style={styles.blocoNome}>Por que entrei nessa escola?</Text>
              <View style={styles.autor}>
                <Image source={require('../../../assets/iconDownload.png')} style={styles.iconDownload} />
                <Text style={styles.autorNome}>Work Song          </Text>
                <Image source={require('../../../assets/iconOptions.png')} style={styles.iconOptions} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible2(true)}>
            <View style={styles.bloco}>
              <Text style={styles.blocoNome}>Eu não aguento mais</Text>
              <View style={styles.autor}>
                <Image source={require('../../../assets/iconDownload.png')} style={styles.iconDownload} />
                <Text style={styles.autorNome}>Work Song          </Text>
                <Image source={require('../../../assets/iconOptions.png')} style={styles.iconOptions} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible3(true)}>
            <View style={styles.bloco}>
              <Text style={styles.blocoNome}>Como eu sobrevivi?</Text>
              <View style={styles.autor}>
                <Image source={require('../../../assets/iconDownload.png')} style={styles.iconDownload} />
                <Text style={styles.autorNome}>Work Song          </Text>
                <Image source={require('../../../assets/iconOptions.png')} style={styles.iconOptions} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible4(true)}>
            <View style={styles.bloco}>
              <Text style={styles.blocoNome}>Desespero Constante</Text>
              <View style={styles.autor}>
                <Image source={require('../../../assets/iconDownload.png')} style={styles.iconDownload} />
                <Text style={styles.autorNome}>Work Song          </Text>
                <Image source={require('../../../assets/iconOptions.png')} style={styles.iconOptions} />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Modal - Primeiro Ano Igor Moreno */}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible1}
          onRequestClose={() => {
            setModalVisible1(!modalVisible1);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {/* Retângulo azul */}
              <View style={styles.blueRectangle}>
                <Text style={styles.lettraText}>Primeiro Ano - Por que entrei nessa escola?</Text>
                <Text style={styles.paragraphText}>
                  Período cheio de desafios. Mudança recente para Santa Catarina juntamente de ingressar no IF. Um momento marcado pela necessidade de adaptação: rotina nova, lugar novo, pessoas novas, distanciamento. Lembro especialmente de passar muita dificuldade em matemática, física e geografia.                
                </Text>
              </View>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "rgb(40, 101, 49)" }}
                onPress={() => {
                  setModalVisible1(!modalVisible1);
                }}
              >
                <Text style={styles.textStyle}>Fechar</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        {/* Modal - Segundo Ano Arthur */}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible2}
          onRequestClose={() => {
            setModalVisible2(!modalVisible2);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {/* Retângulo azul */}
              <View style={styles.blueRectangle}>
                <Text style={styles.lettraText}>Segundo Ano - Eu não aguento mais</Text>
                <Text style={styles.paragraphText}>
                  Primeiro momento indo as aulas presenciais, ficava muito nervoso em estar novamente em ambientes público com muitas pessoas. Dei início ao TCC. Com o passar do tempo comecei a me enturmar, fiz muitos amizades que carrego com bastante carinho. Minha maior inimiga foi a Cristiane, agradeço todo dia por não ter mais que ter "aulas" com ela.                
                </Text>
              </View>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "rgb(40, 101, 49)" }}
                onPress={() => {
                  setModalVisible2(!modalVisible2);
                }}
              >
                <Text style={styles.textStyle}>Fechar</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        {/* Modal - Terceiro Ano Arthur */}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible3}
          onRequestClose={() => {
            setModalVisible3(!modalVisible3);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {/* Retângulo azul */}
              <View style={styles.blueRectangle}>
                <Text style={styles.lettraText}>Terceiro ano - Como eu sobrevivi?</Text>
                <Text style={styles.paragraphText}>
                  Ano em que consegui ficar mais confortável em interagir com as pessoas, foi quando comecei a me sentir mais confortável em ser eu mesmo. Fiz novas amizades, comecei a namorar, duvidei que iria conseguir desenvolver o meu TCC, consegui um 9,5 pela banca. Em retrocesso, esse foi provavelmente um dos melhores anos da minha vida.                
                </Text>
              </View>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "rgb(40, 101, 49)" }}
                onPress={() => {
                  setModalVisible3(!modalVisible3);
                }}
              >
                <Text style={styles.textStyle}>Fechar</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        {/* Modal - TCC */}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible4}
          onRequestClose={() => {
            setModalVisible4(!modalVisible4);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {/* Retângulo azul */}
              <View style={styles.blueRectangle}>
                <Text style={styles.lettraText}>Desespero Constante</Text>
                <Text style={styles.paragraphText}>
                Tive pouca ajuda do meu orientador e coorientador, quem mais me auxiliaram foram meus colegas, como o Luís e o Vitor. Durante muito tempo questionei se conseguiria realmente entregar o meu projeto, perguntava toda semana pros meus amigos se eu conseiguiria me formar no ensino médio sem concluir o TCC. Porém, após muito esforço, consegui chegar em uma etapa satisfatória no meu sistema, em que me sentia confortável em apresentá-lo a banca.                </Text>
              </View>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "rgb(40, 101, 49)" }}
                onPress={() => {
                  setModalVisible4(!modalVisible4);
                }}
              >
                <Text style={styles.textStyle}>Fechar</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
    padding: 10,
  },
  image: {
    width: 280,
    height: 240,
    marginBottom: 20,
    marginTop: 70,
  },
  nameAndButton: {
   flexDirection: 'row',
  },
  name: {
    fontSize: 24,
    color: 'white',
    marginBottom: 10,
    marginRight: 140,
  },
  banda: {
    width: 28,
    height: 27,
    borderRadius: 10,
    marginRight: 10,
  },
  bandaDetails: {
    flexDirection: 'row',
    marginRight: 180,
  },
  nomeBanda: {
    fontSize: 14,
    color: 'white',
    textAlignVertical: 'center',
  },
  album: {
    flexDirection: 'row',
    marginTop: 10,
    marginRight: 180,
    width: '100%',
  },
  albumInfo: {
    color: '#B3B3B3',
    fontSize: 13,
  },
  function: {
    flexDirection: 'row',
    marginTop: 10,
    marginRight: 204,
  },
  functionImage: {
    width: 150,
    height: 30,
  },
  detailsText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
  },
  bloco: {
    marginEnd: 'auto',
    marginLeft: 10,
    marginTop: 20,
  },
  blocoNome: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'Roboto',
  },
  autor: {
    flexDirection: 'row',
    marginTop: 5,
    width: '100%',
  },
  autorNome: {
    color: '#B3B3B3',
    fontSize: 14,
    textAlignVertical: 'center',
  },
  iconDownload: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  iconOptions: {
    width: 25,
    height: 6,
    marginTop: 8,
    marginLeft: 180,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalContent: {
    backgroundColor: "rgb(40, 101, 49, 0.5)", // Código de cor azul com 80% de opacidade
    borderRadius: 10,
    width: '80%',
    height: '65%',
    padding: 10,
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  blueRectangle: {
    backgroundColor: "rgb(40, 101, 49)",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  lettraText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: 'center'
  },
  paragraphText: {
    color: "white",
    fontSize: 16,
    textAlign: "justify",
  },
});

export default ViewIgor;
