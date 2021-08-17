const jwt = require('jsonwebtoken');

const OAUTH_PROVIDERS = {
  GOOGLE: 'google',
};

/**
 * Convert the oauth callback data into a specific form of object
 * @param {any} oauthData data from the oauth provider
 * @param {OauthProvider} provider
 * @returns {OauthRegisterData}
 */
const normalizeOauthData = (oauthData, provider) => {
  const normalizedData = {};
  console.log(oauthData, provider);
  switch (provider) {
    case OAUTH_PROVIDERS.GOOGLE:
      normalizedData.username =
        `${oauthData?.profile?.name?.familyName}_${oauthData?.profile?.name?.givenName}`.toLowerCase();
      normalizedData.email = oauthData.profile.emails[0]?.value;
      normalizedData.accessToken = oauthData.accessToken;
      normalizedData.refreshToken = oauthData.refreshToken;
      normalizedData.provider = OAUTH_PROVIDERS.GOOGLE;
      break;
    default:
      throw new Error('invalidProvider');
  }

  return normalizedData;
};

const signJwtToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
};

module.exports = {
  OAUTH_PROVIDERS,
  normalizeOauthData,
};
