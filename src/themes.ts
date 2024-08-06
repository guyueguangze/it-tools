import type { GlobalThemeOverrides } from 'naive-ui';

export const lightThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#093461',
    primaryColorHover: '#fff',
    primaryColorPressed: '#093461',
    primaryColorSuppl: '#093461',
  },
  Select: {
    colorHover: '#093461',
    primaryColorHover: '#fff',
    borderColor: '#093461',

  },
  // Menu: {
  //   itemHeight: '32px',
  // },

  // Layout: { color: '#f1f5f9' },

  // AutoComplete: {
  //   peers: {
  //     InternalSelectMenu: { height: '500px' },
  //   },
  // },
  // Input: {
  //   borderColor: '#093461',
  //   colorPrimary: '#093461',

  // },

  // Button: {
  //   colorPrimary: '#093461',
  // },
  // Card: {
  //   colorPrimary: '#093461',
  // },
};

export const darkThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#093461',
    primaryColorHover: 'red',
    primaryColorPressed: 'red',
    primaryColorSuppl: 'red',
  },

  Notification: {
    color: '#333333',
  },

  AutoComplete: {
    peers: {
      InternalSelectMenu: { height: '500px', color: '#1e1e1e' },
    },
  },

  Menu: {
    itemHeight: '32px',
  },

  Layout: {
    color: '#1c1c1c',
    siderColor: '#232323',
    siderBorderColor: 'transparent',
  },

  Card: {
    color: '#232323',
    borderColor: '#282828',
  },

  Table: {
    tdColor: '#232323',
    thColor: '#353535',
  },
  Input: {
    color: '#093461',
  },
  Button: {
    color: '#093461',
  },
};
