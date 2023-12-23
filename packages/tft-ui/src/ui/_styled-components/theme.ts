const flex = {
  center: `
    display: flex;
    justify-contents: center;
    align-items: center;
  `,
  centerCol: `
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
  `,
} as const;

const colors = {
  gray_10: 'rgba(64,87,109,.07)',
  gray_20: 'rgba(57,76,96,.15)',
  gray_30: 'rgba(28,39,48,.5)',

  black: '#0d1216',
  black_10: 'rgba(13,18,22,.6)',
  black_20: 'rgba(13,18,22,.7)',
};

const theme = {
  flex,
  colors,
  full: {
    width: '100%',
    height: '100%',
  },
} as const;

export default theme;

export type Theme = typeof theme;
