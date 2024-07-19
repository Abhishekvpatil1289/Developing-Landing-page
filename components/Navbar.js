import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-lg font-bold">Brand</div>
        <ul className="flex space-x-4">
          <li><Link href="#hero">Home</Link></li>
          <li><Link href="#features">Features</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
