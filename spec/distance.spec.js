require('mocha')
const chai = require('chai')
const assert = chai.assert
const sinon = require('sinon')
const distanceCalc = require('../test.js')

describe('distanceHandler', function() {
    this.timeout(10*1000)
    let handlerSpy;
    let distanceSpy;

    before((done) =>{
        handlerSpy = sinon.spy(distanceCalc, 'distanceHandler')
        distanceSpy = sinon.spy(distanceCalc, 'distance')
        distanceCalc.distanceHandler = handlerSpy
        distanceCalc.distance = distanceSpy
        console.dir(distanceCalc)
        done()
    })

    it('Should accept same params as \'distance\'', (done) => {
            handlerSpy(1,1,(err, res)=>{
            assert(!handlerSpy.exceptions[0])
            console.dir(distanceSpy.getCalls())
            assert(distanceSpy.called)
            return done()
        })
    })

    it ('Should ')
})

