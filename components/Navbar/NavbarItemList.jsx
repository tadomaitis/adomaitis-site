const NavbarItemList = ({ destination, label }) => {
  return (
    <li className="flex">
      <a rel="noopener noreferrer" href={destination}
        className="flex items-center px-4 -mb-1 border-b-2 border-transparent
        hover:text-primary hover:border-primary hover:font-bold">
          {label}
      </a>
    </li>
  )
}

export default NavbarItemList
