module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        // "next",
        "plugin:@typescript-eslint/recommended",
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        "plugin:react/recommended",
        "airbnb",
        "airbnb-typescript",
        "airbnb/hooks",
        'plugin:storybook/recommended',
        'plugin:react/jsx-runtime',
        "plugin:prettier/recommended",
        "plugin:react-hooks/recommended",
    ],
    overrides: [],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['tsconfig.json']
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parserOptions: {}
        }
    ],
    plugins: ["@typescript-eslint", "react", 'prettier', 'react-hooks'],
    rules: {
        "react/display-name": 0,
        '@typescript-eslint/no-shadow': 0,
        '@typescript-eslint/consistent-type-imports': [
            'error',
            {prefer: 'type-imports', disallowTypeAnnotations: false}
        ],
        'react/function-component-definition': [
            2,
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function'
            }
        ],
        'react/prop-types': 0,
        'react/react-in-jsx-scope': 0,
        'react/jsx-props-no-spreading': 0,
        'react/require-default-props': 0,
        'react/button-has-type': 0,
        'react/no-unstable-nested-components': [
            2,
            {
                allowAsProps: true
            }
        ],
        'react/no-array-index-key': 0,
        'no-param-reassign': 0,
        'sort-keys': ['error', 'asc', {natural: true}],
        'react/jsx-filename-extension': [2, {extensions: ['.js', '.jsx', '.ts', '.tsx']}],
        'react/jsx-sort-props': [
            2,
            {
                callbacksLast: true,
                shorthandFirst: true,
                ignoreCase: true,
                reservedFirst: true
            }
        ],
        'import/order': 0,
        'import/extensions': 0,
        'import/no-extraneous-dependencies': 0,
        'import/prefer-default-export': 0,
        'import/export': 0,
        'import/order': [
            2,
            {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                'newlines-between': 'always',
                pathGroups: [
                    {
                        pattern: '~/**',
                        group: 'internal'
                    },
                    {
                        pattern: "{.,..}/**/*\.scss", // same directory only
                        group: "object",
                        position: "after"
                    }
                ],
                alphabetize: {
                    order: 'asc'
                }
            }
        ],
    },
};
