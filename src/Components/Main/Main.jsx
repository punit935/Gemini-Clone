import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import { UserButton, useUser } from "@clerk/clerk-react";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const sendInfo = (data) => {
    setInput(data);
  };
  const handleCardClick = (e) => {
    const cardText = e.currentTarget.querySelector("p").innerText;
    sendInfo(cardText);
  };

  const { user } = useUser();
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <UserButton />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello {user ? user.firstName : "Guest"} ,</span>
              </p>
              <p>How can I help you today ?</p>
            </div>
            <div className="cards">
              <div onClick={handleCardClick} className="card">
                <p>Suggest beautiful places to see in Delhi ?</p>
                <img src={assets.compass_icon}></img>
              </div>
              <div onClick={handleCardClick} className="card">
                <p>Briefly summarize this concept : Dynamic Programming</p>
                <img src={assets.bulb_icon}></img>
              </div>
              <div onClick={handleCardClick} className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon}></img>
              </div>
              <div onClick={handleCardClick} className="card">
                <p>What are the ways to improve Coding skills</p>
                <img src={assets.code_icon}></img>
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.girl}></img>
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon}></img>
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Enter prompt here ..."
            ></input>
            <div>
              <img src={assets.gallery_icon}></img>
              <img src={assets.mic_icon}></img>
              {input ? (
                <img onClick={() => onSent(input)} src={assets.send_icon}></img>
              ) : null}
            </div>
          </div>

          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
