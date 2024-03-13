#!/usr/bin / env node

const { program } = require('commander');


// 1. 基本用法
program.version('0.0.1'); // 设置CLI工具的版本

program
    .option('-d, --debug', '启用调试模式')
    .option('-s, --silent', '禁止输出日志');

program.parse(process.argv); // 解析命令行参数

const options = program.opts(); // 获取解析后的选项


if (options.debug) console.log('调试模式已启用');
if (options.silent) console.log('静默模式，不输出日志');

// 2. 添加命令
program
    .command('start <file>')
    .description('启动服务')
    .action((file) => {
        console.log(`服务已启动，使用文件：${file}`);
    });

program
    .command('stop')
    .description('停止服务')
    .action(() => {
        console.log('服务已停止');
    });
