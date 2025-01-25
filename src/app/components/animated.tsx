"use client";

import {
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
  useScroll,
  motion,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

export function Drag() {
  return (
    <motion.div drag className="p-5 aspect-square bg-blue-500 rounded-md">
      Drag
    </motion.div>
  );
}

export function DragConstraints() {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={constraintsRef}
      className="rounded-md h-52 aspect-square bg-pink-500"
    >
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.2}
        className="h-16 rounded-md aspect-square bg-white"
      />
    </motion.div>
  );
}

export function EnterAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      className="bg-red-500 aspect-square h-20 rounded-md"
    />
  );
}

export function ExitAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="space-y-4 ">
      <AnimatePresence initial={false}>
        {isVisible ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            key="box"
            className="bg-white p-10 rounded-md text-black"
          >
            Box
          </motion.div>
        ) : null}
      </AnimatePresence>
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        whileTap={{ y: 1 }}
      >
        {isVisible ? "Hide" : "Show"}
      </motion.button>
    </div>
  );
}

export function Gestures() {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      className="p-7 bg-green-500 rounded-md"
    />
  );
}

export function HTMLContent() {
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));

  useEffect(() => {
    const controls = animate(count, 100, { duration: 5 });
    return () => controls.stop();
  }, []);

  return <motion.pre>{rounded}</motion.pre>;
}

export function Keyframes() {
  return (
    <motion.div
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
      }}
      className="p-8 bg-white rounded-md"
    />
  );
}

const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };

export function MotionPath() {
  return (
    <div style={{ position: "relative" }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="451" height="437">
        <motion.path
          d="M 239 17 C 142 17 48.5 103 48.5 213.5 C 48.5 324 126 408 244 408 C 362 408 412 319 412 213.5 C 412 108 334 68.5 244 68.5 C 154 68.5 102.68 135.079 99 213.5 C 95.32 291.921 157 350 231 345.5 C 305 341 357.5 290 357.5 219.5 C 357.5 149 314 121 244 121 C 174 121 151.5 167 151.5 213.5 C 151.5 260 176 286.5 224.5 286.5 C 273 286.5 296.5 253 296.5 218.5 C 296.5 184 270 177 244 177 C 218 177 197 198 197 218.5 C 197 239 206 250.5 225.5 250.5 C 245 250.5 253 242 253 218.5"
          fill="transparent"
          strokeWidth="12"
          stroke="var(--hue-6-transparent)"
          strokeLinecap="round"
          initial={{ pathLength: 0.001 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
      </svg>
      <motion.div
        className=""
        initial={{ offsetDistance: "0%", scale: 2.5 }}
        animate={{ offsetDistance: "100%", scale: 1 }}
        transition={transition}
      />
    </div>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      id="scroll-indicator"
      style={{
        scaleX: scrollYProgress,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 10,
        originX: 0,
        backgroundColor: "#ff0088",
      }}
    />
  );
}

export function Reordering() {
  const [order, setOrder] = useState(initialOrder);

  useEffect(() => {
    const timeout = setTimeout(() => setOrder(shuffle(order)), 1000);
    return () => clearTimeout(timeout);
  }, [order]);

  return (
    <ul className="grid grid-cols-2 gap-2">
      {order.map((backgroundColor) => (
        <motion.li
          key={backgroundColor}
          layout
          // layoutId={backgroundColor}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 300,
          }}
          className="h-20 aspect-square rounded-md"
          style={{ backgroundColor }}
        />
      ))}
    </ul>
  );
}

const initialOrder = ["#ff0088", "#dd00ee", "#9911ff", "#0d63f8"];

/**
 * ==============   Utils   ================
 */
function shuffle([...array]: string[]) {
  return array.sort(() => Math.random() - 0.5);
}

export function SharedLayoutAnimation() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div style={container}>
      <nav style={nav}>
        <ul style={tabsContainer}>
          {tabs.map((item) => (
            <motion.li
              key={item.label}
              initial={false}
              animate={{
                backgroundColor: item === selectedTab ? "#eee" : "#eee0",
              }}
              style={tab}
              onClick={() => setSelectedTab(item)}
            >
              {`${item.icon} ${item.label}`}
              {item === selectedTab ? (
                <motion.div
                  style={underline}
                  layoutId="underline"
                  id="underline"
                />
              ) : null}
            </motion.li>
          ))}
        </ul>
      </nav>
      <main style={iconContainer}>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={icon}
          >
            {selectedTab ? selectedTab.icon : "😋"}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
  width: 480,
  height: "60vh",
  maxHeight: 360,
  borderRadius: 10,
  background: "white",
  overflow: "hidden",
  boxShadow:
    "0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075)",
  display: "flex",
  flexDirection: "column",
};

