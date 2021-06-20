import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Icons Imports
import PlayBtn from '../assets/img/icons/play-btn.svg';
import videoBg from '../assets/img/video.png';

import { withTranslation } from 'react-i18next';

class Tutorial extends Component {
    render() {
        const  {t} = this.props
        return (
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="tutorial-box">
                    <div className="tutorial-box-top">
                        <div className="tutorial-box-title">
                            {t("tutorialHeadTitle")}
                        </div>
                        <Link to="#" className="tutorial-video" data-fancybox="">
                            <img alt={"RunVid"} src={PlayBtn} className="play-btn" />
                            <img alt={"RunVid"} src={videoBg} className="video-bg" />
                        </Link> 
                    </div>
                    <div className="tutorial-box-content">
                        <div className="title">{t("tutorialContentTitle")}</div>
                        <div className="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>

                        <div className="title">{t("tutorialContentTitle")}</div>
                        <div className="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withTranslation()(Tutorial);