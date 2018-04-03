import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Rating } from 'react-native-elements';

import { colors, metrics } from 'styles';
import styles from './styles';
import { Ligar, Servicos, Endereco, Favoritos } from './components/Botoes';
import HeaderLocal from './components/HeaderLocal';

export default class Locais extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <HeaderLocal lista={navigation.state.params} />,
    headerStyle: {
      backgroundColor: colors.padrao,
    },
    headerTintColor: colors.item,
  });

  state = {
    places: [
      {
        id: this.props.navigation.state.params.id,
        latitude: this.props.navigation.state.params.latitude,
        longitude: this.props.navigation.state.params.longitude,
      },
    ],
  };

  _mapReady = () => {
    this.state.places[0].mark.showCallout();
  };

  scroll() {
    this.scrollView.scrollTo({ y: metrics.screenWidth });
  }

  render() {
    const { latitude, longitude } = this.state.places[0];
    const dados = this.props.navigation.state.params;

    return (
      <ScrollView ref={ref => this.scrollView = ref} >
        <Image
          source={{
            uri: dados.urlFoto,
            width: metrics.screenWidth,
            height: (metrics.screenHeight - 200) / 2,
          }}
        />
        <View style={styles.tituloConteiner}>
          <Text style={styles.lorem}>{dados.titulo}</Text>
          <View style={styles.boxLogo}>
            <View style={styles.positionLogo}>
              <Image
                style={styles.logo}
                source={{ uri: dados.urlLogo }}
              />
            </View>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.botoes}>

            <Ligar dados={dados} />
            <Servicos />
            <Endereco dados={dados} />

            <TouchableOpacity
              onPress={this.scroll.bind(this)}
              style={styles.botaoComent}
            >
              <Icon name="comments-o" size={20} style={styles.iconeBotao} />
              <Text style={styles.textoBotao} >Comentarios</Text>
            </TouchableOpacity>

            <Favoritos />

          </View>
          <View style={styles.boxTexto}>
            <Text style={styles.texto}>{dados.texto}</Text>
          </View>
        </View>
        <View style={styles.conteudo}>
          <MapView
            ref={map => this.mapView = map}
            initialRegion={{
              latitude,
              longitude,
              latitudeDelta: 0.0100,
              longitudeDelta: 0.0100,
            }}
            style={styles.mapView}
            rotateEnabled={false}
            scrollEnabled={false}
            zoomEnabled={false}
            showsPointsOfInterest={false}
            showBuildings={false}
            onMapReady={this._mapReady}
          >
            { this.state.places.map(place => (
              <MapView.Marker
                ref={mark => place.mark = mark}
                key={place.id}
                coordinate={{
                  latitude: place.latitude,
                  longitude: place.longitude,
                }}
              />
            ))}
          </MapView>

          <View style={styles.rodapeMap}>
            <Text style={styles.rodapeText}>{dados.endereco}</Text>
            <View style={styles.positionIcone}>
              <Icon name="map-marker" size={20} style={styles.rodapeIcone} />
            </View>
          </View>

        </View>
        <View style={styles.boxComent}>
          { dados.comentarios.map(coment => (
            <View style={styles.conteudoComent} key={dados.id}>
              <Image
                source={{
                  uri: coment.urlFoto,
                }}
                style={styles.imagemComent}
              />
              <View style={styles.textoComent}>
                <View style={styles.nota}>
                  <Text style={styles.tituloComent}>{coment.nome}</Text>
                  <Rating
                    type="star"
                    fractions={1}
                    readonly
                    startingValue={coment.nota}
                    imageSize={15}
                  />
                </View>
                <Text style={styles.tituloComent}>{coment.titulo}</Text>
                <View style={styles.comentario}>
                  <Text style={styles.tituloComent}>{coment.comentario}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
}

