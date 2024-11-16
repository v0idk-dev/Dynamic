const delay = ms => new Promise(res => setTimeout(res, ms));

async function consoleAlert(){
    const style = 'background-color: black; color: pink; font-style: bold; border: 5px solid red; font-size: 50px; margin-top: -12px;'
    const lowstyle = 'background-color: black; color: yellow; font-style: italic; font-size: 30px; margin-top: -12px;'
    await delay(500);
    console.log("%c WARNING! \n", style)
    console.log("%cBy putting something into this console, you risk your data from being stolen.", lowstyle)
}
consoleAlert()