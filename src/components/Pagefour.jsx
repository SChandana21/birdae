import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import BG from "../components/ChatGPT Image Jun 17, 2026, 09_02_47 PM.png";

const Pagefour = () => {
  const [opened, setOpened] = useState(false);

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
            key="giftbox"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{
              y: {
                duration: 2.5,
                repeat: Infinity,
              },
            }}
            style={{
              textAlign: "center",
            }}
          >
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() => setOpened(true)}
              style={{
                cursor: "pointer",
                fontSize: "10rem",
                userSelect: "none",
              }}
            >
              🎁
            </motion.div>

            <h1
              style={{
                color: "#4A4A4A",
                marginTop: "20px",
                marginBottom: "15px",
              }}
            >
              Lastly..
            </h1>

            <p
              style={{
                color: "#666",
                marginBottom: "30px",
              }}
            >
              Click the gift box to open it ✨
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="reward"
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            style={{
              maxWidth: "850px",
              width: "100%",
              background: "rgba(255,255,255,0.75)",
              backdropFilter: "blur(12px)",
              borderRadius: "32px",
              padding: "50px",
              textAlign: "center",
              boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
            }}
          >
            <motion.div
              initial={{
                rotate: -15,
                scale: 0,
              }}
              animate={{
                rotate: 0,
                scale: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
              }}
              style={{
                fontSize: "5rem",
                marginBottom: "20px",
              }}
            >
              🎉
            </motion.div>

            <h1
              style={{
                color: "#4A4A4A",
                marginBottom: "20px",
              }}
            >
              Happy Birthday!
            </h1>

            <p
              style={{
                color: "#666",
                fontSize: "1.1rem",
                marginBottom: "35px",
              }}
            >
              
              <br />
              Here's a small gift from my side.
            </p>

            <div
              style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "30px",
                marginBottom: "30px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
              }}
            >
              <div
                style={{
                  fontSize: "1rem",
                  color: "#999",
                  marginBottom: "15px",
                  letterSpacing: "2px",
                }}
              >
                
              </div>

              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: "700",
                  color: "#FF7BAC",
                  letterSpacing: "4px",
                  wordBreak: "break-word",
                }}
              >
                7CFC6-DLZQA-JYEN8
              </div>
            </div>

            <p
              style={{
                color: "#777",
                fontStyle: "italic",
              }}
            >
               
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Pagefour;