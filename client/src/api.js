import axios from "axios";


export const vote_API = async ({voteURL,vote}) => {
    await axios.post(`http://localhost:3001/api/${voteURL}`, {
        vote
    },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
}
