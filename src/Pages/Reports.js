import React, { Component } from 'react';
import {Link} from 'react-router-dom'

//Pictures Imports
import ReportIcon from '../assets/img/icons/report-icon.svg';

export default class Repots extends Component {
    render() {
        return (
            <main className="content p-0">

            <div className="welcome">

                <div className="report-page">
                    <div className="report-sidebar">
                        <div className="report-title">
                            <img alt={"RunVid"} src={ReportIcon} /> Raporlar
                        </div>
                        <ul className="report-list">
                            <li className="report-item">
                                <div className="report-link">
                                    <div className="left">
                                        <div className="report-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="19.092" height="19.092" viewBox="0 0 19.092 19.092">
                                                    <path id="Icon_open-graph" data-name="Icon open-graph" d="M16.777,0,9.546,7.159,7.159,4.773,0,12,2.386,14.39,7.159,9.546l2.386,2.386,9.546-9.546ZM0,16.705v2.386H19.092V16.705Z"/>
                                                </svg>
                                        </div>
                                        <span className="title">Videos</span>
                                    </div>
                                    <div className="right">
                                        <div className="arrow-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14.793" height="8.397" viewBox="0 0 14.793 8.397">
                                                    <path id="Icon_feather-chevron-down" data-name="Icon feather-chevron-down" d="M9,13.5l5.982,5.982L20.965,13.5" transform="translate(-7.586 -12.086)" fill="none" stroke="#CED5E7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                                </svg>
                                        </div>
                                    </div>
                                </div>
                                <ul className="report-sub">
                                    <li>
                                        <Link to="#" className="report-sub-link">
                                            <span className="title">Videos</span>
                                        </Link> 
                                    </li>
                                    <li>
                                        <Link to="#" className="report-sub-link">
                                            <span className="title">Videos</span>
                                        </Link> 
                                    </li>
                                </ul>
                            </li>
                            <li className="report-item">
                                <Link to="#" className="report-link">
                                    <div className="left">
                                        <div className="report-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="19.092" height="21.452" viewBox="0 0 19.092 21.452">
                                                    <path id="Icon_simple-graphql" data-name="Icon simple-graphql" d="M13.359,2.459l4.411,2.547A1.911,1.911,0,1,1,19.607,8.18v5.094a1.913,1.913,0,1,1-1.882,3.131l-4.384,2.531A1.913,1.913,0,1,1,9.692,19L5.28,16.454a1.913,1.913,0,1,1-1.834-3.181V8.179a1.912,1.912,0,1,1,1.4-3.515A1.86,1.86,0,0,1,5.279,5L9.693,2.454a1.912,1.912,0,1,1,3.667.005Zm-.46.784a.709.709,0,0,1-.052.052l5.775,10c.023-.008.05-.014.073-.021v-5.1A1.908,1.908,0,0,1,17.3,5.862c.005-.021.011-.044.017-.064L12.9,3.243ZM10.2,3.3l-.054-.054L5.73,5.791A1.909,1.909,0,0,1,4.424,8.155l-.068.019v5.1l.075.021,5.775-10h0Zm1.856.453a1.927,1.927,0,0,1-1.065,0l-5.774,10a1.939,1.939,0,0,1,.536.93H17.3a1.923,1.923,0,0,1,.539-.933l-5.776-10Zm.881,14.5,4.391-2.537c-.013-.042-.024-.084-.034-.127H5.754l-.019.074,4.415,2.549a1.916,1.916,0,0,1,2.791.04Z" transform="translate(-1.98)" fill="#1f1f1f"/>
                                                </svg>
                                        </div>
                                        <span className="title">Overview</span>
                                    </div>
                                </Link> 
                            </li>
                            <li className="report-item">
                                <div className="report-link">
                                    <div className="left">
                                        <div className="report-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="19.545" height="21.717" viewBox="0 0 19.545 21.717">
                                                    <path id="Icon_material-grapheq" data-name="Icon material-grapheq" d="M8.843,20.373h2.172V7.343H8.843Zm4.343,4.343h2.172V3H13.187ZM4.5,16.03H6.672V11.687H4.5Zm13.03,4.343H19.7V7.343H17.53Zm4.343-8.687V16.03h2.172V11.687Z" transform="translate(-4.5 -3)" fill="#1f1f1f"/>
                                                </svg>
                                        </div>
                                        <span className="title">Behavior</span>
                                    </div>
                                    <div className="right">
                                        <div className="arrow-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14.793" height="8.397" viewBox="0 0 14.793 8.397">
                                                    <path id="Icon_feather-chevron-down" data-name="Icon feather-chevron-down" d="M9,13.5l5.982,5.982L20.965,13.5" transform="translate(-7.586 -12.086)" fill="none" stroke="#CED5E7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                                </svg>
                                        </div>
                                    </div>
                                </div>
                                <ul className="report-sub">
                                    <li>
                                        <Link to="#" className="report-sub-link">
                                            <span className="title">Behavior</span>
                                        </Link> 
                                    </li>
                                    <li>
                                        <Link to="#" className="report-sub-link">
                                            <span className="title">Behavior</span>
                                        </Link> 
                                    </li>
                                </ul>
                            </li>
                            <li className="report-item">
                                <div className="report-link">
                                    <div className="left">
                                        <div className="report-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17.662" height="19.546" viewBox="0 0 17.662 19.546">
                                                    <path id="Icon_material-share" data-name="Icon material-share" d="M19.218,16.816a2.857,2.857,0,0,0-1.923.756l-7-4.072a2.715,2.715,0,0,0,0-1.374l6.918-4.033a2.937,2.937,0,1,0-.942-2.149,3.212,3.212,0,0,0,.088.687L9.445,10.663a2.944,2.944,0,1,0,0,4.3l6.986,4.082a2.768,2.768,0,0,0-.078.638,2.865,2.865,0,1,0,2.865-2.865Z" transform="translate(-4.5 -3)" fill="#1f1f1f"/>
                                                </svg>
                                        </div>
                                        <span className="title">Acquisitions</span>
                                    </div>
                                    <div className="right">
                                        <div className="arrow-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14.793" height="8.397" viewBox="0 0 14.793 8.397">
                                                    <path id="Icon_feather-chevron-down" data-name="Icon feather-chevron-down" d="M9,13.5l5.982,5.982L20.965,13.5" transform="translate(-7.586 -12.086)" fill="none" stroke="#CED5E7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                                </svg>
                                        </div>
                                    </div>
                                </div>
                                <ul className="report-sub">
                                    <li>
                                        <Link to="#" className="report-sub-link">
                                            <span className="title">Acquisitions</span>
                                        </Link> 
                                    </li>
                                    <li>
                                        <Link to="#" className="report-sub-link">
                                            <span className="title">Acquisitions</span>
                                        </Link> 
                                    </li>
                                </ul>
                            </li>
                            <li className="report-item">
                                <div className="report-link">
                                    <div className="left">
                                        <div className="report-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="19.091" height="19.091" viewBox="0 0 19.091 19.091">
                                                    <path id="Icon_metro-earth2" data-name="Icon metro-earth2" d="M12.116,21.019a9.546,9.546,0,1,1,9.546-9.546A9.546,9.546,0,0,1,12.116,21.019Zm7.737-10.346a.06.06,0,0,0,.03-.042.291.291,0,0,0,.092.168c0,.006,0,0,0,.013s.008,0,.013,0a.289.289,0,0,0,.182.068.294.294,0,0,0,.249-.144.143.143,0,0,1,.013.014c0-.01,0-.019,0-.029a.289.289,0,0,0,.039-.14.3.3,0,0,0-.3-.3.3.3,0,0,0-.246.138s0-.009-.007-.007a.27.27,0,0,0-.046-.143v.309A.312.312,0,0,1,19.853,10.674ZM6.146,10.584c0-.09-.205-.243-.258-.243,0-.016-.084-.2-.115-.2,0-.062-.218-.341-.252-.219-.023.079.166.185.166.276.035,0,.183.28.212.329.323.546-.242.173-.242-.058a.761.761,0,0,1-.186-.386,1.233,1.233,0,0,1-.158-.3c0-.174-.1-.258-.287-.258-.009-.017-.169-.243-.172-.243a.632.632,0,0,0-.2-.329,2.313,2.313,0,0,1-.042-.486,1.646,1.646,0,0,0-.063-.511,8.326,8.326,0,0,0,4.7,11.353c0-.3.026-.65.093-.65,0-.044.038-.229.072-.229a3.615,3.615,0,0,0,0-.386c-.042-.085.056-.194.086-.329.165-.083.048-.915.173-.915A5.667,5.667,0,0,0,9.7,15.759c.032,0-.188-.233-.186-.229-.211,0-.358-.338-.358-.486a.9.9,0,0,1-.072-.243c.048,0-.3-.511-.3-.5-.185-.1.01-.246.029-.414-.16-.053,0-.486.072-.486a.135.135,0,0,1,.087-.114c.036.143.2-.071.072-.071,0-.094-.011-.3,0-.343,0-.146-.129-.431-.229-.129-.107-.053-.378-.044-.4-.214.017-.084-.155-.256-.215-.286.056-.147-.291-.343-.416-.343,0-.032-.066-.017-.086-.057-.128,0-.157-.172-.3-.172-.166,0-.334-.114-.487-.114-.051-.1-.289-.062-.344-.172-.125,0-.174-.236-.177-.323-.005-.107-.091-.478-.24-.478ZM18.23,5.8a.03.03,0,0,1,0,.013c.009,0,.02.01.03.014Zm.18.2a.193.193,0,0,1,.032.1c.021,0,.031-.011.048-.015C18.464,6.051,18.436,6.024,18.41,5.994Zm.518,2.718c.01-.258-.215-.215-.286-.358-.074,0-.1-.057-.2-.057a.123.123,0,0,0-.154.047c-.153.058-.061-.075-.176-.075.005-.147-.053-.188-.215-.172-.093.21-.236.336-.215.572.069.016.057.031.043.1.091,0,.645-.029.645-.086.019,0,.115.2.115.029.077,0,.118.181.3.128C18.786,8.877,19.093,8.712,18.928,8.712Zm.029,3.044c.011-.052-.026-.076-.057-.129.082,0-.258-.631-.258-.729-.052-.026-.118-.206-.13-.271a.685.685,0,0,1-.172-.286,1.036,1.036,0,0,1-.272-.357c.1.011.258.032.258-.1-.069,0-.079-.085-.014-.085-.021-.088.047-.151.061-.22a1.618,1.618,0,0,0,.053-.31.473.473,0,0,0-.2.043c0,.058-.175-.014-.2-.014-.038-.075-.31.1-.387-.057-.123-.112-.09-.2-.13-.355-.02-.08-.129-.085-.2-.1-.187-.036-.052.223-.062.282.115,0-.072.142-.072.214-.193-.042-.129-.257-.243-.314-.034-.057-.007-.1-.087-.1,0-.076.041-.215-.043-.243,0-.037-.162-.052-.186-.1-.1,0-.341-.388-.415-.257-.046.084.039.1.056.172.149-.029.134.245.316.214a.5.5,0,0,0,.014.115c.134-.032.119.1.186.1-.049.065-.2-.1-.162.038.024.082.011.153-.1.233,0-.089-.007-.329-.1-.329-.063-.126-.251-.1-.331-.214-.064,0-.089-.2-.2-.214a.224.224,0,0,1-.129.057c-.06.121-.4.013-.4.029s-.191.455-.2.514c-.021.128-.124.131-.155.252-.016.061-.39.032-.39.077a.381.381,0,0,1-.3-.343,2.691,2.691,0,0,1,.058-.515c.033.009.039.02.058.057.1-.037.33.024.33-.086q.144,0,.086.115c.089.017.244.039.244-.086-.053,0-.058,0-.058-.057.172-.178-.129-.339-.129-.428-.061-.02-.185-.152-.1-.1s.347.126.24-.055a.02.02,0,0,0,.014-.014c.03.021.159.153.159.029.035,0,.171-.086.057-.086.011-.064.008-.118.014-.158.182.1.081-.067.172-.128,0,.119.1-.057.158-.057.071-.106.233-.024.273-.143-.088-.029-.072-.248-.072-.328.106.017.223-.143.239-.033.006.042.011.159.033.175.157.082.115-.047.115-.128-.053,0-.122-.184-.129-.272-.043.006-.112.024-.129.057-.156,0-.263-.057-.387-.057a2.217,2.217,0,0,1-.143-.186c-.087-.15.087-.106.115-.113,0-.142.591-.117.617-.344-.194,0,.2-.329.2-.328.132-.113.2-.21.366-.223.069,0,.839-.217.839-.121l.24.006A8.316,8.316,0,0,0,6.582,5.23a.211.211,0,0,1,.023.079c.078-.005.19-.055.215.044a.49.49,0,0,1-.115-.015c.027.221-.1.086-.2.086a.289.289,0,0,0-.095-.037c-.032.03-.065.058-.1.088,0,.01,0,.01,0,.021.033,0,.016.052.112.084a2.126,2.126,0,0,0,.348.077,1.107,1.107,0,0,0,.229-.017c0-.012.2-.1.058-.1.019-.079-.016-.1-.1-.1.007-.084.206-.029.287-.029.062-.1,0-.092.057-.187.066-.116.144-.016.187-.127a.2.2,0,0,1,.144.141c.052.043.316.432.316.157.094.032.141.208.143.3.171-.025.186-.153.186-.286.039,0-.014-.064-.014-.086.064-.023.144.061.144-.028.027,0,.029.027.029.057.089.017.146-.01.2.009.038.013.018.208,0,.277-.021.087-.188.088-.188.129-.189.141.223.214.287.3a.793.793,0,0,1-.186-.028c-.093,0-.319.1-.4.028.116,0,.155-.139.172-.271a.205.205,0,0,0-.263.132c-.05.175-.166-.007-.225.111-.023.007-.23.1-.23.071-.233.033-.172.23-.172.443.092.055.28.214.272.3.209.037.285.059.473.086A.228.228,0,0,0,8.3,7.01c0,.123.112.1.215.1,0-.157.183.131.2.186-.025,0,.043.16.057.215-.029-.01-.038,0-.029.029.091.033.234.024.258-.072-.087,0-.058-.1-.058-.158a.108.108,0,0,1,.014-.2c0,.081.3-.051.129-.114a.322.322,0,0,0,0-.311c-.042-.05-.1,0-.116-.075.113-.028.03-.243.029-.343.036-.014.129.023.129,0,.11,0,.294.14.359-.029.184.084.038.164.23.1A.828.828,0,0,0,9.96,6.6c0,.01-.005.072.042.072,0,.046-.029-.026-.029.057.027,0,.172.029.172-.028.092,0,.158-.113.158-.2.058-.038.159.314.229.314.051.08.215.2.215.271.035.035.071.026.071.129.044,0,.129-.171.129-.014a.271.271,0,0,1,.172.157c-.1,0-.005.1-.058.1,0,.1-.221.02-.271.014-.069.307-.483.087-.733.166a.854.854,0,0,0-.4.477c.16,0,.23-.138.373-.186.116,0,.139-.07.244-.1,0,.029.029.014.029.043-.2,0-.08.132-.02.228a.246.246,0,0,0,.126.107.568.568,0,0,0-.048.108h0c-.039.013-.115.041-.129.072-.231.026-.117.01-.1-.045.008.02.091,0,.088,0-.014-.069-.035-.06-.014-.1-.125,0-.186.057-.287.057-.017.034-.1.115-.143.115a.679.679,0,0,1-.172.3c0-.023-.2.128-.186.128-.045.073-.095.071-.115.186a.963.963,0,0,0-.072.229c-.089.059-.122.3-.273.3-.092.184-.258.159-.258.4a1.259,1.259,0,0,1,.095.392c.021.1.055.206-.08.208-.01-.015-.1-.158-.087-.158a.909.909,0,0,0-.115-.307c-.057-.079-.162.013-.244-.022-.035-.07-.273-.086-.358-.086.014.053.053.07.057.129a.325.325,0,0,1-.184.051c-.125-.017-.11-.115-.247-.1a.414.414,0,0,0-.373.422,1.263,1.263,0,0,0,0,.429c0,.121.1.209.1.3.1,0,.206.214.3.214.011.076-.048.088.115.087,0-.008.088-.055.1-.115-.112-.027,0-.172.072-.2,0,.1.143-.034.143-.043l.158-.057c0-.116.108.011.029.057-.078,0-.072.129-.115.129-.018.092-.055.172-.076.261-.027.11.062.122.033.225a1.793,1.793,0,0,0,.344,0,.1.1,0,0,0-.014-.057c.166,0,.014.314.115.314,0,.119.057.211.057.286a.19.19,0,0,1,.1.214c.1.013.3.037.3-.086.145,0,.155.1.144.2.289,0,.108-.286.229-.286.011-.047.031-.055.059-.024.059.032.1-.059.151-.088a.389.389,0,0,1,.077-.041c.041.024.044.017.062.045a.43.43,0,0,0,.226-.091c.1.013.07.234.263.248a.687.687,0,0,0,.324-.019c.017-.011.078.039.085.06.064,0,.06.056.087.055a.023.023,0,0,0,.029.014c.008.024.06.032.087.1,0,.062.129.073.129.114.092.047-.032.059.11.1a1.03,1.03,0,0,0,.234.07c.027-.1.114.014.158.014.023.047.035.011.057.057.133.111.045.068.1.186.064.042.084.187.1.271-.051,0-.015.2-.015.215-.062,0,.159.118.159-.029.091.015.15.114.215.114-.038.087.1.152.1.015.136.014.1.217.087.286.1,0,.13-.056.216-.067a.583.583,0,0,1,.314-.1.6.6,0,0,1,.6.6.589.589,0,0,1-.506.578,1.044,1.044,0,0,1-.075.081c0,.029-.007.314-.015.314,0,.057-.044.372-.086.372,0,.162-.106.191-.143.343-.087.064-.323.172-.359.243-.067,0-.118.057-.186.057-.01.02-.156.158-.129.158-.011.1.008.34-.047.407-.037.044-.09.039-.067.109-.081,0,0,.057-.122.057a.284.284,0,0,0-.227.211.318.318,0,0,1-.138.276c0,.041-.186.053-.186.158.017,0,0,.194,0,.214a.339.339,0,0,0-.215.1c-.187,0-.165.019-.286.1,0,.025-.017.114-.043.114,0,.145-.1.013-.187.087.033,0,.075.143.057.143,0,.126-.078.137-.158.229-.038.025-.073.129-.1.129,0,.085-.042.162-.042.243.018,0,0,.036.014.07.04-.011.041-.057.057-.057,0-.072.114.042.043.042-.059.089-.123.091-.158.215-.036,0-.067.035-.093.075a8.3,8.3,0,0,0,9.21-3.51,2.289,2.289,0,0,1,.065-.483c.058.043.1.123.143,0-.1-.02-.078-.056-.043-.143a.362.362,0,0,0,.183.049c.02-.037.035-.076.055-.113-.058-.045.022-.163.05-.106.015-.029.028-.058.042-.087-.007,0,0,0-.014,0,0-.052.01-.045.044-.072a.052.052,0,0,0,0,.01,8.309,8.309,0,0,0,.822-3.594c0-.042-.006-.083-.007-.125-.016.058-.045.122-.086.136,0,.038-.427.223-.4.3-.075,0-.339.075-.387.171a.666.666,0,0,0-.287.115C19.035,12.071,19.086,11.757,18.958,11.757Zm1.213-3.266h-.317s0,0-.007-.008-.084-.152-.057-.186a.424.424,0,0,1,.051,0c-.027-.066-.056-.13-.085-.2a.412.412,0,0,1-.21.106c0,.024-.127.271,0,.271a.043.043,0,0,0,0,.013.3.3,0,0,0,.025.592h.118c.007.054.036.1.141.125.033.138.279.187.316.042-.1,0-.07-.1-.061-.167h.084a.3.3,0,1,0,0-.6ZM19.3,12.37c.021,0,.159,0,.159-.027a1.458,1.458,0,0,0,.416-.058c0,.185-.156.288-.129.472-.1,0-.058.106-.058.143-.067.041-.077.116-.158.158,0,.083-.186.22-.241.291s-.249.217-.273.318c.007-.024-.341.362-.26.362,0,.072-.1.643.029.643,0,.05.108.529.042.529,0,.154-.1.248-.1.371-.049.033-.119.052-.143.1-.088,0-.13.186-.172.186,0,.2-.058.346-.058.572.016,0-.115.322-.115.342-.106.071-.373.326-.373.458,0,0-.186.261-.215.3a1.847,1.847,0,0,0-.488.115c-.092,0-.329.072-.387-.014,0-.091-.05-.206-.057-.329-.044,0-.051-.186-.1-.186a4.929,4.929,0,0,1-.23-.586.96.96,0,0,0-.057-.243c0-.2-.144-.361-.144-.543-.042,0-.13-.4-.086-.4a4.482,4.482,0,0,1,.1-.58,1.381,1.381,0,0,0-.061-.592c-.024,0-.107-.137-.115-.171a.435.435,0,0,1-.158-.371.967.967,0,0,0,.087-.515.641.641,0,0,0-.359-.043c-.092-.186-.714-.071-.89-.071,0,.1-.433-.02-.473-.1-.106,0-.315-.224-.315-.329a1.177,1.177,0,0,1-.3-.586c-.1-.05-.07-.243-.015-.243a1.019,1.019,0,0,0-.058-.3c-.017-.06.058-.125.058-.2a.862.862,0,0,1,.116-.5,1.949,1.949,0,0,0,.113-.213c.06-.15.078-.007.158-.141.077-.038.122-.166.2-.229.035-.046.036-.065,0-.1a.861.861,0,0,0,.1-.271c.112-.156.033-.085.143-.072.041-.044.108-.158.172-.158a.181.181,0,0,1,.158-.086c0,.086.234-.028.258-.028a.66.66,0,0,1,.359-.172c0-.1.508.027.588.014V9.241c.109.026.307.461.286.558a1.118,1.118,0,0,1,.215,0c0,.092.174.115.254.119.11.005.434-.011.434-.162a.134.134,0,0,1,.144.157c.1.011.671.022.631.143.084,0,.106.144.186.144-.016.1.1.357.186.357a.45.45,0,0,0,.129.3,1.046,1.046,0,0,0,.3.458c-.054.1.082.185.115.286-.008,0,.029.15.071.172,0,.1.214.515.331.515.008.05-.11.073.043.084Zm-3.1-3.2c.022-.085.072-.019.119,0,.11.036.072,0,.154-.039C16.477,9.359,16.343,9.183,16.2,9.169Zm-.3-.429c.058,0,.075.263-.086.214,0-.065-.041-.186.044-.186.024.1.042.06.042-.029Zm-.071-.171c.066.029.1.019.086-.029.087.029-.011.091-.029.158C15.844,8.654,15.858,8.638,15.831,8.569ZM14.3,7.3c-.141-.036.145-.078.158-.114a.067.067,0,0,1-.062-.091c.021-.05.057.059.106.035.058-.006.172-.092.113.075s-.114.294-.329.3c-.077-.078,0-.118.014-.2Zm.531-.586c.116,0,.014.086-.011.086.02.008,0,.077,0,.1.107,0,.109-.067.186-.086-.016.1-.123.115-.018.2.055.044.112.095.09.161.137,0,.157.131.129.286.076,0,.072,0,.072-.072.073.02.068.087,0,.087-.068.134-.246.128-.373.128,0-.1-.021-.11-.117-.081-.131.04-.029-.1-.026-.176.014,0,.3.013.129-.043-.009-.154-.044-.2-.186-.2,0-.105-.037-.1-.054-.212-.024-.17.133.012.184-.174Zm-.044.929c0,.035-.072.063-.086.014.014,0,.019,0,.014-.014ZM13.608,6.1h-.6a.3.3,0,1,1,0-.6h.6a.3.3,0,0,1,0,.6Zm-3.476,5.28c.033,0,.072.013.072.043C10.161,11.427,10.1,11.468,10.132,11.384Zm-.544.029c-.024.045-.217.038-.244-.015.072,0,.127.029.2,0,0-.039-.033-.071-.057-.114.078,0,.166.06.273.057,0-.066-.029.014,0-.072a.335.335,0,0,1,.158.157,2.128,2.128,0,0,0-.329-.014Zm-.631-.343a.4.4,0,0,1-.258-.129c.071,0,.141.032.186-.043.182.018.2.144.344.144.027.048.184.159.033.174a.331.331,0,0,1-.3-.146Zm.115.4c-.053,0-.141.023-.1-.087C9.041,11.394,9.075,11.423,9.071,11.471Zm.1-.014-.086.014C9.094,11.4,9.157,11.331,9.172,11.456Zm.53.628c-.011.04-.01.042-.057.042,0-.018.009-.037.014-.057ZM8.411,10.9l.043.014c.018.071.057.036.1.014C8.555,11.01,8.363,11.034,8.411,10.9Z" transform="translate(-2.571 -1.928)" fill="#1f1f1f"/>
                                                </svg>
                                        </div>
                                        <span className="title">Geographic</span>
                                    </div>
                                    <div className="right">
                                        <div className="arrow-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14.793" height="8.397" viewBox="0 0 14.793 8.397">
                                                    <path id="Icon_feather-chevron-down" data-name="Icon feather-chevron-down" d="M9,13.5l5.982,5.982L20.965,13.5" transform="translate(-7.586 -12.086)" fill="none" stroke="#CED5E7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                                </svg>
                                        </div>
                                    </div>
                                </div>
                                <ul className="report-sub">
                                    <li>
                                        <Link to="#" className="report-sub-link">
                                            <span className="title">Geographic</span>
                                        </Link> 
                                    </li>
                                    <li>
                                        <Link to="#" className="report-sub-link">
                                            <span className="title">Geographic</span>
                                        </Link> 
                                    </li>
                                </ul>
                            </li>
                            <li className="report-item">
                                <div className="report-link">
                                    <div className="left">
                                        <div className="report-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18.668" height="12.445" viewBox="0 0 18.668 12.445">
                                                    <path id="responsive" d="M3.111,1.556h14V0h-14A1.556,1.556,0,0,0,1.556,1.556v8.556H0v2.333H10.89V10.112H3.111ZM17.89,3.111H13.223a.778.778,0,0,0-.778.778v7.778a.778.778,0,0,0,.778.778H17.89a.778.778,0,0,0,.778-.778V3.889A.778.778,0,0,0,17.89,3.111Zm-.778,7H14V4.667h3.111Z" fill="#1f1f1f"/>
                                                </svg>
                                        </div>
                                        <span className="title">Technology</span>
                                    </div>
                                    <div className="right">
                                        <div className="arrow-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14.793" height="8.397" viewBox="0 0 14.793 8.397">
                                                    <path id="Icon_feather-chevron-down" data-name="Icon feather-chevron-down" d="M9,13.5l5.982,5.982L20.965,13.5" transform="translate(-7.586 -12.086)" fill="none" stroke="#CED5E7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                                </svg>
                                        </div>
                                    </div>
                                </div>
                                <ul className="report-sub">
                                    <li>
                                        <Link to="#" className="report-sub-link">
                                            <span className="title">Technology</span>
                                        </Link> 
                                    </li>
                                    <li>
                                        <Link to="#" className="report-sub-link">
                                            <span className="title">Technology</span>
                                        </Link> 
                                    </li>
                                </ul>
                            </li>
                            <li className="report-item">
                                <div className="report-link">
                                    <div className="left">
                                        <div className="report-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                                    <path id="events" d="M9,5a4,4,0,1,0,4,4A4,4,0,0,0,9,5ZM2,12H0v4a2,2,0,0,0,2,2H6V16H2ZM2,2H6V0H2A2,2,0,0,0,0,2V6H2ZM16,0H12V2h4V6h2V2A2,2,0,0,0,16,0Zm0,16H12v2h4a2,2,0,0,0,2-2V12H16Z" fill="#1f1f1f"/>
                                                </svg>
                                        </div>
                                        <span className="title">Events</span>
                                    </div>
                                    <div className="right">
                                        <div className="arrow-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14.793" height="8.397" viewBox="0 0 14.793 8.397">
                                                    <path id="Icon_feather-chevron-down" data-name="Icon feather-chevron-down" d="M9,13.5l5.982,5.982L20.965,13.5" transform="translate(-7.586 -12.086)" fill="none" stroke="#CED5E7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                                </svg>
                                        </div>
                                    </div>
                                </div>
                                <ul className="report-sub">
                                    <li>
                                        <Link to="#" className="report-sub-link">
                                            <span className="title">Events</span>
                                        </Link> 
                                    </li>
                                    <li>
                                        <Link to="#" className="report-sub-link">
                                            <span className="title">Events</span>
                                        </Link> 
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="content-report">
                        {/* <!-- content-top --> */}
                        <div className="content-top">
                            <div className="content-top-left">
                                <ul className="breadcrumb">
                                    <li>
                                        <Link to="#" className="breadcrumb-item">Home</Link> 
                                        <Link to="#" className="breadcrumb-item active">Raporlar</Link> 
                                    </li>
                                </ul>
                                <div className="content-top-left-title">
                                    Overview
                                </div>
                            </div>
                            <div className="content-top-right">
                                <form id="site-form">
                                    <div className="form-group">
                                        <input type="date" className="form-control" id="startdateId" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* <!-- end #content-top --> */}
                        <div className="report-detail">
                            <div className="box">
                                <br/><br/><br/><br/> <br/><br/><br/><br/> <br/><br/><br/><br/> <br/><br/><br/><br/> Raporlar Buraya Gelecek
                                <br/><br/><br/><br/> <br/><br/><br/><br/> <br/><br/><br/><br/> <br/><br/><br/><br/>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </main>
        )
    }
}