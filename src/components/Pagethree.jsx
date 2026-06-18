import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import BG from "../components/ChatGPT Image Jun 17, 2026, 09_02_47 PM.png";

const Pagethree = () => {
  const [opened, setOpened] = useState(false);
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
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.div
            key="envelope"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -8, 0],
            }}
            transition={{
              y: {
                duration: 3,
                repeat: Infinity,
              },
            }}
            style={{
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "7rem",
                marginBottom: "20px",
              }}
            >
              ✉️
            </div>

            <h1
              style={{
                color: "#4A4A4A",
                marginBottom: "15px",
              }}
            >
              
            </h1>

            <p
              style={{
                color: "#666",
                marginBottom: "30px",
              }}
            >
              Open when ready
            </p>

            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpened(true)}
              style={{
                border: "none",
                padding: "16px 48px",
                borderRadius: "999px",
                background: "#FF7BAC",
                color: "white",
                fontWeight: "700",
                fontSize: "18px",
                cursor: "pointer",
                boxShadow: "0 10px 25px rgba(255,123,172,0.3)",
              }}
            >
              Open
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="letter"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              maxWidth: "850px",
              width: "100%",
              background: "rgba(255,255,255,0.7)",
              backdropFilter: "blur(12px)",
              borderRadius: "30px",
              padding: "50px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
            }}
          >
            <h1
              style={{
                color: "#4A4A4A",
                marginBottom: "30px",
                textAlign: "center",
              }}
            >
              Happy Birthday 🎂
            </h1>

            <div
              style={{
                color: "#555",
                lineHeight: "2",
                fontSize: "1.05rem",
              }}
            >
              <p>
                Happiest Birthday Hungry! While i could think of so many times you've been an amazing friend, what tops is how amazing you're as a person.

              </p>
               Always admire the way you stand by your values and always find the good in people. Lowkey can't believe how nice you're at times, but fairplays.
              <p>
                Hope life gives you everything nice it ever has to offer.
              </p>

              <p>
                
              </p>

              

              <p
                style={{
                  marginTop: "35px",
                  fontWeight: "600",
                }}
              >
                Also hard to ignore how much you've been there for me, Truly grateful.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "40px",
              }}
            >
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/pagefour")}
                style={{
                  border: "none",
                  padding: "16px 48px",
                  borderRadius: "999px",
                  background: "#FF7BAC",
                  color: "white",
                  fontWeight: "700",
                  fontSize: "18px",
                  cursor: "pointer",
                  boxShadow: "0 10px 25px rgba(255,123,172,0.3)",
                }}
              >
                Continue
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Pagethree;