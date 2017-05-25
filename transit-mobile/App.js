import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { fetchTransit } from './constants/api';

export default class App extends React.Component {

  static defaultProps = {
      fetchTransit
  }

  state = {
    loading: false,
    stops: []
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const data = this.props.fetchTransit();

    this.setState({ loading: false, stops: data.transit });
  }
  render() {

    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
    );
    }
    return (
      <View style={styles.container}>
        <Text>Welcome to the transit app!!!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
