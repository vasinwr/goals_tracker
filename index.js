#!/usr/bin/env node

'use strict';

const program = require('commander');

let sayFunction = () => {
  console.log("hi");
}

program
  .version('0.0.1')
  .command('say')
  .description('say something')
  .action(sayFunction);

program.parse(process.argv);
