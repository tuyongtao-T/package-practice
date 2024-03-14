/*
 * @Author: tuyongtao1
 * @Date: 2024-03-13 17:17:26
 * @LastEditors: tuyongtao1
 * @LastEditTime: 2024-03-14 13:09:41
 * @Description: 
 */
import { $ } from 'execa';

const { stdout: name } = await $`cat ../package.json`

console.log( typeof name);

// const branch = await $`git branch --show-current`;
// await $`dep deploy --branch=${branch}`;

// await Promise.all([
//     $`sleep 1`,
//     $`sleep 2`,
//     $`sleep 3`,
// ]);

// const dirName = 'foo bar';
// await $`mkdir /tmp/${dirName}`;