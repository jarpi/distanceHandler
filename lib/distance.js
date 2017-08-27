const distance = (p1, p2, cb) => {
    const sec =  Math.floor((Math.random() * 10) + 1)
    setTimeout(timeoutHandler(cb), 0)
}

const timeoutHandler = (cb) => {
    return (err, res) => {
        const km =  Math.floor((Math.random() * 10) + 1)
        return cb(null, km)
    }
}

module.exports = distance
