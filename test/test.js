const Market = require("../models/Market");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
chai.should();

chai.use(chaiHttp);

describe("Markets", () => {
  beforeEach((done) => {
    Market.deleteMany({}, (err) => {
      done();
    });
  });
  describe("/GET market", () => {
    it("it should GET all the market", (done) => {
      chai
        .request(app)
        .get("/api/products")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("array");
          res.body.data.length.should.be.eql(0);
          done();
        });
    });
  });
  describe("/POST market", () => {
    it("it should new POST a market", (done) => {
      let blog = {
        name:"book1",
        description:"coolbook",
        price:39,
        quantity:1000,
        category:"male"
      };
      chai
        .request(app)
        .post("/api/products")
        .send(blog)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("object");
          res.body.status.should.be.eql("success");
          done();
        });
    });
  });
  describe("/GET/:id market", () => {
    it("it should GET a market by the id", (done) => {
      let market = new Market({
        name:"book5",
        description:"coolbook",
        price:40,
        quantity:980,
        category:"male"
    });
      market.save((err, blog) => {
        chai
          .request(app)
          .get("/api/products/" + blog.id)
          .send(blog)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.data.should.be.a("object");
            res.body.status.should.be.eql("success");
            done();
          });
      });
    });
  });
  describe("/PUT/:id market", () => {
    it("it should UPDATE a blog given the id", (done) => {
      let market = new Market({
            name:"book6",
            description:"coolbook",
            price:40,
            quantity:980,
            category:"male"
        });
      market.save((err, blog) => {
        console.log(blog.id);
        chai
          .request(app)
          .put("/api/products/" + blog.id)
          .send({
                name:"book7",
                description:"coolbook",
                price:40,
                quantity:980,
                category:"male"
            })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.data.should.be.a("object");
            res.body.status.should.be.eql("success");
            done();
          });
      });
    });
  });
  describe("/DELETE/:id market", () => {
    it("it should DELETE a market given the id", (done) => {
      let market = new Market({
        name:"book8",
        description:"coolbook",
        price:40,
        quantity:980,
        category:"male"
    });
      market.save((err, blog) => {
        chai
          .request(app)
          .delete("/api/products/" + blog.id)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.data.should.be.a("object");
            res.body.status.should.be.eql("success");
            done();
          });
      });
    });
  });

  describe("/delete market", () => {
    it("it should GET all the market", (done) => {
      chai
        .request(app)
        .get("/api/products")
        .end((err, res) => {
          Market.deleteMany({}, (err) => {
            done();
          });
          res.should.have.status(200);
          res.body.data.should.be.a("array");
          res.body.data.length.should.be.eql(0);
          done();
        });
    });
  });
});
