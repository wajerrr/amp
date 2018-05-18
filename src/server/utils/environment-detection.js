export const isProd =
  process.env.NODE_ENV === undefined || process.env.NODE_ENV === 'prod';
export const isStage = process.env.NODE_ENV === 'stage';
export const isDev = process.env.NODE_ENV === 'development';
