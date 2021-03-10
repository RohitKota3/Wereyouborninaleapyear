var readlineSync = require('readline-sync');
const chalk = require('chalk')
var moment = require('moment')
var userName = readlineSync.question(chalk.bold.rgb(253,15,2).bgWhite('May I have your name?'));
console.log("Welcome "+userName)
var userDOB = readlineSync.question(chalk.bold.rgb(253,15,2).bgWhite('May I have your Date of Birth in the format of mm/dd/yyyy?'));

var validate = moment(userDOB, 'MM/DD/YYYY',true).isValid()

if (validate == true){
console.log('the date format you have entered is right')
}else
  {console.log('you have entered a wrong date format, please recheck')
  process.exit()
  }

var arr1 = userDOB.split('/');
var arr2 = arr1[1].split('/');
var year = arr1[2].split('/');

function leapYear(year)
{
  score = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
  if (score == true){
    return chalk.bold.rgb(253, 15, 2).bgWhite("Your Year of Birth is Leap Year, go ahead and share this with your friends on Social Media :)")
  }
  else{
    return chalk.bold.rgb(253, 15, 2).bgWhite("Your Year of Birth is not a Leap Year :')")
  }
}

leapYear(year)
