import React from 'react'

import './Login.css'

export default function Login() {
    const toggleForm = (e) => {
        e.preventDefault();
        var container = document.querySelector('.container');
        container.classList.toggle('active');
    }
    return (
        <section>
            <div className="container">
                <div className="user singinBx">
                    <div className="imgBx"><img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3608345974,1022498256&fm=26&gp=0.jpg" alt="" /></div>
                    <div className="formBx">
                        <form>
                            <h2>Sign in</h2>
                            <input type="text" name="" placeholder="Username" />
                            <input type="password" name="" placeholder="Password" />
                            <input type="submit" value="Login" />
                            <p className="signup">Don't have an account ? <a href="https://github.com" onClick={toggleForm}>Sign up.</a></p>
                        </form>
                    </div>
                </div>
                <div className="user singupBx">
                    <div className="formBx">
                        <form>
                            <h2>Create an account</h2>
                            <input type="text" name="" placeholder="Username" />
                            <input type="email" name="" placeholder="Email Address" />
                            <input type="password" name="" placeholder="Create Password" />
                            <input type="password" name="" placeholder="Confirm Password" />
                            <input type="submit" value="Sign up" />
                            <p className="signup">Already have an account ? <a href="https://github.com" onClick={toggleForm}>Sign in.</a></p>
                        </form>
                    </div>
                    <div className="imgBx"><img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3014028386,1757499074&fm=26&gp=0.jpg" alt="" /></div>
                </div>
            </div>
        </section>
    );
};
