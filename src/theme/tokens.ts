export const colors = {
  paper: '#F3EEDF',
  paper2: '#EAE2CB',
  ink: '#161311',
  red: '#E23227',
  yellow: '#F6C315',
  blue: '#1E4FA3',
  pink: '#E8437B',
  white: '#FFFFFF',
} as const;

export const fonts = {
  display: 'Anton_400Regular',
  body: undefined, // system default (Arial/Helvetica)
  mono: 'JetBrainsMono_400Regular',
} as const;

export const fontSizes = {
  xs: 11,
  sm: 13,
  md: 16,
  lg: 20,
  xl: 28,
  xxl: 40,
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 40,
} as const;

export const borders = {
  width: 2,
  radius: 0, // estilo 90s: esquinas rectas
  color: '#161311',
} as const;

export const shadows = {
  hard: {
    shadowColor: '#161311',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
  },
} as const;
