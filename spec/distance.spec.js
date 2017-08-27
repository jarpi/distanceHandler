require('mocha')
const chai = require('chai')
const assert = chai.assert
const sinon = require('sinon')
const distance = require('../lib/distance.js')
const distanceHandler = require('../lib/distanceHandler.js')

describe('distanceHandler', function() {
    this.timeout(20*1000)
    let handlerSpy;
    let distanceSpy;

    before((done) =>{
        distanceSpy = sinon.spy(distance)
        handlerSpy = sinon.spy(distanceHandler(distanceSpy))
        return done()
    })

    afterEach((done)=>{
        distanceSpy.reset()
        handlerSpy.reset()
        return done()
    })

    it('Should forward call to function \'distance\'', (done) => {
            handlerSpy(1,1,(err, res)=>{
            assert(!handlerSpy.exceptions[0])
            assert(distanceSpy.called)
            return done()
        })
    })

    it('Should forward arguments when calling \'distance\'', (done) => {
            handlerSpy(1,1,(err, res)=>{
            assert(!handlerSpy.exceptions[0])
            assert(distanceSpy.called)
            assert(distanceSpy.args[0][0] === handlerSpy.args[0][0])
            assert(distanceSpy.args[0][1] === handlerSpy.args[0][1])
            assert.isFunction(distanceSpy.args[0][2])
            return done()
        })
    })

    it('Should call distance function one at a time (maximum parallel requests === 1, total requests === 2)', (done) => {
        handlerSpy(1,1,(err, res)=>{
            assert(!handlerSpy.exceptions[0])
        })
        handlerSpy(1,1,(err, res)=>{
            assert(distanceSpy.calledTwice)
            return done()
        })
        assert(distanceSpy.calledOnce)
    })

})

