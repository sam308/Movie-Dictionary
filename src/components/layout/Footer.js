import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="footer p-3 mt-4 text-center  text-light" id="navbarhead">
                        <div id="footertext">
                            <i className="fa fa-copyright"></i> Samarpan Chakravarty, 
                            Created using <i className="fab fa-react" />
                            <span className="col-md-4"><a href="https://github.com/sam308/Movie-Dictionary"><i className="fab fa-github"></i></a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;