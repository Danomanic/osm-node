const core = require('../core');

/**
 * Get's a list of available Terms
 */
module.exports.getTerms = async () => {
  const parts = [];
  const out = await core.performQuery('/api.php?action=getTerms', parts);
  return (out);
};
