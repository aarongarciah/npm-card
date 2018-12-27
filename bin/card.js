#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk');
const boxen = require('boxen');

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'double-single',
};

// Text + chalk definitions
const data = {
  name: chalk.bgBlueBright.white.bold(' Aarón García Hervás '),
  handle: chalk.blueBright('@aarongarciah'),
  work: chalk.white(
    ' · Husband. Dad². Senior Frontend Engineer. In that order.\n · Alicante Frontend Co-organizer.'
  ),
  twitter: chalk.blueBright('https://twitter.com/aarongarciah'),
  github: chalk.blueBright('https://github.com/aarongarciah'),
  codepen: chalk.blueBright('https://codepen.com/aarongarciah'),
  linkedin: chalk.blueBright('https://linkedin.com/in/aarongarciah'),
  web: chalk.blueBright('https://aarongarciah.com'),
  community: chalk.blueBright('https://www.alicantefrontend.es'),
  npx: chalk.white('npx aarongarciah'),
  labelTwitter: chalk.white('   Twitter:'),
  labelGitHub: chalk.white('    GitHub:'),
  labelCodepen: chalk.white('   CodePen:'),
  labelLinkedIn: chalk.white('  LinkedIn:'),
  labelWeb: chalk.white('       Web:'),
  labelCommunity: chalk.white(' Community:'),
  labelCard: chalk.white('      Card:'),
};

// Actual strings we're going to output
const newline = '\n';
const heading = `${data.name} (${data.handle})`;
const working = `${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const codepening = `${data.labelCodepen}  ${data.codepen}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const communiting = `${data.labelCommunity}  ${data.community}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading +
  newline +
  newline +
  working +
  newline +
  newline +
  twittering +
  newline +
  githubing +
  newline +
  codepening +
  newline +
  linkedining +
  newline +
  webing +
  newline +
  newline +
  communiting +
  newline +
  newline +
  carding;

console.log(chalk.blueBright(boxen(output, options)));
