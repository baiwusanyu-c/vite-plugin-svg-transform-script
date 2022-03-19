module.exports = {
    globals: {
        // work around: https://github.com/kulshekhar/ts-jest/issues/748#issuecomment-423528659
        'ts-jest': {
            diagnostics: {
                ignoreCodes: [151001],
            },
        },
    },
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(t|j)sx?$': [
            'babel-jest',
            {
                presets: [
                    [
                        '@babel/preset-env',
                        {
                            loose: true,
                            targets: {
                                node: true,
                            },
                        },
                    ],
                    '@babel/preset-typescript',
                ],
                plugins: [
                    ['@babel/plugin-proposal-class-properties', {loose: true}],
                ],
            },
        ],
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
    // u can change this option to a more specific folder for test single component or util when dev
    // for example, ['<rootDir>/packages/input']

     roots: ['<rootDir>'],

    // roots: ['<rootDir>/lib/components/svg-icon'],
    // roots: ['<rootDir>/lib/components/tag'],
    // roots: ['<rootDir>/lib/components/message'],
    // roots: ['<rootDir>/lib/components/input-number'],
    // roots: ['<rootDir>/lib/components/switch'],
    // roots: ['<rootDir>/lib/components/breadcrumb'],
    // roots: ['<rootDir>/lib/components/contextmenu'],
    // roots: ['<rootDir>/lib/components/container'],
    // roots: ['<rootDir>/lib/components/ellipsis'],
    // roots: ['<rootDir>/lib/components/button'],
    // roots: ['<rootDir>/lib/components/message-box/'],
    // roots: ['<rootDir>/lib/components/dialog'],
    // roots: ['<rootDir>/lib/components/loading'],
    // roots: ['<rootDir>/lib/components/progress'],
}
