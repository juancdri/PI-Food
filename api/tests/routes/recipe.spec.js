/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');

const agent = session(app);
const recipe = {
  title: 'Milanea a la napolitana',
  summary: 'resumen'
};

describe('Recipe routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Recipe.sync({ force: true })
    .then(() => Recipe.create(recipe)));
  describe('GET /recipes', () => {
    it('should get 200', () =>
      agent.get('/recipes').expect(200)
    );
    it('res content type must be a json', () =>{  
        return agent.get('/recipes')
        .expect(200)
          .expect('Content-Type', /json/)
      }
    );
    it('When name is equal to milanesa, it should get the recipe created  ', () =>{
      return agent.get('/recipes?name=milanesa')
      .expect(200)
        .expect('Content-Type', /json/)
        .expect(res.body[0].summary).to.be.equal('resumen')
    }
    //   agent
    //   .get('/recipes?name=milanesa')
    //   .expect(200)
    //   .expect('Content-Type', /json/)
    //   .expect(res.body[0].summary).to.be.equal('resumen')
    );
  });
});


	//
	// 	it('If the name query is passed, the pokemon should respond by that name', async () => {
	// 		try {
	// 			const res = await agent.get('/pokemons?name=bulbasaur');
	// 			expect(res.body[0].name).to.be.equal('bulbasaur');
	// 		} catch (err) {}
	// 	}).timeout(400);
	// 	it('If an id parameter is passed it must return the pokemon associated with that id', async () => {
	// 		try {
	// 			const res = await agent.get('/pokemons/1');
	// 			expect(res.body[0].name).to.be.equal('bulbasaur');
	// 		} catch (err) {}
	// 	}).timeout(400);
	// });
