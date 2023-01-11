import Link from "next/link"
import { useState } from "react"
import { MenuClose, MenuOpen } from "./svgs"

const Header = ({active, isDark}: {active: string, isDark?: boolean}) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const menuItems = [
        {
            name: "Home",
            linkTo: "/"
        },
        {
            name: "About",
            linkTo: "/about"
        },
        {
            name: "Experience",
            linkTo: "/experience"
        },
        {
            name: "Projects",
            linkTo: "/projects"
        },
        {
            name: "Blogs",
            linkTo: "/blogs"
        }
    ]

    return <div className={`header ${isDark ? 'dark' : ''}`}>
        <Logo />
        <div className="menu mobile">
            {menuItems.map((item, index) => <MenuItem {...item} key={index} active={active}/>)}
        </div>
        <div className="menu-mobile desktop" onClick={() => setMenuOpen(true)}>
            <MenuOpen />
        </div>
        {
            menuOpen && <MobileMenu setMenuOpen={setMenuOpen} menuItems={menuItems} active={active} />
        }
    </div>
}

export default Header

export const Logo = () => (
    <div className="logo">Adefemigreat</div>
)

export const MenuItem = ({name, linkTo, active}:{name:string, linkTo: string, active: string}) => (
    <div className={`menu-item ${linkTo === active ? 'active' : ''}`}>
        <Link href={linkTo}>{name}</Link>
    </div>
)

const MobileMenu = ({ setMenuOpen, menuItems, active }: { setMenuOpen: (i: boolean) => void, menuItems: any[], active: string }) => {
    return <div className="mainMobileMenu desktop">
        <div className="head-content">
            <Logo />
            <div className="menu-mobile" onClick={() => setMenuOpen(false)}>
                <MenuClose />
            </div>
        </div>
        <div className="menu">
            {menuItems.map((item, index) => <MenuItem {...item} key={index} active={active} />)}
        </div>
    </div>
}