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
    const glutenFree = Type.findOrCreate({
      where:{
        name:'gluten free'
      }
    });
    const dinner = Type.findOrCreate({
      where:{
        name:'dinner'
      }
    });
    const vegetarian = Type.findOrCreate({
      where:{
        name:'vegetarian'
      }
    });
    const lactoVegetarian = Type.findOrCreate({
      where:{
        name:'lacto ovo vegetarian'
      }
    });
    const ovoVegetarian = Type.findOrCreate({
      where:{
        name:'dairy free'
      }
    });
    const vegan = Type.findOrCreate({
      where:{
        name:'vegan'
      }
    });
    const pescetarian = Type.findOrCreate({
      where:{
        name:'pescatarian'
      }
    });
    const paleo = Type.findOrCreate({
      where:{
        name:'paleolithic'
      }
    });
    const primal = Type.findOrCreate({
      where:{
        name:'primal'
      }
    });


  });
});
