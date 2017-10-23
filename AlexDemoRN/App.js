/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, ImageBackground
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {

      let pic = {
          uri:"http://blog.cnbang.net/wp-content/uploads/2015/03/ReactNative1.png"
      };

      console.log(pic.uri);

    return (
      <View style={styles.container}>
        <ImageBackground source={pic} style={{width:514, height:533}}>
            <MyComponent text="哈喽中文">
            </MyComponent>
            <MyComponent text="this is demo">
            </MyComponent>
        </ImageBackground>
      </View>
    );
  }
}

class MyComponent extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {tail:0};

        var tmp = 1234;

        if (true) {
            let tmp = 'abc'; // ReferenceError
            console.log('let:' + tmp);
        }
        console.log('var:' + tmp);

        // let x = do
        //     {
        //         let t = 2;
        //         t * t + 1;
        //     };
        // console.log('x:' + x);

        {
            {
                let insane = 'in'
                console.log('insane:' + insane);
            }
            let insane = 'out';
            console.log('insane:' + insane);
        }

        setInterval(() =>
        {
            this.setState(preState => {
                let tail = preState.tail + 1;
                if(tail > 3)
                    tail = 0;
                return {tail: tail};
            });
        });
    }

    render() {

        let dis = this.props.text + '~' + this.state.tail;

        return(
            <Text style={styles.instructions}>
                {dis}
            </Text>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
