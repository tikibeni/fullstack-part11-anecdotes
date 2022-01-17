import axios from 'axios'

const port = process.env.PORT | 3000
const baseUrl = `http://localhost:${port}/api/anecdotes`

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