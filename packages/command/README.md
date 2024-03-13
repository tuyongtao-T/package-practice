# commander
## 选项
Commander 使用.option()方法来定义选项，同时可以附加选项的简介。每个选项可以定义一个短选项名称（-后面接单个字符）和一个长选项名称（--后面接一个或多个单词），使用逗号、空格或|分隔。

解析后的选项可以通过Command对象上的.opts()方法获取，同时会被传递给命令处理函数。
对于多个单词的长选项，选项名会转为驼峰命名法（camel-case），例如--template-engine选项可通过program.opts().templateEngine获取。

选项及其选项参数可以用空格分隔，也可以组合成同一个参数。选项参数可以直接跟在短选项之后，也可以在长选项后面加上 =。
```
serve -p 80
serve -p80
serve --port 80
serve --port=80
```
--可以标记选项的结束，后续的参数均不会被命令解释，可以正常使用。

默认情况下，选项在命令行中的顺序不固定，一个选项可以在其他参数之前或之后指定。

当.opts()不够用时，还有其他相关方法：

- .optsWithGlobals()返回合并的本地和全局选项值
- .getOptionValue()和.setOptionValue()操作单个选项的值
- .getOptionValueSource()和.setOptionValueWithSource()包括选项值的来源

常用选项类型，boolean 型选项和带参数选项
有两种最常用的选项，一类是 boolean 型选项，选项无需配置参数，另一类选项则可以设置参数（使用尖括号声明在该选项后，如--expect <value>）。如果在命令行中不指定具体的选项及参数，则会被定义为undefined。

示例代码：options-common.js

```javascript
program
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small', 'small pizza size')
  .option('-p, --pizza-type <type>', 'flavour of pizza');

program.parse(process.argv);

const options = program.opts();
if (options.debug) console.log(options);
console.log('pizza details:');
if (options.small) console.log('- small pizza size');
if (options.pizzaType) console.log(`- ${options.pizzaType}`);

```

```bash
$ pizza-options -p
error: option '-p, --pizza-type <type>' argument missing
$ pizza-options -d -s -p vegetarian
{ debug: true, small: true, pizzaType: 'vegetarian' }
pizza details:
- small pizza size
- vegetarian
$ pizza-options --pizza-type=cheese
pizza details:
- cheese
```
多个布尔短选项可以在破折号之后组合在一起，并且可以跟一个取值的单一选项。 例如 -d -s -p cheese 可以写成 -ds -p cheese 甚至 -dsp cheese。

具有预期选项参数的选项是贪婪的，并且无论值如何，都会消耗参数。 所以 --id -xyz 读取 -xyz 作为选项参数。

通过program.parse(arguments)方法处理参数，没有被使用的选项会存放在program.args数组中。该方法的参数是可选的，默认值为process.argv。