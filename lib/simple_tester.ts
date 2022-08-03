let countSuccess = 0;
let countFails = 0;

const scape = '\u001b';

export const colors = {
  reset: `${scape}[0m`,
  blue: `${scape}[0;36m`,
  redBg: `${scape}[41;1;37m`,
  greenBg: `${scape}[42;1;37m`,
  green: `${scape}[0;32m`,
  red: `${scape}[0;31m`
}

const handleOutputTest = () => {
  return console.log(`${colors.blue} 
----------------------------------------------
  Total:   ${countSuccess + countFails}
  Success: ${countSuccess}
  Fails:   ${countFails}
  ${colors.reset}End of tests.${colors.blue}
----------------------------------------------
  `);
}

export const verify = (baseValue: any) => {
  
  const assertions = {
    toBeEqual(compare: any){
      if(baseValue !== compare) {
        throw{}; 
      } 
    }
    
  };

  return assertions;
}

export const test = (nameTest: string, compareFunction: CallableFunction) => {
  try {
    compareFunction();
    countSuccess++;
    console.log(`${colors.greenBg} PASS: ${colors.green} ${nameTest}`);
  } catch (err) {
    countFails++;
    console.log(`${colors.redBg} FAIL: ${colors.red} ${nameTest}`);
  };
}

export const group = (nameDescribe: string, functions: CallableFunction) => {
  countFails = 0;
  countSuccess = 0;
  console.log(`${colors.blue}${nameDescribe}\n`);
  functions();
  handleOutputTest();
}

