import config from '../config';

const baseUrlOf = {
    "dev": config.baseUrlDev,
    "staging": config.baseUrlStaging,
    "prod": config.baseUrlProd
};

export function getBaseUrl () {
    return baseUrlOf[`${process.env.TESTCAFE_ENV}`];
}