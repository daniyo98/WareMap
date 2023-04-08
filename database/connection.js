// DB Conexion
const mongoose = require('mongoose');
const DB_URI = 'mongodb://localhost:27017/waremap'

module.exports = () => {
      ()=>{
      mongoose.connect(
        DB_URI,
        {
          keepAlive: true,
          useNewUrlParser: true,
          useUnifiedTopology: true
        },
        function(err){
          if(err){console.log('Error al conectar a la BD: '+err)}
          else{console.log('Conexion exitosa')}
        }
      )
    }
};
