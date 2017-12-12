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
    },
    'rules': {
        'eqeqeq': ['error', 'always'],
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
        'comment-format': [true, 'check-space'],
        'for-direction': 'error',
        'no-multiple-empty-lines': 'error',
        'no-duplicate-imports': 'error',
    },
};
