'use strict';

var index = require('../index'),
    chai = require('chai'),
    expect = chai.expect;

describe('Index', function () {
	describe('#sum', function () {
		it('sums two numbers', function (done) {
			expect(index.sum(1, 2)).to.be.eql(3);
			done();
		});
	});

	describe ('#numberToText', function() {
		it('correct answer to 7', function(done) {
			expect(index.numberToText(7)).to.be.eql("sheva");
			done();
		});
	});

	describe ('#numberToText', function() {
		it('correct answer to 10', function(done) {
			expect(index.numberToText(10)).to.be.eql("eser");
			done();
		});
	});

	describe ('#numberToText', function() {
		it('correct answer to 13', function(done) {
			expect(index.numberToText(13)).to.be.eql("shalosh esre");
			done();
		});
	});

	describe ('#numberToText', function() {
		it('correct answer to 28', function(done) {
			expect(index.numberToText(28)).to.be.eql("esrim ve shmone");
			done();
		});
	});

	describe ('#numberToText', function() {
		it('correct answer to 70', function(done) {
			expect(index.numberToText(70)).to.be.eql("shevim");
			done();
		});
	});

	describe ('#numberToText', function() {
		it('correct answer to 100', function(done) {
			expect(index.numberToText(100)).to.be.eql("mea");
			done();
		});
	});

	describe ('#numberToText', function() {
		it('correct answer to 113', function(done) {
			expect(index.numberToText(113)).to.be.eql("mea ve shalosh esre");
			done();
		});
	});

	describe ('#numberToText', function() {
		it('correct answer to 121', function(done) {
			expect(index.numberToText(121)).to.be.eql("mea esrim ve ahat");
			done();
		});
	});

	describe ('#numberToText', function() {
		it('correct answer to 200', function(done) {
			expect(index.numberToText(200)).to.be.eql("mataim");
			done();
		});
	});

	describe ('#numberToText', function() {
		it('correct answer to 213', function(done) {
			expect(index.numberToText(213)).to.be.eql("mataim ve shalosh esre");
			done();
		});
	});

	describe ('#numberToText', function() {
		it('correct answer to 250', function(done) {
			expect(index.numberToText(250)).to.be.eql("mataim ve hameshim");
			done();
		});
	});





	/**
    * 7, 10, 13, 28, 70, 100, 113, 121, 200, 213, 250, 400, 666
	**/
});