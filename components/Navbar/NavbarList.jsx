import NavbarItemList from './NavbarItemList'

const NavbarList = () => {
  return (
    <ul className="items-stretch hidden space-x-3 md:flex">
      <NavbarItemList destination='#top' label='Home' />
      <NavbarItemList destination='#about' label='Sobre' />
      <NavbarItemList destination='#services' label='Serviços' />
      <NavbarItemList destination='#contact' label='Contato' />
    </ul>
  )
}

export default NavbarList
