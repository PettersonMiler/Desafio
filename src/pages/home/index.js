import React, { Component } from 'react';
import api from 'services/api';
import {
  View,
  ActivityIndicator,
  FlatList,
  StatusBar,
} from 'react-native';
import { colors } from 'styles';
import styles from './styles';
import Lista from './components/Lista';

export default class Home extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    data: [],
    base: [],
    loading: true,
  }

  componentDidMount() {
    this.loadList();
  }

  loadList = async () => {
    const response = await api.get('tarefa');

    this.setState({ data: response.data });

    /* try {
      const retorno = await this.state.data.lista.map(item => (api.get(`/tarefa/${item}`)));
      this.setState({
        base: retorno.data,
        loading: true,
        refreshing: false,
      });
    } catch (err) {
      console.tron.log('Erro:', err);
    }
    Não excuta o setState, assim n passando a informação,
    não sei como arrumar escrevendo dessa forma,
    por isso realizei essa parte da forma antiga
    */
    this.state.data.lista.map(item => {
      api.get(`/tarefa/${item}`)
      .then(result => {
        this.setState({
          base: [...this.state.base, result.data],
          loading: false,
          });
        });
    });
  }

  renderList = () => (
    <View>
      <FlatList
        data={this.state.base}
        renderItem={({ item }) => <Lista lista={item} />}
        keyExtractor={item => String(item.id)}
      />
    </View>
  );

  render() {
    console.tron.log(this.state.base);
    console.tron.log(this.state.data);

    return (
      <View style={styles.conteudo}>
        <StatusBar
          backgroundColor={colors.padrao}
          barStyle="light-content"
        />

        { this.state.loading
          ? <ActivityIndicator style={styles.loading} />
          : this.renderList() }
      </View>
    );
  }
}
