'use strict';

var index = require('../index'),
    chai = require('chai'),
    expect = chai.expect;

describe('Index', function () {

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
			expect(index.numberToText(13)).to.be.eql("sheloshesre");
			done();
		});
	});

	describe ('#numberToText', function() {
		it('correct answer to 28', function(done) {
			expect(index.numberToText(28)).to.be.eql("esrim veshmone");
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
		it('correct answer to 103', function(done) {
			expect(index.numberToText(103)).to.be.eql("mea veshelosh");
			done();
		});
	});

	describe ('#numberToText', function() {
		it('correct answer to 113', function(done) {
			expect(index.numberToText(113)).to.be.eql("mea vesheloshesre");
			done();
		});
	});

	describe ('#numberToText', function() {
		it('correct answer to 121', function(done) {
			expect(index.numberToText(121)).to.be.eql("mea esrim veehad");
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
			expect(index.numberToText(213)).to.be.eql("mataim vesheloshesre");
			done();
		});
	});

	describe ('#numberToText', function() {
		it('correct answer to 250', function(done) {
			expect(index.numberToText(250)).to.be.eql("mataim vehameshim");
			done();
		});
	});





	/**
    * 7, 10, 13, 28, 70, 100, 113, 121, 200, 213, 250, 400, 666
	**/
});