#!/usr/bin/env node

'use strict';

const program = require('commander');
const handler = require('./lib/handler');

program
  .version('0.0.1')
  .command('say')
  .description('say something')
  .action(handler.say);

program
  .version('0.0.1')
  .command('init')
  .description('create a common goal database for your project')
  .action(handler.init);

program
  .version('0.0.1')
  .command('list')
  .alias('ls')
  .description('list all goals')
  .action(handler.list);

program
  .version('0.0.1')
  .command('add <goal_name>')
  .option('-t, --task [task]', 'Add task to goal')
  .description('add new goal')
  .action(handler.add);

program
  .version('0.0.1')
  .command('remove <goal_name>')
  .option('-t, --task [task_number]', 'remove task number from goal')
  .alias('rm')
  .description('remove goal')
  .action(handler.remove);

program.parse(process.argv);

/*
//TODO: fix this
if (typeof cmdValue === 'undefined') {
  console.log(program.help());
  process.exit(1);
}
*/

