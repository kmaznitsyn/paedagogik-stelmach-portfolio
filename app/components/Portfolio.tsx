"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Heart,
  Star,
  Mail,
  Instagram,
  Sparkles,
  Moon,
  Flower2,
  Code2,
  Palette,
  GraduationCap,
  Users,
  Linkedin,
  Send,
} from "lucide-react";
import Image from "next/image";
import { GrainOverlay } from "./GrainOverlay";
import { StickerBadge } from "./StickerBadge";

const skills = [
  {
    category: "Технічні навички",
    icon: Code2,
    items: [
      "HTML, CSS, JavaScript, React / React Native",
      "Бази даних та SQL",
      "Комп'ютерна графіка та веб-розробка",
      "Адаптивна верстка та інтерактивні ресурси",
    ],
    color: "dusty-pink",
  },
  {
    category: "Дизайн та дидактика",
    icon: Palette,
    items: [
      "Створення візуального контенту (Figma, Canva)",
      "Проєктування мультимедійних презентацій",
      "Розробка авторських дидактичних матеріалів",
      "Оформлення сертифікатів та графічних елементів",
    ],
    color: "lavender",
  },
  {
    category: "Педагогіка та андрагогіка",
    icon: GraduationCap,
    items: [
      "Робота з дорослими здобувачами освіти",
      "Інтерактивні методи навчання та квести",
      "Арттерапевтичні методики у виховній роботі",
      "Організація виховних та освітніх заходів",
    ],
    color: "sage",
  },
  {
    category: "Гнучкі навички",
    icon: Users,
    items: [
      "Ефективна комунікація та фасилітація",
      "Командна робота та лідерство",
      "Креативність та вирішення складних завдань",
      "Високий рівень відповідальності й рефлексії",
    ],
    color: "dusty-pink",
  },
] as const;

const colorClasses = {
  "dusty-pink": "bg-dusty-pink/20 border-dusty-pink text-dusty-pink-dark",
  lavender: "bg-lavender/20 border-lavender text-purple-700",
  sage: "bg-sage/20 border-sage text-green-700",
};

