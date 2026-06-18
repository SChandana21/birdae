import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ONEPAGE = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffd9e8",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.img
        src="https://media1.tenor.com/m/h74Cr2RKxlUAAAAC/corgi.gif"
        alt="Birthday GIF"
        style={{
          width: "300px",
          borderRadius: "20px",
          marginBottom: "25px",
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />

      <motion.button
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/page-two")}
        style={{
          border: "none",
          padding: "14px 32px",
          borderRadius: "999px",
          background: "#ffffff",
          color: "#ff4d94",
          fontSize: "18px",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        }}
      >
        Click Here Twin
      </motion.button>
    </div>
  );
};

export default ONEPAGE;