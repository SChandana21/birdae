import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import BG from "../components/birthday.png";
import SummerImage from "../components/summer.png";
import GIF from "../components/tenor.gif";

const Pagetwo = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "30px 20px 60px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Birthday Flags */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          marginBottom: "40px",
        }}
      >
        {[
          "#FFB6C1",
          "#FFD6E0",
          "#FFFFFF",
          "#FFB6C1",
          "#FFD6E0",
          "#FFFFFF",
          "#FFB6C1",
          "#FFD6E0",
          "#FFFFFF",
        ].map((color, index) => (
          <div
            key={index}
            style={{
              width: 0,
              height: 0,
              borderLeft: "18px solid transparent",
              borderRight: "18px solid transparent",
              borderTop: `32px solid ${color}`,
            }}
          />
        ))}
      </div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: "4rem",
          fontWeight: "700",
          color: "#4A4A4A",
          marginBottom: "35px",
          textAlign: "center",
        }}
      >
        Happy Birthday!! 🎂
      </motion.h1>

      {/* Main Image */}
      <motion.img
        src={SummerImage}
        alt="Birthday Cat"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          width: "520px",
          maxWidth: "95%",
          borderRadius: "30px",
          marginBottom: "45px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
        }}
      />

      {/* GIF Section */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "50px",
        }}
      >
        <motion.img
          src={GIF}
          alt="gif1"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          style={{
            width: "220px",
            borderRadius: "24px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        />

        <motion.img
          src="https://media1.tenor.com/m/kenbY1StL7oAAAAd/son-baby.gif"
          alt="gif2"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 0.5,
          }}
          style={{
            width: "220px",
            borderRadius: "24px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        />
      </div>

      {/* Continue Button */}
      <motion.button
        whileHover={{
          scale: 1.06,
        }}
        whileTap={{
          scale: 0.95,
        }}
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        onClick={() => navigate("/pagethree")}
        style={{
          border: "none",
          padding: "16px 48px",
          borderRadius: "999px",
          background: "#FF7BAC",
          color: "white",
          fontSize: "18px",
          fontWeight: "700",
          cursor: "pointer",
          boxShadow: "0 10px 25px rgba(255,123,172,0.3)",
        }}
      >
        Continue →
      </motion.button>
    </div>
  );
};

export default Pagetwo;