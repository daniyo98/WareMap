// DB Conexion
const {connect} = require('mongoose');
const DB_URI = 'mongodb://localhost:27017/waremap'
    connect(DB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( console.log('Conexion exitosa'))
.catch(
  function(err){
    console.log(err)
  }
)
