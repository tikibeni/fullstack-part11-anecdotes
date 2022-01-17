import axios from 'axios'

const devBase = 'http://localhost:3000/api/anecdotes'
const prodBase = `https://fs11-anecdotes.herokuapp.com/api/anecdotes`

const baseUrl = (process.env.NODE_ENV ? prodBase : devBase)

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createNew = async (content) => {
    const object = {content, votes:0}
    const response = await axios.post(baseUrl, object)
    return response.data
}

const update = async (id, newObject) => {
    const response = await axios.put(baseUrl, newObject)
    return response.data
}

export default { getAll, createNew, update }