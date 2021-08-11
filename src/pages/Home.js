import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="logo" style={{ textAlign: "center" }}>
        <img src="img/image.png" alt="VelocityCraft Logo" />
      </div>
      <div className="items">
        <a href="https://discord.gg/gh9SFhAs4V" className="item forums">
          <div>
            <img
              src="img/forums.png"
              alt="Minecraft forums icon"
              className="img"
            />
            <p className="subtitle" style={{ textAlign: "center" }}>
              chat on our
            </p>
            <p className="title" style={{ textAlign: "center" }}>
              Discord Server
            </p>
          </div>
        </a>
        <a href="https://shop.velocitycraft.net" className="item store">
          <div>
            <img
              src="img/store.png"
              alt="Minecraft store icon"
              className="img"
            />
            <p className="subtitle" style={{ textAlign: "center" }}>
              donate on our
            </p>
            <p className="title" style={{ textAlign: "center" }}>
              Shop
            </p>
          </div>
        </a>
        <Link to="/vote" className="item vote">
          <div>
            <img
              src="img/vote.png"
              alt="Minecraft voting icon"
              className="img"
            />
            <p className="subtitle" style={{ textAlign: "center" }}>
              support us by
            </p>
            <p className="title" style={{ textAlign: "center" }}>
              Voting
            </p>
          </div>
        </Link>
      </div>
      <div style={{ textAlign: "center" }}>
        <div className="playercount">
          <p>
            Join{" "}
            <span
              className="sip"
              data-ip="play.velocitycraft.net"
              data-port={25565}
            ></span>{" "}
            other players on <span className="ip">play.velocitycraft.net</span>
          </p>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <div className="playercount">
          <Link to="/more">
            <p style={{ color: "white" }}>Learn more about the server</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
