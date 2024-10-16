import { useRef } from "react";
import { CutCornerButton } from "../components/CutCornerButton";
import { TextButton } from "../components/TextButton";
import { motion, useScroll, useTransform } from "framer-motion";
const listItems = [
  "Experience unparalleled security and scalability.",
  "Fully benefit from scalable network effects.",
  "Unlock the potential of decentralized networks.",
];

export const FeaturesGridSection = () => {
  const torusKnotRef = useRef(null);
  const firstHemisphereRef = useRef(null);

  const { scrollYProgress: torusKnotScrollYProgress } = useScroll({
    target: torusKnotRef,
    offset: ["start end", "end start"],
  });

  const torusKnotTranslateY = useTransform(
    torusKnotScrollYProgress,
    [0, 1],
    [100, -100]
  );

  const torusKnotRotate = useTransform(
    torusKnotScrollYProgress,
    [0, 1],
    [30, -30]
  );

  const { scrollYProgress: firstHemisphereScrollYProgress } = useScroll({
    target: firstHemisphereRef,
    offset: ["start end", "end start"],
  });

  const firstHemisphereKnotTranslateY = useTransform(
    firstHemisphereScrollYProgress,
    [0, 1],
    [50, -50]
  );

  const firstHemisphereKnotRotate = useTransform(
    firstHemisphereScrollYProgress,
    [0, 1],
    [-20, -50]
  );

  const coneRef = useRef(null);

  const { scrollYProgress: coneScrollYProgress } = useScroll({
    target: coneRef,
    offset: ["start end", "end start"],
  });

  const coneTranslateY = useTransform(coneScrollYProgress, [0, 1], [100, -100]);

  const coneRotate = useTransform(coneScrollYProgress, [0, 1], [12, 45]);

  const secondHemisphereRef = useRef(null);

  const { scrollYProgress: secondHemisphereScrollYProgress } = useScroll({
    target: secondHemisphereRef,
    offset: ["start end", "end start"],
  });

  const secondHemisphereTranslateY = useTransform(
    secondHemisphereScrollYProgress,
    [0, 1],
    [50, -50]
  );

  const secondHemisphereRotate = useTransform(
    secondHemisphereScrollYProgress,
    [0, 1],
    [-20, 10]
  );
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container">
        <div className="flex flex-col gap-56 md:gap-48 lg:gap-80">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-2">
              <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">
                Empowering the future of blockchain.
              </h2>
              <p className="text-xl text-zinc-400 mt-8 lg:text-2xl">
                Blockforge provides robust and secure infrastructure to support
                the next generation of decentralized applications.
              </p>
              <ul className="flex flex-col gap-8 mt-12">
                {listItems.map((item, index) => (
                  <li className="flex items-center gap-3" key={index}>
                    <div className="inline-flex flex-shrink-0 justify-center items-center size-8 outline outline-4 -outline-offset-4 outline-fuchsia-500/10 rounded-full">
                      <div className="size-1.5 bg-fuchsia-500 rounded-full"></div>
                    </div>
                    <span className="text-xl font-bold">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-8 mt-12">
                <CutCornerButton>Get Started</CutCornerButton>
                <TextButton color="fuchsia">Learn More</TextButton>
              </div>
            </div>
            <div className="hidden md:block">
              <div>
                <div className="relative inline-flex z-0">
                  <motion.img
                    src="/assets/images/torus-knot.png"
                    alt="Torus Knot 3D Image"
                    className="size-96 max-w-none"
                    ref={torusKnotRef}
                    style={{
                      translateY: torusKnotTranslateY,
                      rotate: torusKnotRotate,
                    }}
                  />
                  <motion.img
                    src="/assets/images/hemisphere.png"
                    alt="Hemisphere 3D Shape"
                    className="absolute size-96 top-3/4 -z-10 scale-x-[-1]"
                    ref={firstHemisphereRef}
                    style={{
                      translateY: firstHemisphereKnotTranslateY,
                      rotate: firstHemisphereKnotRotate,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative hidden md:block">
              <div className="absolute right-0 z-0">
                <motion.img
                  src="/assets/images/cone.png"
                  alt="Cone 3D Shape"
                  className="size-96 max-w-none"
                  ref={coneRef}
                  style={{
                    rotate: coneRotate,
                    translateY: coneTranslateY,
                  }}
                />
                <motion.img
                  src="/assets/images/hemisphere.png"
                  alt="Hemisphere 3D Shape"
                  className="absolute top-3/4 -z-10 right-0"
                  ref={secondHemisphereRef}
                  style={{
                    translateY: secondHemisphereTranslateY,
                    rotate: secondHemisphereRotate,
                  }}
                />
              </div>
            </div>
            <div className="col-span-2">
              <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">
                Blockforge leads the way.
              </h2>
              <div className="flex flex-col text-xl text-zinc-400 mt-6 gap-6 lg:text-2xl">
                <p>
                  Blockforge is dedicated to supporting the evolution of Web3
                  applications by delivering the necessary infrastructure and
                  security for Web3.
                </p>
                <p>
                  Blockforge champions Web3 for everyone. As a decentralized
                  blockchain scaling platform, Blockforge enables developers to
                  create scalable, user-friendly dApps with low transaction
                  costs, all while ensuring robust security.
                </p>
              </div>
              <div className="flex gap-8 mt-12">
                <CutCornerButton>Get Started</CutCornerButton>
                <TextButton color="fuchsia">Learn More</TextButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
