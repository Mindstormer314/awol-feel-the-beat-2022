/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          About: {
            screens: {
              Aboutscreen: 'About',
            },
          },
          Events: {
            screens: {
              EventScreen: 'Events',
            },
          },
          Home: {
            screens: {
              HomeScreen: 'Home',
            },
          },
          Videos: {
            screens: {
              VideoScreen: 'Videos',
            },
          },
        },
        },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
