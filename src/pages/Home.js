import React, { Link } from "react";
const Home = () => {
  return (
    <>
      <div className="logo" style={{ textAlign: "center" }}>
        <img src="img/image.png" alt="MyServer logo" />
      </div>
      <div className="items">
        <a href="https://discord.gg/gh9SFhAs4V" className="item forums">
          <div>
            <img
              src="img/forums.png"
              alt="Minecraft forums icon"
              className="img"
            />
            <p className="subtitle">chat on our</p>
            <p className="title">Discord server</p>
          </div>
        </a>
        <a href="https://shop.velocitycraft.net" className="item store">
          <div>
            <img
              src="img/store.png"
              alt="Minecraft store icon"
              className="img"
            />
            <p className="subtitle">donate on our</p>
            <p className="title">Store</p>
          </div>
        </a>
        <Link href="/vote" className="item vote">
          <div>
            <img
              src="img/vote.png"
              alt="Minecraft voting icon"
              className="img"
            />
            <p className="subtitle">support us by</p>
            <p className="title">Voting</p>
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
    </>
  );
};

export default Home;
