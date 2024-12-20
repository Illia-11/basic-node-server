// іменний імпорт (ESModules)
import { test, testFunc as newTestFuncName } from "./myMath.js";

import * as MyMath from "./myMath.js";

// імпорт за замовчанням (ESModules)
import MyMath from "./myMath.js";

console.log(MyMath);

newTestFuncName();