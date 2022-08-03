var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  colors: () => colors,
  group: () => group,
  test: () => test,
  verify: () => verify
});
let countSuccess = 0;
let countFails = 0;
const scape = "";
const colors = {
  reset: `${scape}[0m`,
  blue: `${scape}[0;36m`,
  redBg: `${scape}[41;1;37m`,
  greenBg: `${scape}[42;1;37m`,
  green: `${scape}[0;32m`,
  red: `${scape}[0;31m`
};
const handleOutputTest = () => {
  return console.log(`${colors.blue} 
----------------------------------------------
  Total:   ${countSuccess + countFails}
  Success: ${countSuccess}
  Fails:   ${countFails}
  ${colors.reset}End of tests.${colors.blue}
----------------------------------------------
  `);
};
const verify = (baseValue) => {
  const assertions = {
    toBeEqual(compare) {
      if (baseValue !== compare) {
        throw {};
      }
    }
  };
  return assertions;
};
const test = (nameTest, compareFunction) => {
  try {
    compareFunction();
    countSuccess++;
    console.log(`${colors.greenBg} PASS: ${colors.green} ${nameTest}`);
  } catch (err) {
    countFails++;
    console.log(`${colors.redBg} FAIL: ${colors.red} ${nameTest}`);
  }
  ;
};
const group = (nameDescribe, functions) => {
  countFails = 0;
  countSuccess = 0;
  console.log(`${colors.blue}${nameDescribe}
`);
  functions();
  handleOutputTest();
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  colors,
  group,
  test,
  verify
});
//# sourceMappingURL=simple_tester.js.map
