import React from "react";
import { Link } from "react-router-dom";
import "./Vote.css";
const Vote = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "white", fontSize: "55px" }}>Vote Links</h1>
        <div>
          <ul style={{ color: "#69a2ff" }}>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                style={{ color: "#69a2ff" }}
                href="https://minecraft-server.net/details/VelocityCraft/"
              >
                Minecraft-Server.net
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                style={{ color: "#69a2ff" }}
                href="https://mcservertime.com/server-velocity-craft.932/"
              >
                MCServerTime.com
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                style={{ color: "#69a2ff" }}
                href="https://minecraftservers.biz/servers/150128/"
              >
                MinecraftServers.biz
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                style={{ color: "#69a2ff" }}
                href="http://topminecraftservers.org/vote/18117"
              >
                TopMinecraftServers.org
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                style={{ color: "#69a2ff" }}
                href="https://minecraftservers.org/server/615842"
              >
                MinecraftServers.org
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                style={{ color: "#69a2ff" }}
                href="https://minecraftast.org/server/23177"
              >
                Minecraftast.org
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                style={{ color: "#69a2ff" }}
                href="https://minecraft-mp.com/server-s286929"
              >
                Minecraft-mp.com
              </a>
            </li>
          </ul>
        </div>
        <div style={{ textAlign: "center" }}>
          <div className="playercount">
            <Link to="/">
              <p style={{ color: "white" }}>Home page</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vote;
