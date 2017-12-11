module.exports = {
    'env': {
        'browser': true,
        // 'node': true,
        'es6': true,
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'sourceType': 'module',
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
        'no-alert': 'error',
        'no-else-return': 'error',
    }
};
