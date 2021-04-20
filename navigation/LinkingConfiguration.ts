/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
          Home:{
            screens:{
              Home:'Home'
          },
        },
          Cadastro:{
            screens:{
           Cadastro:'Cadastro'
          },
        },
          Carrinho:{
            screens:{
              Carrinho: 'Carrinho'

            },
          },
          Perfil:{
            screens: {
              Perfil: 'Perfil'
            },
          },


        },
      },
      NotFound: '*',
    },
  },
};
