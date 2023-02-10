import getJoke from './joke.js';
import core from '@actions/core';

async function run() {
  const joke = await getJoke();

  console.log(joke);

  core.setOutput("joke-output", joke);
}

run();