module.exports = function(grunt) {
    // Configuração do Grunt
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Tarefa para limpar a pasta de build
        clean: {
            build: ['build']
        },

        // Tarefa para compilar o TypeScript
        ts: {
            default: {
                tsconfig: './tsconfig.json'
            }
        },

        // Tarefa para copiar arquivos estáticos
        copy: {
            main: {
                files: [
                    { expand: true, cwd: 'src/static', src: ['**'], dest: 'build/static' },
                    { expand: true, src: ['.env'], dest: 'build' }
                ]
            }
        },

        // Tarefa para fazer o deploy no GitHub Pages
        'gh-pages': {
            options: {
                base: 'build'
            },
            src: ['**/*']
        }
    });

    // Carregar plugins do Grunt
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-gh-pages');

    // Registrar tarefas
    grunt.registerTask('build', ['clean', 'ts', 'copy']);
    grunt.registerTask('deploy', ['build', 'gh-pages']);
};