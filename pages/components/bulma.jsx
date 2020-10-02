import Head from 'next/head'
import useAxios from 'axios-hooks'
import './bulma.module.css'

const routes = require('../../util/routes.json')

export default function Bulma() {
  const [{ data, loading, error }, refetch] = useAxios(
    'http://localhost:3000/api/users'
  )

  if (loading) return <p className="text-gray-500">Loading...</p>
  if (error) return <p className="text-red-700">Error!</p>

  const menuItems = routes.map((route, index) => (
    <a href={route.path} className="navbar-item" key={index}>
      {route.label}
    </a>
  ))

  const userCards = data.users.map((user, index) => (
    <div className="column is-one-quarter" key={index}>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={user.avatar} alt="Placeholder image"></img>
          </figure>
        </div>
        <div className="card-content">
          <div className="media-content">
            <p className="title is-4">{user.name}</p>
          </div>
        </div>
      </div>
    </div>
  ))
  return (
    <div>
      <Head>
        <title>Bulma CSS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav className="navbar">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                width="112"
                height="28"
              />
            </a>
          </div>

          <div className="navbar-menu">
            <div className="navbar-start">{menuItems}</div>
          </div>
        </nav>
      </header>

      <main className="container">
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Bulma</h1>
              <h2 className="subtitle">CSS Framework Example</h2>
            </div>
          </div>
        </section>

        <section>
          <div className="columns is-mobile is-multiline">{userCards}</div>
        </section>
      </main>

      <footer></footer>
    </div>
  )
}
