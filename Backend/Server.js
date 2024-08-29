const express = require('express');
const app = express();
PORT = 3000;
app.get('/',(res,req)=>{
     res.send('hello don')
})

app.listen(PORT,()=>{console.log(`connected succesfully,${PORT}`)});


module.exports = app;