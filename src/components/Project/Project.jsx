import { useState, useRef } from 'react';
import './project.scss';
import Slider from 'infinite-react-carousel';
import { v4 as uuidv4 } from 'uuid';

export default function Project() {
    const data = [
        {
            id: '1',
            icon: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1482422962/l2ygxtp4p7juiuegri9y.png',
            linkSite: 'https://ketto.herokuapp.com',
            linkGithub: 'https://github.com/Ramlala-Yadav-Git/ketto-clone',
            title: 'Ketto',
            desc: 'Cloned web App of Ketto, which is an Indian online crowdfunding platform.',
            img: 'KettoImg.png',
        },
        {
            id: '2',
            icon: 'https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_f4dd94ee3176b010c9776014e68ccf38/mailchimp.png',
            linkSite: 'https://mail-chimp-clone.vercel.app/',
            linkGithub: 'https://github.com/harshchaturvedi1/mailChimp-clone',
            title: 'MailChimp ',
            desc: 'Mailchimp is an American marketing automation platform and email marketing service.',
            img: 'MailChimp.png',
        },
        {
            id: '3',
            icon: 'https://mosaicdistrict.com/wp-content/uploads/2016/02/bluemercury_2019.jpg',
            linkSite: 'https://bluemercurryclone.netlify.app',
            linkGithub: 'https://github.com/iampiyushkr/bluemercuryClonn',
            title: 'Bluemercury ',
            desc: ' Bluemercury is  a US-based website that sells cosmetics products ',
            img: 'Bluemercurry.png',
        },
        {
            id: '1',
            icon: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1482422962/l2ygxtp4p7juiuegri9y.png',
            linkSite: 'https://ketto.herokuapp.com',
            linkGithub: 'https://github.com/Ramlala-Yadav-Git/ketto-clone',
            title: 'Ketto',
            desc: 'Cloned web App of Ketto, which is an Indian online crowdfunding platform.',
            img: 'KettoImg.png',
        },
        {
            id: '2',
            icon: 'https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_f4dd94ee3176b010c9776014e68ccf38/mailchimp.png',
            linkSite: 'https://mail-chimp-clone.vercel.app/',
            linkGithub: 'https://github.com/harshchaturvedi1/mailChimp-clone',
            title: 'MailChimp',
            desc: 'Mailchimp is an American marketing automation platform and email marketing service.',
            img: 'MailChimp.png',
        },
        {
            id: '3',
            icon: 'https://mosaicdistrict.com/wp-content/uploads/2016/02/bluemercury_2019.jpg',
            linkSite: 'https://bluemercurryclone.netlify.app',
            linkGithub: 'https://github.com/iampiyushkr/bluemercuryClonn',
            title: 'Bluemercury ',
            desc: ' Bluemercury is  a US-based website that sells cosmetics products ',
            img: 'Bluemercurry.png',
        },
        {
            id: '1',
            icon: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1482422962/l2ygxtp4p7juiuegri9y.png',
            linkSite: 'https://ketto.herokuapp.com',
            linkGithub: 'https://github.com/Ramlala-Yadav-Git/ketto-clone',
            title: 'Ketto ',
            desc: 'Cloned web App of Ketto, which is an Indian online crowdfunding platform.',
            img: 'KettoImg.png',
        },
        {
            id: '2',
            icon: 'https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_f4dd94ee3176b010c9776014e68ccf38/mailchimp.png',
            linkSite: 'https://mail-chimp-clone.vercel.app/',
            linkGithub: 'https://github.com/harshchaturvedi1/mailChimp-clone',
            title: 'MailChimp ',
            desc: 'Mailchimp is an American marketing automation platform and email marketing service.',
            img: 'MailChimp.png',
        },
        {
            id: '3',
            icon: 'https://mosaicdistrict.com/wp-content/uploads/2016/02/bluemercury_2019.jpg',
            linkSite: 'https://bluemercurryclone.netlify.app',
            linkGithub: 'https://github.com/iampiyushkr/bluemercuryClonn',
            title: 'Bluemercury',
            desc: ' Bluemercury is  a US-based website that sells cosmetics products ',
            img: 'Bluemercurry.png',
        },
    ];

    return (
        <div className="Project" id="Project">
            {/* <br /> */}

            <h1>My Projects</h1>
            <hr
                style={{
                    width: 180,
                    marginTop: '-28px',
                    height: 10,
                    backgroundColor: '#18d26e',
                    border: 'none',
                }}
            />
            <br />
            <Slider
                autoplay={true}
                slidesToShow={2}
                centerMode={true}
                autoplayScroll={1}
                centerPadding={-60}
                arrows={true}
            >
                {data.map((d) => (
                    <div key={uuidv4()} className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2 style={{ color: 'crimson' }}>
                                        {d.title}
                                    </h2>
                                    <p>{d.desc}</p>
                                    <div className="button">
                                        {/* <a
                                            href={d.linkBlog}
                                            target="blank"
                                            style={{
                                                textDecoration: 'none',
                                                color: 'white',
                                            }}
                                        >
                                            <button>Blog</button>
                                        </a> */}
                                        <a
                                            href={d.linkGithub}
                                            target="blank"
                                            style={{
                                                textDecoration: 'none',
                                                color: 'white',
                                            }}
                                        >
                                            <button style={{ marginLeft: 5 }}>
                                                Github
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <a href={d.linkSite} target="blank">
                                    <div>
                                        <img src={d.img} alt="" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
