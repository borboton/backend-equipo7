module.exports = {
  '**/*.+(js|jsx|ts|tsx)': [
    'npm run lint:fix:staged --',
    'npm run format:fix:staged --',
  ],
};
