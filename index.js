
  const records = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    //...
  ];
  
  function superbowlWin(records) {
    const winningRecord = records.find(item => item.result === "W");
    return winningRecord ? winningRecord.year : undifined;
  }
  
 
  