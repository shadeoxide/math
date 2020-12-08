let signs = ["+", "-", "*", "/"]

module.exports.execute = (data) => {
    let array = data.split("")
    for (let x of array) {
    if (isNaN(x) && x !== " " && !signs.includes(x)) return console.log("Invalid code")
    }
    console.log(eval(data))
}