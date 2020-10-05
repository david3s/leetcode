function createTeam(scores: number[], teamSize: number, m: number) {
  let teamScores: number[] = [];

  while(teamScores.length < teamSize && scores.length > 0) {
    if (scores.length == 1) {
      teamScores.push(scores[0]);
      scores = [];
      break;
    }
    const trimmedM = m > scores.length ? scores.length : m;
    const headMaxIndex = maxInSegment(scores, 0, trimmedM);
    const tailMaxIndex = maxInSegment(scores, scores.length - trimmedM, scores.length);
    if (scores[tailMaxIndex] >= scores[headMaxIndex]) {
      teamScores.push(scores[tailMaxIndex]);
      scores.splice(tailMaxIndex, 1);
    } else {
      teamScores.push(scores[headMaxIndex]);
      scores.splice(headMaxIndex, 1);
    }
  }

  return teamScores.reduce((acc, teamScore) => acc + teamScore, 0);
}

function maxInSegment(scores: number[], start: number, end: number) {
  let max = 0;
  let maxIndex = -1;
  for (let i = end - 1; i >= start; i--) {
    if (scores[i] > max) {
      max = scores[i];
      maxIndex = i;
    }
  }
  return maxIndex;
}

console.log(createTeam([17,12,10,2,7,2,11,20,8], 3, 4));
console.log(createTeam([6,18,8,14,10,12,18,9], 8, 3));
console.log(createTeam([18,5,15,18,11,15,9,7], 5, 1));
