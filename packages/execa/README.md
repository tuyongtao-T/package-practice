# execa

# Promise interface
``` javascript
import {execa} from 'execa';

const {stdout} = await execa('echo', ['unicorns']);
console.log(stdout);
//=> 'unicorns'
```


