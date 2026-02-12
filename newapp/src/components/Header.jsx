import './Header.css'

export default function Header({ card }) {
  return (
    <div>
      <h1>{card}</h1>

      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">Contact Us</a>
        <a href="#">Projects</a>
      </nav>

    </div>
  )
}
