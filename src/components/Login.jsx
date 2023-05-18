import { useState } from "react";
// import { MainMenu } from "./MainMenu"
import ReactDOM from "react-dom/client";

export function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function login(ev) {
        ReactDOM.createRoot(document.getElementById("registerContainer")).render(
          <MainMenu user={{ username: username, password: password }} />
        );
      }

    return (
        <>
            <div className="registerContainer" id="registerContainer">
                <div class="card">
                    <div class="card-header display-3 bg-primary">
                        Login
                    </div>
                    <div class="card-body">
                        <form action="" method="post">
                            <div class="form-outline mb-4">
                                <label class="form-label" id="username" for="form2Example1" /*onInput={SaveCharacter}*/ >Username</label>
                                <input type="text" id="form2Example1" class="form-control" />
                            </div>

                            <div class="form-outline mb-4">
                                <label class="form-label" id="password" for="form2Example2" /*onInput={SaveCharacter}*/>Password</label>
                                <input type="password" id="form2Example2" class="form-control" />
                            </div>
                            <button type="submit" className="primary" onClick={login}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
