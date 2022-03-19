import './topbar.scss';
import { Person, Mail } from '@material-ui/icons';
import { FaDownload } from 'react-icons/fa';

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={'topbar ' + (menuOpen && 'active')}>
            <div className="wrapper">
                <div className="left">
                    <div className="logoImg" >
                      
                        <img src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Letter-Logos-and-How-to-Make-Your-Own-for-Free-image3.png" alt="" />
                                          
                    </div>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+91 9470683808</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>ankushkrsingh96@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="itemContainer1">
                        <a href="#intro">HOME</a>
                    </div>
                    <div className="itemContainer1">
                        <a href="#about">ABOUT</a>
                    </div>
                    <div className="itemContainer1">
                        <a href="#Project">PROJECTS</a>
                    </div>
                    <div className="itemContainer1">
                        <a href="#skill">SKILLS</a>
                    </div>
                    <div className="itemContainer1">
                        <a href="#contact">CONTACTS</a>
                    </div>
                    <div className="itemContainer1" id="lastDiv">
                        <a
                            href="https://drive.google.com/file/d/1Urp5fF79BGuwapqEMyU_lXazcJbVAxXi/view?usp=sharing"
                            target="blank"
                            id="last"
                        >
                            RESUME <FaDownload className="icon1" />
                        </a>
                    </div>

                    <div
                        className="hamburger"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
