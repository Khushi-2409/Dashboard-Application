module.exports = {
    plugins: ['jsx-a11y'],
    rules: {
      'jsx-a11y/label-has-associated-control': [
        'error',
        {
          controlComponents: ['Input'],
        },
      ],
      // other rules...
    },
  };
  