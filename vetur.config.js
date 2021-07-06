module.exports = {
    settings: {
        'vetur.useWorkspaceDependencies': true,
    },
    projects: [
        {
            root: '.',
            package: './package.json',
            tsconfig: './tsconfig.json',
            snippetFolder: './.vscode/vetur/snippets',
            globalComponents: ['./src/components/**/*.vue'],
        },
    ],
};
