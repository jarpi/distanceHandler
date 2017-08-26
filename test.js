const maxReq = 1
const calls = []
var currentReq = 0


const distance = (p1, p2, cb) => {
    const sec =  Math.floor((Math.random() * 10) + 1)
    const km =  Math.floor((Math.random() * 10) + 1)
    setTimeout(()=>{cb(null, km)}, sec)
}

const distanceHandler = (p1, p2, cb) => {
    console.dir(distance)
    calls.push([p1, p2, (err, res) => {
        currentReq -= 1
        makeCall()
        return cb(err, res)
    }])
    return makeCall()
}

const makeCall = () => {
    if (calls.length && currentReq < maxReq) {
        currentReq += 1;
        return distance.apply(null, calls.pop())
    }
}

module.exports = { distanceHandler, distance }


