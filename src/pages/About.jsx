import React from 'react'
import { motion } from 'framer-motion'
import { Target, Heart, Rocket, Users, Award, Globe } from 'lucide-react'
import styles from './About.module.css'

const About = () => {
  const teamMembers = [
    { name: "Ali Oshpaz", role: "Bosh Oshpaz", exp: "10+ yillik tajriba" },
    { name: "Malika Qo'z", role: "Patsisser", exp: "7+ yillik tajriba" },
    { name: "Sardor Tabassum", role: "Milliy Taomlar Ustasi", exp: "8+ yillik tajriba" },
    { name: "Dilnoza Shirin", role: "Salatlar Mutaxassisi", exp: "5+ yillik tajriba" }
  ]

  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <motion.section 
        className={styles.aboutHero}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>👥 Biz Haqimizda</h1>
        <p>Oshpazlik sevgisi bilan birlashtirgan professional jamoa</p>
      </motion.section>

      {/* Mission Section */}
      <section className={styles.missionSection}>
        <div className="container">
          <div className={styles.missionGrid}>
            <motion.div 
              className={styles.missionCard}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className={styles.missionIcon}>
                <Target className={styles.icon} />
              </div>
              <h2>Bizning Maqsad</h2>
              <p>Har bir kishi o'z uyida professional taomlar tayyorlashi mumkin degan ishonch bilan ishlaymiz. Sizga eng oddiy va samarali retseptlarni taqdim etamiz.</p>
            </motion.div>
            
            <motion.div 
              className={styles.missionCard}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className={styles.missionIcon}>
                <Heart className={styles.icon} />
              </div>
              <h2>Bizning Qadriyatlar</h2>
              <p>Sifat, oddylik va yangilik - bu bizning asosiy tamoyillarimiz. Har bir retsept sinab ko'rilgan va ishonchli.</p>
            </motion.div>
            
            <motion.div 
              className={styles.missionCard}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className={styles.missionIcon}>
                <Rocket className={styles.icon} />
              </div>
              <h2>Bizning Kelajag</h2>
              <p>Jahonning barcha oshxonalarini o'rganish va siz bilan baham ko'rish. Har oy yangi retseptlar va oshpazlik sirlari.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <div className="container">
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Users className={styles.titleIcon} />
            Bizning Jamoa
          </motion.h2>
          
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className={styles.teamCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className={styles.memberAvatar}>
                  {member.name.charAt(0)}
                </div>
                <h3>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
                <p className={styles.memberExp}>{member.exp}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            <motion.div 
              className={styles.statItem}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Award className={styles.statIcon} />
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>Retseptlar</div>
            </motion.div>
            
            <motion.div 
              className={styles.statItem}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Users className={styles.statIcon} />
              <div className={styles.statNumber}>50,000+</div>
              <div className={styles.statLabel}>Foydalanuvchilar</div>
            </motion.div>
            
            <motion.div 
              className={styles.statItem}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Globe className={styles.statIcon} />
              <div className={styles.statNumber}>25+</div>
              <div className={styles.statLabel}>Mamlakatlar</div>
            </motion.div>
            
            <motion.div 
              className={styles.statItem}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Award className={styles.statIcon} />
              <div className={styles.statNumber}>4.9/5</div>
              <div className={styles.statLabel}>Reyting</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About