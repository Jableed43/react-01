function Users({users}) {

    return (
    <>
        { //iteracion
            users.map((user, index) => (
            <div key={index} className="card">
                <div> 
                <img src={user.avatar}/> 
                <div>
                <h5>Name: {user.name}</h5>
                <hr/>
                <p>Id : {user.id}</p>
                </div>
                </div>
            </div>
            )  ) 
        }
        </>
    )
}

export default Users