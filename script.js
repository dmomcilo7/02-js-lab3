"use strict";

const submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];

const addSubmission = (array, newName, newScore, newDate) => {
  const newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };

  array.push(newSubmission);
};

//first try of doing it     let didPass = false;
//   newScore >= 60;
//   return array.push({
//     name: newName,
//     score: newScore,
//     date: newDate,
//     passed: didPass,
//   });
// };

addSubmission(submissions, "Jim", 50, "2022-01-01");
console.log(submissions);

const deleteSubmissionByIndex = (array, index) => {
  return array.splice(index, 1);
};

// deleteSubmissionByIndex(submissions, 4);
// console.log(submissions);

const deleteSubmissionByName = (array, name) => {
  const index = array.findIndex((item) => {
    return item.name === name;
  });
  array.splice(index, 1);
};

// const deleteSubmissionByName = (array, name) => {
//   return array.splice(
//     array.findIndex((item) => item.name === name),
//     1
//   );
// };

// deleteSubmissionByName(submissions, "Joe");
// console.log(submissions);

const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60;
};

// editSubmission(submissions, 4, 100);
// console.log(submissions);

const findSubmissionByName = (array, name) => {
  return array.findIndex((item) => item.name === name);
};
console.log(findSubmissionByName(submissions, "Joe"));

// const findLowestScore = (array) => {
//   let lowestScore = array[0];
//   array.forEach((item) => {
//     if (item.score < lowestScore.score) {
//       lowestScore = item;
//     }
//   });
//   return lowestScore;
// };

const findLowestScore = (array) => {
  return array.reduce((acc, cv) => {
    return cv.score < acc.score ? cv : acc;
  });
};

console.log(findLowestScore(submissions));

const findAverageScore = (array) => {
  let sum = 0;
  for (const item of array) {
    sum += item.score;
  }
  return sum / array.length;
};

console.log(findAverageScore(submissions));

const filterPassing = (array) => {
  return array.filter((number) => {
    return number.passed;
  });
};

console.log(filterPassing(submissions));

const filter90AndAbove = (array) => {
  return array.filter((number) => {
    return number.score >= 90;
  });
};

console.log(filter90AndAbove(submissions));

// Jake's notes code below
// const addSubmission = (array, newName, newScore, newDate) => {
//   let didPass = false;
//   newScore >= 60 ? (didPass = true) : (didPass = false);
//   array.push({
//     name: newName,
//     score: newScore,
//     date: newDate,
//     passed: didPass,
//   });
// };
// addSubmission(submissions, "Jacko", 59, "2022-01-01");
// console.log(submissions);
