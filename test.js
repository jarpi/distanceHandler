const distance = (p1, p2, cb) => {
    const sec =  Math.floor((Math.random() * 10) + 1)
    console.dir(sec)
    setTimeout(()=>{cb(null, 'Resolved!')}, sec * 1000)
}

const maxReq = 1
const calls = []
var currentReq = 0

const distanceHandler = (p1, p2, cb) => {
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
        console.dir('currentReq: ' + currentReq)
        return distance.apply(null, calls.pop())
    }
}

(async ()=>{
    try {
        distanceHandler(1,1, (err, r)=>{
            console.log('First call')
            console.dir(r)
        })
        distanceHandler(2,2, (err, r)=>{
            console.log('Second call')
            console.dir(r)
        })
        return
    } catch (e) {
        console.dir(e)
    }
})()

