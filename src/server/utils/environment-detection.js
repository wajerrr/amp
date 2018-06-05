export const isProd = process.env.ENV === 'prod';
export const isStage = process.env.ENV === 'stage';
export const isDev = process.env.ENV === 'development';
export const environment = isProd ? 'prod' : isStage ? 'stage' : 'dev';
