const stdin = process.openStdin();

stdin.addListener("data", (data) => {
    console.log(data.toString().trim())      
});

export default stdin