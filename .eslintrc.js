module.exports = {
    'env': {
        'browser': true,
        'node': true,
        'es6': true,
    },
    'parser': 'babel-eslint',
    'extends': 'eslint:recommended',
    'parserOptions': {
        'sourceType': 'module',
        ecmaVersion: 8,
    },
    'rules': {
        'eqeqeq': 'off',
        'curly': 'error',
        'quotes': ['error', 'single'],
        'indent': ['error', 4],
        'linebreak-style': ['error', 'unix'],
        'semi': ['error', 'always'],
        'no-empty-interface': true,
        'no-shadowed-variable': true,
        'no-console': 'warn',
        'no-alert': 'error',
        'no-else-return': 'error',
    }
};
