const getPuzzle = async (wordCount) => {
    let data = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (data.status === 200) {
        data = await data.json()
        return data.puzzle
    } else {
        throw new Error('Something went wrong')
    }
}



const getPuzzleOld = (wordCount) => {
    return fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((data) => {
        if (data.status === 200) {
            return data.json()
        } else {
            throw new Error('Something went wrong')
        }
    }).then((data) => {
        return data.puzzle
    })
}


// const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest()
//     request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//     request.send()
//     request.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             let puzzleData = JSON.parse(e.target.responseText)
//             resolve(puzzleData.puzzle)
//         } else if (e.target.readyState === 4) {
//             reject('An error occured')
//         }
//     })
// })

// const getPuzzleSync = () => {
//     const request = new XMLHttpRequest()
//     request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=2', false)
//     request.send()
//     if (request.readyState === 4 && request.status === 200) {
//         let puzzleData = JSON.parse(request.responseText)
//         return puzzleData.puzzle;
//     } else if (request.readyState === 4) {
//         throw Error('Error occured')
//     }
// }