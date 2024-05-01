const delay = ms => new Promise(res => setTimeout(res, ms));


async function greet(){
    const style = 'background-color: black; color: pink; font-style: bold; border: 5px solid red; font-size: 50px; margin-top: -12px;'
    const lowstyle = 'background-color: black; color: yellow; font-style: italic; font-size: 30px; margin-top: -12px;'
    let visited = localStorage.getItem('visited')
    await delay(500);
    console.log("%c WARNING! \n", style)
    console.log("%cBy putting something into this console, you risk your data from being stolen.", lowstyle)
    await delay(500);
    if (!visited) { 
        console.log('showing popup')
        alert('Thanks for using Dynamic 0.7.2-patch.2!\nThis is a beta version of Dynamic. There may be bugs\n\n(c) Chromatica Labs 2024')
    }
    localStorage.setItem("visited", "true")
}
greet()