const nav: React.CSSProperties = {
  background: "#fdfdfd",
  padding: "5px 5px 0",
  borderRadius: "10px",
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  borderBottom: "1px solid #eeeeee",
  height: 44,
};

const tabsStyles: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  fontWeight: 500,
  fontSize: 14,
};

const tabsContainer: React.CSSProperties = {
  ...tabsStyles,
  display: "flex",
  width: "100%",
};

const tab: React.CSSProperties = {
  ...tabsStyles,
  borderRadius: 5,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  width: "100%",
  padding: "10px 15px",
  position: "relative",
  background: "white",
  cursor: "pointer",
  height: 24,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flex: 1,
  minWidth: 0,
  userSelect: "none",
  color: "#0f1115",
};

const underline: React.CSSProperties = {
  position: "absolute",
  bottom: -2,
  left: 0,
  right: 0,
  height: 2,
  background: "var(--accent)",
};

const iconContainer: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
};

const icon: React.CSSProperties = {
  fontSize: 128,
};

/**
 * ==============   Data   ================
 */

const allIngredients = [
  { icon: "🍅", label: "Tomato" },
  { icon: "🥬", label: "Lettuce" },
  { icon: "🧀", label: "Cheese" },
  { icon: "🥕", label: "Carrot" },
  { icon: "🍌", label: "Banana" },
  { icon: "🫐", label: "Blueberries" },
  { icon: "🥂", label: "Champers?" },
];

const [tomato, lettuce, cheese] = allIngredients;
const tabs = [tomato, lettuce, cheese];

export function StateAnimations() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);

  return (
    <div id="example">
      <div>
        <motion.div
          className="box"
          animate={{ x, y, rotate }}
          transition={{ type: "spring" }}
        />
      </div>
      <div className="inputs">
        <Input value={x} set={setX}>
          x
        </Input>
        <Input value={y} set={setY}>
          y
        </Input>
        <Input value={rotate} set={setRotate} min={-180} max={180}>
          rotate
        </Input>
      </div>
      <StyleSheet />
    </div>
  );
}

interface InputProps {
  children: string;
  value: number;
  set: (newValue: number) => void;
  min?: number;
  max?: number;
}

function Input({ value, children, set, min = -200, max = 200 }: InputProps) {
  return (
    <label>
      <code>{children}</code>
      <input
        value={value}
        type="range"
        min={min}
        max={max}
        onChange={(e) => set(parseFloat(e.target.value))}
      />
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={(e) => set(parseFloat(e.target.value) || 0)}
      />
    </label>
  );
}

/**
 * ==============   Styles   ================
 */

function StyleSheet() {
  return (
    <style>{`
            #example .box {
                width: 200px;
                height: 200px;
                border-radius: 20px;
                border: 5px dotted #ff0088;
                pointer-events: none;
            }

            #example {
                display: flex;
                align-items: center;
            }

            #example input {
                accent-color: #ff0088;
                font-family: JetBrains Mono, monospace;
            }

            #example .inputs {
                display: flex;
                flex-direction: column;
                padding-left: 50px;
            }

            #example label {
                display: flex;
                align-items: center;
                margin: 10px 0;
            }

            #example label code {
                width: 100px;
            }

            #example input[type="number"] {
                border: 0;
                border-bottom: 1px dotted #ff0088;
                color: #ff0088;
                margin-left: 10px;
            }

            #example input[type="number"]:focus {
                outline: none;
                border-bottom: 2px solid #ff0088;
            }

            #example input[type="number"]::-webkit-inner-spin-button {
                -webkit-appearance: none;
            }

            input[type='range']::-webkit-slider-runnable-track {
                height: 10px;
                -webkit-appearance: none;
                background: var(--layer);
                border: 1px solid var(--border);
                border-radius: 10px;
                margin-top: -1px;
            }

            input[type='range']::-webkit-slider-thumb {
                -webkit-appearance: none;
                height: 20px;
                width: 20px;
                border-radius: 50%;
                background: #ff0088;
                top: -4px;
                position: relative;
            }
        `}</style>
  );
}

export const MotionValueAnimation = () => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [0, 300], [0, 360]);

  return (
    <div className="flex flex-col items-center gap-4">
      <h3 className="mt-0">Drag left to right</h3>
      <motion.div
        drag="x"
        style={{ x }}
        dragConstraints={{ left: 0, right: 300 }}
        className="h-32 rounded-2xl border-2 border-white aspect-square flex items-center justify-center cursor-grab"
      >
        <motion.img
          style={{ rotate }}
          src="https://upload.wikimedia.org/wikipedia/commons/7/72/Yellow_Fidget_Spinner.png"
          className="pointer-events-none"
        />
      </motion.div>
    </div>
  );
};
