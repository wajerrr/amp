import isStage from '../utils/environment-detection';

const config = {
  prod: {
    domain: 'www.economist.com',
    ampDomain: 'amp.economist.com',
  },
  stage: {
    domain: 'stage.economist.com',
    ampDomain: 'amp.s.aws.economist.com',
  },
};

export default (isStage ? config.stage : config.prod);
