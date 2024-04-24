import React, { useState, useEffect } from "react";

export default function RenderingEffects() {
  const [count, setCount] = useState(10);

  useEffect(
    function () {
      console.log('Before Render',{count});
      setCount(count * 0.5);
      console.log('After Render',{count});
    },
    []
  );
  return (
    <div>
      <h1>Exercise 2</h1>
      <div className="hello-"> Your counter is: {count}</div>
      <p>The effect of useEffect is to execute a function after the variables in the brackets of the subsequent <br/>
array are changed and when it is rendered for the first time. If it is an empty array, it will only be <br/>
run once after the first rendering.<br/><br/>

The usestate function creates a variable that causes the page to re-render once changed. It returns a <br/>
value and a function that modifies the value.<br/><br/>

So when this code starts, the count is initialized to 10, and the page's count is 10. After the first <br/>
rendering is completed, the function within useEffect will run, making the count become 5. However, since <br/>
these two renderings are within one rendering cycle, under normal circumstances 5 is displayed between pages.<br/><br/>

But during the experiment, I found that if the page is refreshed very quickly, the page will not have time <br/>
to run the function and will flash a screen with a count of 10.</p>
    </div>
  );
}

/**/

