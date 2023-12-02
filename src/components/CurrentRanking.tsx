import React from 'react';
import { Checkbox } from './ui/checkbox';

const CurrentRanking = () => {
  let rankingsState: Record<string, string> = {};

  const handleCheckboxCheck = (e: any) => {
    // Check if the checkbox is checked
    const checked = e.target.checked;

    // Get the checkbox value
    const checkedValue = e.target.value;

    // Either add or delete from rankings
    if (checked) rankingsState[checkedValue] = checkedValue;
    else delete rankingsState[checkedValue];
    console.log(rankingsState);
  };
  const handleClick = async() => {
    const rankings = await fetch('/api/getRanking', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(Object.values(rankingsState))
    }).then((response)=> response.json());
    let allForms = document.querySelectorAll('input');
    allForms.forEach(eachInput => eachInput.checked = false);
    rankingsState = {};
    console.log(rankings);
  }
  const statArray = [['GP','Games Played'],['MIN','Total Minutes Played'],['FGM','Field Goals Made'],['FGA_PCT','Field Goal Percentage'],['FG3M','3-Point Field Goals Made'],['FG3A','3-Point Field Goals Attempted'],['FG3_PCT','3-Point Field Goal Percentage'],['FTM','Free Throws Made'],['FTA','Free Throws Attempted'],['FT_PCT','Free Throw Percentage'],['OREB','Offensive Rebounds'],['DREB','Defensive Rebounds'],['REB','Total Rebounds'],['AST','Assists'],['STL','Steals'],['BLK','Blocks'],['TOV','Turnovers'],['PF','Personal Fouls'],['PTS','Points'],['EFF','Player Effeciency'],['AST_TOV','Assist-to-Turnover Ratio'],['STL_TOV','Steal-to-Turnover Ratio']];
  let checkboxes = [];
  for(let i = 0; i < statArray.length; i++){
    const id = statArray[i][0];
    const label = statArray[i][1];
    checkboxes.push(
      <div key={id}>
        <input type="checkbox" id={id} value={id} onChange={handleCheckboxCheck}></input>
        <label htmlFor={id}>{label}</label> 
      </div>)
  }
  return (
    <div>
      <h2>Current Ranking</h2>
      <div>

     {checkboxes}
    <button onClick={handleClick}>Create Ranking</button>
      </div>
    </div>
  );
};

export default CurrentRanking;