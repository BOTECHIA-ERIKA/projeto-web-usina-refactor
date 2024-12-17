const { series, parallel, src, dest } = require('gump');
const { exec } = require('child_process');
const fs = require('fs');

// Tarefa para limpar a pasta de build
function clean(cb) {
    fs.rmSync('build', { recursive: true, force: true });
    cb();
}

// Tarefa para compilar o TypeScript
function compile(cb) {
    exec('tsc', (err, stdout, stderr) => {
        if (err) {
            console.error(stderr);
            cb(err);
        } else {
            console.log(stdout);
            cb();
        }
    });
}

// Tarefa para copiar arquivos estáticos
function copyStatic() {
    return src('src/static/**/*')
        .pipe(dest('build/static'));
}

// Tarefa para copiar o arquivo .env
function copyEnv() {
    return src('.env')
        .pipe(dest('build'));
}

// Tarefa para iniciar o servidor
function startServer(cb) {
    exec('node build/index.js', (err, stdout, stderr) => {
        if (err) {
            console.error(stderr);
            cb(err);
        } else {
            console.log(stdout);
            cb();
        }
    });
}

// Definindo a tarefa de build
exports.build = series(clean, compile, parallel(copyStatic, copyEnv));

// Definindo a tarefa de deploy
exports.deploy = series(exports.build, startServer);