import { useContext, useState } from "react"
import AlertContext from "../../context/alert/AlertContext";
import GithubContext from "../../context/github/GithubContext";
import { searchUsers } from "../../context/github/GithubActions";
import { CLEAR_USERS, GET_USERS, SET_LOADING } from "../../context/github/GithubConstants";

const UserSearch = () => {
    const [text, setText] = useState('');

    const handleChange = (e)=> setText(e.target.value)
    const handleSubmit =async (e) =>{
        e.preventDefault()

        if(text === ''){
            setAlert('Please enter something','error')
        }else {
            dispatch({type:SET_LOADING})
            const users = await searchUsers(text)
            dispatch({type:GET_USERS, payload:users})

            setText('')
        }
    }

    const {users, dispatch} = useContext(GithubContext);
    const {setAlert} = useContext(AlertContext);
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-8 mb-8">
      <div>
          <form className="form-control" onSubmit={handleSubmit}>
            <div className="relative">
                <input type="text" 
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}
                />
                <button type="submit" className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg search-btn">Go</button>
            </div>
          </form>
      </div>
      {users.length > 0 && (<div>
          <button onClick={()=>dispatch({type:CLEAR_USERS})} className="btn btn-ghost btn-lg ">Clear</button>
      </div>)}
      
    </div>
  )
}

export default UserSearch
