/*
 * @Author: tuyongtao1
 * @Date: 2024-03-13 16:16:30
 * @LastEditors: tuyongtao1
 * @LastEditTime: 2024-03-13 16:28:24
 * @Description: 
 */

const { program } = require('commander');

program.version('v0.0.1')

program
    .option('-d, --debug', 'output extra debugging')
    .option('-s, --small', 'small pizza size')
    .option('-p, --pizza-type <type>', 'flavour of pizza')
    .option('-f, --default-value <value>', '默认值', '这是默认值')
    .requiredOption('-c, --cheese <cheese>', '必填选项')
    .option('-n, --number <numbers...>', 'specify numbers');

program.parse(process.argv);

const options = program.opts();
console.log(options)