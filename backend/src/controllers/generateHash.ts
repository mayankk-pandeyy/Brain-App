export const generateHash = (length : number) => {
    let options = "cgiyqbwevu9qeh8ivn13ibv9bc3q29f";
    length = options.length;

    let ans = "";
    for(let i=0; i<length; i++){
        ans += options[Math.floor(Math.random() * length)]
    }

    return ans;
}