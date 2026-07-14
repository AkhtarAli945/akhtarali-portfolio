import { useEffect, useState } from "react";

const phrases = [
  "Full Stack Developer",
  "React Enthusiast",
  "Node.js Expert",
  "Problem Solver",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[i];

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.substring(0, j + 1));
        setJ(j + 1);

        if (j === current.length) setDeleting(true);
      } else {
        setText(current.substring(0, j - 1));
        setJ(j - 1);

        if (j === 0) {
          setDeleting(false);
          setI((i + 1) % phrases.length);
        }
      }
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [i, j, deleting]);

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold">
        Hi, I'm <span className="text-orange-500">Akhtar Ali</span>
      </h1>

      <p className="text-xl mt-4 text-gray-400">
        {text} |
      </p>
    </section>
  );
}