const Navbar = () => {
  const navbarArray = [
    { name: 'Home' },
    { name: 'Products' },
    { name: 'Blog' },
    { name: 'FAQ' },
    { name: 'Contact Us ' },
  ]
  const navbarList = navbarArray.map((item) => (
    <li key={item.id}>
      <a href="/">{item.name}</a>
    </li>
  ))
  return <div>{navbarList}</div>
}
export default Navbar
