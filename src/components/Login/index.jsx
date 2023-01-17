import "./style.css"

function Login() {
  return (
    <div className="container">
      <div className="form-wrapper">
      <form action="submit">

        <div className="spinner" />
        <div className="ribbon"></div>

        <label>Email
          <input type="email" />
        </label>

        <label>Senha
          <input type="password" />
        </label>

        <button>Login</button>
      </form>
      </div>
    </div>
  )
}

export default Login