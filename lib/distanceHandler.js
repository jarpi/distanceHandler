const maxReq = 1
const calls = []
let currentReq = 0
let distanceFn

const distanceHandler = (p1, p2, cb) => {
    calls.push([p1, p2, distanceHandlerCb(cb)])
    return makeCall()
}

const distanceHandlerCb = (cb) => {
    return (err, res) => {
        currentReq -= 1
        makeCall()
        return cb(err, res)
    }
}

const makeCall = () => {
    if (calls.length && currentReq < maxReq) {
        currentReq += 1;
        return this.distanceFn.apply(this, calls.pop())
    }
}

module.exports = (distanceDep) => {
    this.distanceFn = distanceDep || require('distance')
    return distanceHandler
}

