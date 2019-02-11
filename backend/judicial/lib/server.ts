import app from "./app";
const PORT = 3000;

console.log("teste");
app.listen(PORT, () => {
    console.log('Express server listening on port. ' + PORT);
})