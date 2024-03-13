/*
 * @Author: tuyongtao1
 * @Date: 2024-03-13 16:33:05
 * @LastEditors: tuyongtao1
 * @LastEditTime: 2024-03-13 16:33:21
 * @Description: 
 */

const { program } = require('commander');

program.version('v0.0.2')

program
  .command('build')
  .description('build web site for deployment')
  .action(() => {
    console.log('build');
  });

program
  .command('deploy')
  .description('deploy web site to production')
  .action(() => {
    console.log('deploy');
  });

program
  .command('serve', { isDefault: true })
  .description('launch web server')
  .option('-p,--port <port_number>', 'web port')
  .action((options) => {
    console.log(`server on port ${options.port}`);
  });

program.parse(process.argv);