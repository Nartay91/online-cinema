import React, { useState } from "react";
import "./SectionTwo.css";
import news2 from "../assets/news_2.png";
import tere from "../assets/tere.svg";
import pen from "../assets/pen.svg";
import star from "../assets/star.svg";
import arrowUp from "../assets/up-c.svg";
import arrowDown from "../assets/down-c.svg";
import post from "../assets/post.svg";
import phone from "../assets/phone.svg";
import blue from "../assets/arrow_blue.svg";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import logo7 from "../assets/logo7.png";
import logo8 from "../assets/logo8.png";


function SectionTwo() {

    // Initialize a state that holds visibility for each question
    const [visibleStates, setVisibleStates] = useState([false, false, false, false, false]);

    const toggleText = (index) => {
        // Toggle visibility for the clicked question
        const updatedStates = [...visibleStates];
        updatedStates[index] = !updatedStates[index];
        setVisibleStates(updatedStates);
    };

    return (
        <div className="review">
            <div className="all_review">
                <div className="review_header">
                    <h2 className="main__header"> What People Think About Us</h2>
                    <p className="main__describe">Words of praise from others about our presence.<br />
                        You can read and also write about us here.
                    </p>
                </div>
                <div className="grid_review">
                    <div className="grid_post">
                        <img src={tere} alt="" />
                        <p>Ok so credit where its due having raised the issue with  they quickly got back to me and refunded the difference. They also managed to get me the tickets so my daughter got to see Taylor Swift
                            Date of experience: 22 June 2024</p>
                        <div className="news_writer1">
                            <img src={news2} alt="" />
                            <div className="writer_describe">
                                <h5>Marian Ed</h5>
                                <p>Birmingham, UK</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid_post">
                        <img src={tere} alt="" />
                        <p>Ok so credit where its due having raised the issue with  they quickly got back to me and refunded the difference. They also managed to get me the tickets so my daughter got to see Taylor Swift
                            Date of experience: 22 June 2024</p>
                        <div className="news_writer1">
                            <img src={news2} alt="" />
                            <div className="writer_describe">
                                <h5>Marian Ed</h5>
                                <p>Birmingham, UK</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid_post">
                        <img src={tere} alt="" />
                        <p>Ok so credit where its due having raised the issue with  they quickly got back to me and refunded the difference. They also managed to get me the tickets so my daughter got to see Taylor Swift
                            Date of experience: 22 June 2024</p>
                        <div className="news_writer1">
                            <img src={news2} alt="" />
                            <div className="writer_describe">
                                <h5>Marian Ed</h5>
                                <p>Birmingham, UK</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid_post">
                        <img src={tere} alt="" />
                        <p>Ok so credit where its due having raised the issue with  they quickly got back to me and refunded the difference. They also managed to get me the tickets so my daughter got to see Taylor Swift
                            Date of experience: 22 June 2024</p>
                        <div className="news_writer1">
                            <img src={news2} alt="" />
                            <div className="writer_describe">
                                <h5>Marian Ed</h5>
                                <p>Birmingham, UK</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid_post">
                        <img src={tere} alt="" />
                        <p>Ok so credit where its due having raised the issue with  they quickly got back to me and refunded the difference. They also managed to get me the tickets so my daughter got to see Taylor Swift
                            Date of experience: 22 June 2024</p>
                        <div className="news_writer1">
                            <img src={news2} alt="" />
                            <div className="writer_describe">
                                <h5>Marian Ed</h5>
                                <p>Birmingham, UK</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid_post">
                        <img src={tere} alt="" />
                        <p>Ok so credit where its due having raised the issue with  they quickly got back to me and refunded the difference. They also managed to get me the tickets so my daughter got to see Taylor Swift
                            Date of experience: 22 June 2024</p>
                        <div className="news_writer1">
                            <img src={news2} alt="" />
                            <div className="writer_describe">
                                <h5>Marian Ed</h5>
                                <p>Birmingham, UK</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="comment_btn">
                    <button className="star_btn">
                        <img src={star} alt="" />
                        Read All Review
                    </button>
                    <button className="leave_btn">
                        <img src={pen} alt="" />
                        Leave a comment
                    </button>
                </div>
            </div>
            <div className="question">
                <div className="left_side">
                    <h2 className="left_side_header">Frequent ly Asked Questions</h2>
                    <div className="email__1">
                        <img className="phone_post" src={post} alt="" />
                        <p className="not_margin">helpcenter@ticketer.com</p>
                    </div>
                    <div className="email__1">
                        <img className="phone_post" src={phone} alt="" />
                        <p className="not_margin">(010) 123-4567</p>
                    </div>
                    <h3 className="sill_quest">Still Have Questions?</h3>
                    <p>Can’t find the answer you’re looking for? Please contact our help center.</p>
                    <button className="contact_btn">Contact Us</button>
                </div>
                <div className="right_side">
                    <div className="question_ask">
                        <div className="quest">
                            <span className="quest__">I haven’t received any order confirmation yet. Did my booking go through?</span>
                            <button className="up_down" onClick={() => toggleText(0)}>
                                <img
                                    src={visibleStates[0] ? arrowUp : arrowDown}
                                    alt="Toggle arrow"
                                />
                            </button>
                        </div>
                        {visibleStates[0] && (
                            <p>
                                I haven’t received any order confirmation yet. Did my booking go through?
                                Lorem ipsum dolor sit amet consectetur. Eleifend nunc habi loremut egestas.
                                Convallis praesent egestas suscipit hendrerit sem eualiquet feugiat. Amet
                                vulputate rhoncus falectus duis in ultricies pharetra.
                            </p>
                        )}
                    </div>

                    <div className="question_ask">
                        <div className="quest">
                            <span>I am not able/do not want to attend an already booked event for personal reasons. Is there a possibility to cancel/rebook the tickets?</span>
                            <button className="up_down" onClick={() => toggleText(1)}>
                                <img
                                    src={visibleStates[1] ? arrowUp : arrowDown}
                                    alt="Toggle arrow"
                                />
                            </button>
                        </div>
                        {visibleStates[1] && (
                            <p>
                                I am not able/do not want to attend an already booked event for personal reasons. Is there a possibility to cancel/rebook the tickets?
                                Lorem ipsum dolor sit amet consectetur. Eleifend nunc habi loremut egestas.
                                Convallis praesent egestas suscipit hendrerit sem eualiquet feugiat. Amet
                                vulputate rhoncus falectus duis in ultricies pharetra.
                            </p>
                        )}
                    </div>

                    <div className="question_ask">
                        <div className="quest">
                            <span>I lost my e-Ticket. What can I do?</span>
                            <button className="up_down" onClick={() => toggleText(2)}>
                                <img
                                    src={visibleStates[2] ? arrowUp : arrowDown}
                                    alt="Toggle arrow"
                                />
                            </button>
                        </div>
                        {visibleStates[2] && (
                            <p>
                                I lost my e-Ticket. What can I do?
                                Lorem ipsum dolor sit amet consectetur. Eleifend nunc habi loremut egestas.
                                Convallis praesent egestas suscipit hendrerit sem eualiquet feugiat. Amet
                                vulputate rhoncus falectus duis in ultricies pharetra.
                            </p>
                        )}
                    </div>

                    <div className="question_ask">
                        <div className="quest">
                            <span>An event was canceled/postponed/relocated, and I am not able/do not want to attend the event. Is it possible to cancel my tickets?</span>
                            <button className="up_down" onClick={() => toggleText(3)}>
                                <img
                                    src={visibleStates[3] ? arrowUp : arrowDown}
                                    alt="Toggle arrow"
                                />
                            </button>
                        </div>
                        {visibleStates[3] && (
                            <p>
                                An event was canceled/postponed/relocated, and I am not able/do not want to attend the event. Is it possible to cancel my tickets?
                                Lorem ipsum dolor sit amet consectetur. Eleifend nunc habi loremut egestas.
                                Convallis praesent egestas suscipit hendrerit sem eualiquet feugiat. Amet
                                vulputate rhoncus falectus duis in ultricies pharetra.
                            </p>
                        )}
                    </div>

                    <div className="question_ask">
                        <div className="quest">
                            <span>I’ve already ordered tickets and now want to add another one. Is it possible yet to sit together?</span>
                            <button className="up_down" onClick={() => toggleText(4)}>
                                <img
                                    src={visibleStates[4] ? arrowUp : arrowDown}
                                    alt="Toggle arrow"
                                />
                            </button>
                        </div>
                        {visibleStates[4] && (
                            <p>
                                I’ve already ordered tickets and now want to add another one. Is it possible yet to sit together?
                                Lorem ipsum dolor sit amet consectetur. Eleifend nunc habi loremut egestas.
                                Convallis praesent egestas suscipit hendrerit sem eualiquet feugiat. Amet
                                vulputate rhoncus falectus duis in ultricies pharetra.
                            </p>
                        )}
                    </div>
                    <button className="read_btn">Read More
                        <img src={blue} alt="" />
                    </button>
                </div>
            </div>
            <div className="logo_comp">
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
                <img src={logo4} alt="" />
                <img src={logo5} alt="" />
                <img src={logo6} alt="" />
                <img src={logo7} alt="" />
                <img src={logo8} alt="" />
            </div>
        </div>
    )
}

export default SectionTwo;