export function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 20]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-full bg-cream overflow-hidden selection:bg-dusty-pink selection:text-ink"
    >
      <GrainOverlay />

      {/* Decorative Floating Elements */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      >
        <motion.div
          style={{ y: y1, x: -50 }}
          className="absolute top-20 left-[10%] text-dusty-pink opacity-60"
        >
          <Star className="w-12 h-12 fill-current animate-float" />
        </motion.div>
        <motion.div
          style={{ y: y2, rotate }}
          className="absolute top-40 right-[15%] text-lavender opacity-60"
        >
          <Heart className="w-16 h-16 fill-current animate-float-delayed" />
        </motion.div>
        <motion.div
          style={{ y: y1 }}
          className="absolute bottom-1/3 left-[5%] text-lavender opacity-50"
        >
          <Flower2 className="w-16 h-16 fill-current animate-float" />
        </motion.div>
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-20 right-[10%] text-dusty-pink opacity-60"
        >
          <Moon className="w-14 h-14 fill-current animate-float-delayed" />
        </motion.div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-ink mb-4 tracking-wide relative z-10 leading-tight">
              МАРІЯ
              <span className="block sm:inline sm:ml-5 text-dusty-pink-dark">
                СТЕЛЬМАХ
              </span>
            </h1>
            <motion.div
              className="absolute -top-10 -right-4 sm:-right-10 text-lavender opacity-80"
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Sparkles className="w-12 h-12 sm:w-16 sm:h-16" />
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-hand text-3xl md:text-5xl text-gray-600 -rotate-2 mb-12"
          >
            Digital Technologies &amp; Professional Education
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-mono text-base md:text-lg text-gray-600 max-w-2xl mb-12"
          >
            Інтеграція цифрових технологій, педагогіки та андрагогіки в
            освітньому процесі. Проєктування інтерактивних навчальних
            матеріалів, комп’ютерної графіки та сучасних вебрішень.
          </motion.p>
        </section>

        {/* About Section */}
        <section className="py-20 md:py-32 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50, rotate: -5 }}
              whileInView={{ opacity: 1, x: 0, rotate: -3 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative bg-white p-4 pb-16 shadow-xl max-w-md w-full mx-auto md:mx-0 transform rotate-[-3deg]"
            >
              <div className="aspect-[3/4] bg-gradient-to-br from-dusty-pink/30 to-lavender/30 relative overflow-hidden">
                <Image
                  src="/maria-stelmach-portfolio-photo.jpg"
                  alt="Марія Стельмах"
                  fill
                  sizes="(min-width: 768px) 28rem, 90vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
              </div>
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <p className="font-hand text-2xl text-ink">
                  цифрова освіта
                </p>
              </div>
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-dusty-pink rounded-full opacity-80 mix-blend-multiply" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 md:pl-10"
            >
              <h2 className="font-display font-black text-4xl md:text-5xl text-ink mb-6">
                ПРО <span className="text-lavender">МЕНЕ</span>
              </h2>
              <div className="font-mono text-base md:text-lg leading-relaxed space-y-4 text-gray-700 bg-white/50 p-6 rounded-lg backdrop-blur-sm border border-white">
                <p>
                  Я студентка I курсу магістратури за спеціальністю «Інформатика
                  в закладах освіти», маю ґрунтовну базу в галузі цифрових
                  технологій, візуального дизайну та розробки ПЗ.
                </p>
                <p>
                  Мій академічний та практичний досвід поєднує міцні технічні
                  засади веб-розробки та комп&apos;ютерної графіки з поглибленими
                  педагогічними навичками, освітою дорослих (андрагогікою) та
                  інтерактивними методиками навчання.
                </p>
                <p>
                  Я підходжу до кожного освітнього проєкту з креативністю,
                  відповідальністю та інноваційним мисленням, прагнучи
                  створювати сучасні цифрові інструменти та ефективні навчальні
                  середовища.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-block px-3 py-1 bg-dusty-pink/30 rounded-full font-mono text-xs border border-dusty-pink">
                  #інформатика
                </span>
                <span className="inline-block px-3 py-1 bg-lavender/30 rounded-full font-mono text-xs border border-lavender">
                  #цифроваосвіта
                </span>
                <span className="inline-block px-3 py-1 bg-sage/30 rounded-full font-mono text-xs border border-sage">
                  #веброзробка
                </span>
                <span className="inline-block px-3 py-1 bg-dusty-pink/30 rounded-full font-mono text-xs border border-dusty-pink">
                  #андрагогіка
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 md:py-32">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-ink inline-block relative"
            >
              НАВИЧКИ ТА КОМПЕТЕНЦІЇ
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-lavender/50 transform rotate-1"></span>
            </motion.h2>
            <p className="font-hand text-2xl mt-4 text-gray-500">
              професійний інструментарій та практичний досвід
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white/60 backdrop-blur-sm p-6 rounded-lg border-2 border-white shadow-md"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`p-3 rounded-full shrink-0 ${colorClasses[skill.color]}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-ink">
                      {skill.category}
                    </h3>
                  </div>
                  <ul className="space-y-2 font-mono text-sm text-gray-700">
                    {skill.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-dusty-pink-dark mt-0.5">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Contact / Sticker Section */}
        <section className="py-20 md:py-40 text-center relative">
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none"
          >
            <span className="font-display font-black text-[14vw] leading-none text-ink">
              КОНТАКТИ
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="font-hand text-4xl md:text-5xl mb-6 transform -rotate-2">
              Створюймо <br />
              <span className="text-dusty-pink-dark font-bold text-5xl md:text-6xl">
                майбутнє разом
              </span>
            </h2>
            <p className="font-mono text-base text-gray-600 mb-12 max-w-2xl mx-auto">
              Відкрита до професійних проєктів, освітніх колаборацій,
              впровадження цифрових технологій та педагогічних ініціатив.
            </p>

            <div className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-3xl mx-auto">
              <StickerBadge
                icon={Mail}
                label="Email"
                href="mailto:mary@example.com"
                color="pink"
                rotation={-5}
                delay={0.1}
              />
              <StickerBadge
                icon={Instagram}
                label="Insta"
                href="#"
                color="lavender"
                rotation={5}
                delay={0.2}
              />
              <StickerBadge
                icon={Linkedin}
                label="LinkedIn"
                href="#"
                color="sage"
                rotation={-3}
                delay={0.3}
              />
              <StickerBadge
                icon={Send}
                label="Telegram"
                href="https://t.me/mstlmh"
                color="pink"
                rotation={8}
                delay={0.4}
              />
            </div>

            <footer className="mt-24 font-mono text-xs text-gray-400">
              <p>© Стельмах Марія. Усі права захищені.</p>
              <p className="mt-2">Створено з натхненням та технологіями.</p>
            </footer>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
