import { useState } from 'react'
import { Link } from 'react-router-dom'
import RiggedmotionSvg from '/assets/Riggedmotion.svg'
import { GoogleSignInComponent } from "@/components/GoogleSignIn"
import { useAuth } from "@/contexts/AuthContext"
import { Menu, X } from 'lucide-react' // Icons for burger menu
import { UserMenu } from "@/components/UserMenu"

export function HeaderComponent() {
    const { user } = useAuth()

    // State to toggle menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Toggle menu handler
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <header className="sticky top-0 z-50 backdrop-blur-sm bg-black/30 border-b border-white/10">
            <div className="container mx-auto py-4">
                <div className="flex justify-between items-center px-4">

                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0">
                        <img src={RiggedmotionSvg} alt="logo" className="h-8" />
                    </Link>

                    {/* Burger Menu Button for Mobile */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden text-white focus:outline-none"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                    {/* Navbar Links */}
                    <nav className={`absolute lg:static top-16 left-0 w-full lg:w-auto lg:bg-transparent flex-col lg:flex-row lg:flex items-center space-x-0 lg:space-x-8 gap-6 ${isMenuOpen ? 'flex' : 'hidden'} lg:flex`}>
                        <Link
                            to="/auction"
                            className="text-gray-200 hover:text-[#DBD2A4] transition-colors py-2 lg:py-0"
                        >
                            Versteigerung
                        </Link>
                        <Link
                            to="/contact"
                            className="text-gray-200 hover:text-[#DBD2A4] transition-colors py-2 lg:py-0"
                        >
                            Kontakt
                        </Link>
                        {user ? (
                            <UserMenu user={user} />
                        ) : (
                            <GoogleSignInComponent />
                        )}
                    </nav>
                </div>
            </div>
        </header>
    )
}