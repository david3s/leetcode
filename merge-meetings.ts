function mergeMeetings(meetings: [number, number][]) {

  const result: [number, number][] = [];

  for(let i = 0; i < meetings.length; i++) {
    let currentMeeting = meetings[i];
    if (currentMeeting[0] === currentMeeting[1]) continue;
    for(let j = i + 1; j < meetings.length; j++) {
      if (meetings[j][0] === meetings[j][1]) continue;
      if(overlaps(currentMeeting, meetings[j])) {
        currentMeeting = merge(currentMeeting, meetings[j]);
        meetings[j] = [0,0];
      }
    }
    meetings[i] = [0,0];
    result.push(currentMeeting);
  }

  return result;

  function merge([start1, end1]: [number, number], [start2, end2]: [number, number]): [number, number] {
    return [Math.min(start1, start2), Math.max(end1, end2)];
  }

  function overlaps([start1, end1]: [number, number], [start2, end2]: [number, number]): boolean {
    return (end1 >= start2 && end1 <= end2) ||
      (start1 >= start2 && start1 <= end2) ||
      (start1 <= start2 && end1 >= end2);
  }
}

console.log(mergeMeetings([[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]));
console.log(mergeMeetings([[1, 2], [2, 3]]));
console.log(mergeMeetings([[1, 5], [2, 3]]));
console.log(mergeMeetings([[1, 10], [2, 6], [3, 5], [7, 9]]));
