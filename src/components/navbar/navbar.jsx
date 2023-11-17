import Wrapper from "../../layout/wrapper"
import logo from "../../assets/logo.png"

const NavbarLink = ({link, children}) => {
    return (
        <div>
            <a className="hover:text-[#ffffff] text-[18px] font-[700] text-[#AFAEB8]" href={`#${link}`}>{children}</a>
        </div>
    )
}

const Navbar = () => {
    return (
        <div>
            <Wrapper>
                <div className="flex justify-between items-center border-b-[3px] border-[#191919] flex-col lg:flex-row gap-[10px] lg:gap-0">
                    <div>
                        <img src={logo} alt="logo" className="h-[100px] lg:h-[70px] lg:w-[200px] object-cover" />
                    </div>
                    <div className="hidden items-center gap-[45px] lg:flex">
                        <NavbarLink link={"whyus"}>Why us</NavbarLink>
                        <NavbarLink link={"casestudies"}>Case Studies</NavbarLink>
                        <NavbarLink link={"testimonials"}>Testimonials</NavbarLink>
                        <NavbarLink link={"faq"}>FAQ</NavbarLink>
                    </div>
                    <div className="drawer lg:hidden absolute top-[10px] right-[0px] drawer-end">
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content absolute right-[10px] top-[10px]">
                            <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary bg-[#5D45FD] hover:bg-[#4d42c5]"><i className="fa-solid fa-bars"></i></label>
                        </div> 
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content flex flex-col gap-[10px]">
                                <h1>MENU</h1>
                                <NavbarLink link={"whyus"}>Why us</NavbarLink>
                                <NavbarLink link={"casestudies"}>Case Studies</NavbarLink>
                                <NavbarLink link={"testimonials"}>Testimonials</NavbarLink>
                                <NavbarLink link={"faq"}>FAQ</NavbarLink>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full lg:w-fit flex justify-end">
                        <button className="btn bg-[#5D45FD] hover:bg-[#4d42c5] btn-primary">Let's talk <i class="fa-solid fa-chevron-right"></i></button>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Navbar