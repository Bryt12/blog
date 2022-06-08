import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <header className="bg-slate-700">
        <div className="flex flex-row flex-between">
          <p className="text-5xl pl-10 py-5 text-white">
            <Link to={routes.home()}>Blog</Link>
          </p>
          <nav>
            <ul className="text-white pt-5 pr-3">
              <li>
                <Link to={routes.home()}>Home</Link>
              </li>
              <li>
                <Link to={routes.about()}>about</Link>
              </li>
              <li>
                <Link to={routes.contact()}>Contact</Link>
              </li>
              <li>
                {isAuthenticated ? (
                  <div>
                    <span>Logged in as {currentUser.email}</span>{' '}
                    <button type="button" onClick={logOut}>
                      Logout
                    </button>
                  </div>
                ) : (
                  <Link to={routes.login()}>Login</Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
