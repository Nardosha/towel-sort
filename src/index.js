
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = []
    if (matrix) {
        matrix.map((item, index) => {
            if (index % 2 !== 0) {
                item.reverse()
            }
            for (let el of item) {
                result.push(el)
            }

        })
    }
    return result
}
