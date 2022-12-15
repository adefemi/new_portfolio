import Link from "next/link"

const Header = ({active, isDark}: {active: string, isDark?: boolean}) => {

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
        <div className="menu">
            {menuItems.map((item, index) => <MenuItem {...item} key={index} active={active}/>)}
        </div>
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