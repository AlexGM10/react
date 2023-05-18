import { useEffect, useState } from "react"



export function Register() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleInput(ev) {

        useEffect(() => {
            console.log("register montado")
            return () => {
                console.log("compo desmontado")
            }
        }, [])
        
        switch (ev.target.id) {
            case "username" :{
                setUsername(ev.target.value)
                break;
            }

            case "password" :{
                setPassword(ev.target.value)
                break;
            }

            default:
                break;
        }
    }



    return (
        <>
            <div class="card ">
                <div class="card-header display-3 bg-warning">
                    Register
                </div>
                <div class="card-body">
                    <form action="" method="post">
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example1" onInput={handleInput}>Username</label>
                        <input type="text" id="form2Example1" class="form-control" />
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example2" onInput={handleInput}>Password</label>
                        <input type="password" id="form2Example2" class="form-control" />
                    </div>
                    <button type="submit" className="primary">Submit</button>
                    </form>
                </div>
            </div>




        </>
    )
}
