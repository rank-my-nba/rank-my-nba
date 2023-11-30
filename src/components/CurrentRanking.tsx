import React from 'react';
import { Checkbox } from './ui/checkbox';

const CurrentRanking = () => {
  const statArray = [['gp','Games Played'],['gp','Games Played'],['gp','Games Played'],['gp','Games Played']];
  let checkboxes = [];
  for(let i = 0; i < statArray.length; i++){
    const id = statArray[i][0];
    const label = statArray[i][1];
    checkboxes.push(<div><Checkbox id={id} />
    <div className="grid gap-1.5 leading-none">
      <label
        htmlFor={id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div></div>)
  }
  return (
    <div>
      <h2>Current Ranking</h2>
      <div>

     {checkboxes}

      </div>
    </div>
  );
};

export default CurrentRanking;
        
{/* <form>
<input type="checkbox" id="gp" name="gp" value="gp"></input>
<label htmlFor="gp">Games Played</label>
<input type="checkbox" id="min" name="min" value="min"></input>
<label htmlFor="min">Minutes Played</label>
<input type="checkbox" id="fgm" name="fgm" value="fgm"></input>
<label htmlFor="fgm">Field Goals Made</label>
<input type="checkbox" id="gp" name="gp" value="gp"></input>
<label htmlFor="gp">Games Played</label>
<input type="checkbox" id="gp" name="gp" value="gp"></input>
<label htmlFor="gp">Games Played</label>
<input type="checkbox" id="gp" name="gp" value="gp"></input>
<label htmlFor="gp">Games Played</label>
<input type="checkbox" id="gp" name="gp" value="gp"></input>
<label htmlFor="gp">Games Played</label>
<input type="checkbox" id="gp" name="gp" value="gp"></input>
<label htmlFor="gp">Games Played</label>
<input type="checkbox" id="gp" name="gp" value="gp"></input>
<label htmlFor="gp">Games Played</label>
<input type="checkbox" id="gp" name="gp" value="gp"></input>
<label htmlFor="gp">Games Played</label>
<input type="checkbox" id="gp" name="gp" value="gp"></input>
<label htmlFor="gp">Games Played</label>
<input type="checkbox" id="gp" name="gp" value="gp"></input>
<label htmlFor="gp">Games Played</label>
<input type="checkbox" id="gp" name="gp" value="gp"></input>
<label htmlFor="gp">Games Played</label>
<input type="checkbox" id="gp" name="gp" value="gp"></input>
<label htmlFor="gp">Games Played</label>
<input type="checkbox" id="gp" name="gp" value="gp"></input>
<label htmlFor="gp">Games Played</label>
<input type="checkbox" id="gp" name="gp" value="gp"></input>
<label htmlFor="gp">Games Played</label>
<input type="checkbox" id="gp" name="gp" value="gp"></input>
<label htmlFor="gp">Games Played</label>
<input type="checkbox" id="gp" name="gp" value="gp"></input>
<label htmlFor="gp">Games Played</label>
<input type="checkbox" id="gp" name="gp" value="gp"></input>
<label htmlFor="gp">Games Played</label>
<input type="checkbox" id="gp" name="gp" value="gp"></input>
<label htmlFor="gp">Games Played</label> */}

// </form>