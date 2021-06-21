//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Type } = require('./src/db.js');


// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001');// eslint-disable-line no-console
    const gluttenFree = Type.findOrCreate({
      where:{
        name:'Gluten Free'
      }
    });
    const ketogenic = Type.findOrCreate({
      where:{
        name:'Ketogenic'
      }
    });
    const vegetarian = Type.findOrCreate({
      where:{
        name:'Vegetarian'
      }
    });
    const lactoVegetarian = Type.findOrCreate({
      where:{
        name:'Lacto-Vegetarian'
      }
    });
    const ovoVegetarian = Type.findOrCreate({
      where:{
        name:'Ovo-Vegetarian'
      }
    });
    const vegan = Type.findOrCreate({
      where:{
        name:'Vegan'
      }
    });
    const pescetarian = Type.findOrCreate({
      where:{
        name:'Pescetarian'
      }
    });
    const paleo = Type.findOrCreate({
      where:{
        name:'Paleo'
      }
    });
    const primal = Type.findOrCreate({
      where:{
        name:'Primal'
      }
    });


  });
});
