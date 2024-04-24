function ConsoleLog() {

    const handleClick = () => {
        console.log("A");
        setTimeout(function () {
            console.log("B");
        }, 1000);
        console.log("C");
    };

    return (
        <div>
            <h1>Exercise 1</h1>
            <div>
                <button onClick={handleClick}>Run Code</button>
            </div>
            <p>This code outputs A, C, B. It first prints A, then runs the setTimeout statement,<br/>
                which does not pause the execution of the code but rather starts a timer-like process.<br/>
                 It then proceeds to execute the next line, which is to print C. After the delay, <br/>
                 it executes the function within setTimeout, printing B.</p>
        </div>
    );
}

export default ConsoleLog;
