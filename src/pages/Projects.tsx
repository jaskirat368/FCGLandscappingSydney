import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Star, Users, MapPin, MousePointer2 } from 'lucide-react';
import { PROJECTS } from '../data';

export default function Projects() {
  const stats = [
    { icon: Trophy, text: "1,000+ Projects Complete" },
    { icon: Star, text: "14+ Years Experience" },
    { icon: Users, text: "38,000+ Happy Followers" },
    { icon: MapPin, text: "Sydney-Wide Service" }
  ];

  return (
    <>
      <Helmet>
        <title>Our Projects | FCG Landscaping Portfolio Sydney</title>
        <meta name="description" content="Explore our portfolio of premium landscaping projects across Sydney. Featuring Carlingford, Sylvania Waters, and Camden transformations." />
      </Helmet>

      {/* Creative Hero Section */}
      <div className="relative bg-fcg-green text-white pt-32 pb-24 overflow-hidden min-h-[80vh] flex flex-col justify-center">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute right-[-10%] top-[-10%] w-[600px] h-[600px] rounded-full bg-fcg-olive blur-[100px]" />
            <div className="absolute left-[-10%] bottom-[-10%] w-[500px] h-[500px] rounded-full bg-fcg-stone blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-fcg-olive uppercase tracking-widest text-xs font-bold mb-4 block">Portfolio</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
              Some Recent <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Projects</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mb-12 leading-relaxed">
              A curated showcase of our finest landscape transformations, where structural precision meets organic beauty.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-3 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-fcg-olive/20 flex items-center justify-center text-fcg-olive group-hover:scale-110 transition-transform">
                    <stat.icon size={20} />
                </div>
                <span className="font-medium text-white/90 text-sm md:text-base leading-tight">{stat.text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator - Repositioned to Right */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute right-10 top-1/2 transform -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-4 cursor-pointer group"
          onClick={() => document.getElementById('projects-content')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex justify-center p-2 backdrop-blur-sm bg-white/5 group-hover:border-white/60 transition-colors shadow-lg shadow-black/20">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-fcg-olive shadow-[0_0_10px_rgba(164,177,28,0.8)]"
            />
          </div>
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/80 group-hover:text-white transition-colors rotate-90 origin-left translate-x-2">Scroll</span>
        </motion.div>
      </div>

      <section id="projects-content" className="py-16 bg-white relative">
         {/* Decorative line */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-fcg-green/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group cursor-pointer"
              >
                <Link to={`/projects/${project.id}`} className="block h-full">
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-6 shadow-md group-hover:shadow-2xl transition-all duration-500 bg-gray-100">
                    <img 
                      src={project.images[0]} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                    
                    <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                      <span className="text-fcg-olive text-[10px] font-bold uppercase tracking-[0.2em] bg-white/90 px-3 py-1 rounded-full mb-3 inline-block backdrop-blur-sm shadow-lg">{project.category}</span>
                      <h3 className="text-3xl font-serif text-white mb-3 group-hover:text-fcg-stone transition-colors">
                        {project.title.replace(' Project', '')}
                      </h3>
                      <div className="flex items-center text-white/90 text-sm font-medium group-hover:text-fcg-olive transition-colors">
                        View Details <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Gallery Section */}
          <div id="gallery" className="border-t border-gray-100 pt-12">
            <div className="text-center mb-16">
              <span className="text-fcg-olive uppercase tracking-widest text-xs font-bold mb-3 block">Visual Diary</span>
              <h2 className="text-4xl md:text-5xl font-serif text-fcg-green">Gallery</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
              {[
                "https://static.wixstatic.com/media/75a82e_e56a571b47264389be378bff43f46a1b~mv2.jpg/v1/fill/w_701,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75a82e_e56a571b47264389be378bff43f46a1b~mv2.jpg",
                "https://static.wixstatic.com/media/75a82e_c466667948fe43f3b99012adee3965af~mv2.jpg/v1/fill/w_1041,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75a82e_c466667948fe43f3b99012adee3965af~mv2.jpg",
                "https://static.wixstatic.com/media/75a82e_e5984561b1a54ee7854e28537011061c~mv2_d_3024_3024_s_4_2.jpg/v1/fill/w_694,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75a82e_e5984561b1a54ee7854e28537011061c~mv2_d_3024_3024_s_4_2.jpg",
                "https://static.wixstatic.com/media/75a82e_c7d158d5ac994c89b699e35f8adc1839~mv2_d_3024_3024_s_4_2.jpg/v1/fill/w_694,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75a82e_c7d158d5ac994c89b699e35f8adc1839~mv2_d_3024_3024_s_4_2.jpg",
                "https://static.wixstatic.com/media/75a82e_1e76f2f682d549fc80d9aaed426a15ee~mv2_d_3024_3024_s_4_2.jpg/v1/fill/w_694,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75a82e_1e76f2f682d549fc80d9aaed426a15ee~mv2_d_3024_3024_s_4_2.jpg",
                "https://static.wixstatic.com/media/75a82e_44be4ae5bede47d0b8c2c7dd51bce1f4~mv2.jpg/v1/fill/w_1000,h_667,al_c,q_85,enc_auto/75a82e_44be4ae5bede47d0b8c2c7dd51bce1f4~mv2.jpg",
                "https://static.wixstatic.com/media/75a82e_0b2f82b89fe244bab42946562508f0fa~mv2.jpg/v1/fill/w_463,h_694,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/75a82e_0b2f82b89fe244bab42946562508f0fa~mv2.jpg",
                "https://static.wixstatic.com/media/75a82e_ffa9f239b1eb4a66b5edc4ba9ee6f3f9~mv2.jpg/v1/fill/w_1000,h_667,al_c,q_85,enc_auto/75a82e_ffa9f239b1eb4a66b5edc4ba9ee6f3f9~mv2.jpg",
                "https://static.wixstatic.com/media/75a82e_c8ffa0f6b2eb464483b3be5db1835dc6~mv2_d_3024_3024_s_4_2.jpg/v1/fill/w_694,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75a82e_c8ffa0f6b2eb464483b3be5db1835dc6~mv2_d_3024_3024_s_4_2.jpg",
                "https://static.wixstatic.com/media/75a82e_d22d1e8159cf4b6b832c9762063040bc~mv2.jpg/v1/fill/w_684,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75a82e_d22d1e8159cf4b6b832c9762063040bc~mv2.jpg",
                "https://static.wixstatic.com/media/75a82e_2074b11cead4453ca0ce6e0c2363eed8~mv2.jpg/v1/fill/w_723,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75a82e_2074b11cead4453ca0ce6e0c2363eed8~mv2.jpg",
                "https://static.wixstatic.com/media/75a82e_7eb3f47a7d9945edbcdd7df24f75bf2a~mv2.jpg/v1/fill/w_710,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75a82e_7eb3f47a7d9945edbcdd7df24f75bf2a~mv2.jpg",
                "https://static.wixstatic.com/media/75a82e_1e28688971424a1d8edbd179c8d694c1~mv2.jpg/v1/fill/w_925,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75a82e_1e28688971424a1d8edbd179c8d694c1~mv2.jpg",
                "https://static.wixstatic.com/media/75a82e_29c655c21cde4a9084a3422121a6eac3~mv2.jpg/v1/fill/w_698,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75a82e_29c655c21cde4a9084a3422121a6eac3~mv2.jpg",
                "https://static.wixstatic.com/media/75a82e_c206eaf7a0614361a2517de8afccaf80~mv2.jpg/v1/fill/w_878,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75a82e_c206eaf7a0614361a2517de8afccaf80~mv2.jpg",
                "https://static.wixstatic.com/media/75a82e_cc71ef45fd114f7b84b47cef9e88d92c~mv2_d_3024_3024_s_4_2.jpg/v1/fill/w_694,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75a82e_cc71ef45fd114f7b84b47cef9e88d92c~mv2_d_3024_3024_s_4_2.jpg",
                "https://static.wixstatic.com/media/75a82e_68977a85dcd14199808a964402f3f993~mv2.jpg/v1/fill/w_574,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75a82e_68977a85dcd14199808a964402f3f993~mv2.jpg",
                "https://static.wixstatic.com/media/75a82e_6d955de7a3944ae58efab51dec1867dd~mv2.jpg/v1/fill/w_694,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75a82e_6d955de7a3944ae58efab51dec1867dd~mv2.jpg",
                "https://static.wixstatic.com/media/75a82e_330b231f82b343009de9936f945627f6~mv2.jpg/v1/fill/w_520,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75a82e_330b231f82b343009de9936f945627f6~mv2.jpg",
                "https://static.wixstatic.com/media/75a82e_75a20cc946c94e61ae2f628956c55102~mv2.jpg/v1/fill/w_555,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75a82e_75a20cc946c94e61ae2f628956c55102~mv2.jpg",
                "https://static.wixstatic.com/media/75a82e_9d36ea9bc8e54e2d9c5a39d3c8b15195~mv2.jpg/v1/fill/w_520,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75a82e_9d36ea9bc8e54e2d9c5a39d3c8b15195~mv2.jpg",
                "https://static.wixstatic.com/media/75a82e_76e97138a534418d9115dd226e2ae5af~mv2.jpg/v1/fill/w_520,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75a82e_76e97138a534418d9115dd226e2ae5af~mv2.jpg",
                "https://static.wixstatic.com/media/75a82e_e2bed05bd0cd40008cbb39074379eeb1~mv2.jpg/v1/fill/w_520,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75a82e_e2bed05bd0cd40008cbb39074379eeb1~mv2.jpg",
                "https://static.wixstatic.com/media/75a82e_d305e0ea0c67498d9d788b3d2434bd36~mv2.jpg/v1/fill/w_520,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75a82e_d305e0ea0c67498d9d788b3d2434bd36~mv2.jpg",
                "https://static.wixstatic.com/media/75a82e_787fd327a082427392941cb7181a68ea~mv2.jpg/v1/fill/w_719,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75a82e_787fd327a082427392941cb7181a68ea~mv2.jpg",
                "https://static.wixstatic.com/media/75a82e_53cae639ca244fbdb981666fc08d3eb0~mv2.jpg/v1/fill/w_710,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75a82e_53cae639ca244fbdb981666fc08d3eb0~mv2.jpg",
                "https://static.wixstatic.com/media/75a82e_c6f94aca7c7c4104b85baf0541a96b72~mv2.jpg/v1/fill/w_520,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75a82e_c6f94aca7c7c4104b85baf0541a96b72~mv2.jpg",
                "https://static.wixstatic.com/media/75a82e_fe72cc02f8b345649da11bab1b387472~mv2.jpg/v1/fill/w_699,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75a82e_fe72cc02f8b345649da11bab1b387472~mv2.jpg",
                "https://static.wixstatic.com/media/75a82e_57ea9fcd3cd24dc7b4d13af88986d251~mv2.jpg/v1/fill/w_698,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75a82e_57ea9fcd3cd24dc7b4d13af88986d251~mv2.jpg",
                "https://static.wixstatic.com/media/75a82e_c24394b4d90f41058d7b7dc0b79c11b1~mv2.jpg/v1/fill/w_712,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75a82e_c24394b4d90f41058d7b7dc0b79c11b1~mv2.jpg",
                "https://static.wixstatic.com/media/75a82e_578c099b579d4105a175ace1f10fa425~mv2.jpg/v1/fill/w_690,h_544,al_c,q_85,enc_auto/75a82e_578c099b579d4105a175ace1f10fa425~mv2.jpg",
                "https://static.wixstatic.com/media/75a82e_3e76fbf3b99b432c933664711602d4d5~mv2.jpg/v1/fill/w_863,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75a82e_3e76fbf3b99b432c933664711602d4d5~mv2.jpg",
                "https://static.wixstatic.com/media/75a82e_7b34aaf2164149dfbaf79ed8955e3996~mv2.jpg/v1/fill/w_520,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75a82e_7b34aaf2164149dfbaf79ed8955e3996~mv2.jpg",
                "https://static.wixstatic.com/media/75a82e_9faec365c9b84a958effaa3fc6cd55f3~mv2.jpg/v1/fill/w_841,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75a82e_9faec365c9b84a958effaa3fc6cd55f3~mv2.jpg",
                "https://static.wixstatic.com/media/75a82e_a9b3861e44b74536ab1bdb4a3353aa7a~mv2.jpg/v1/fill/w_926,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75a82e_a9b3861e44b74536ab1bdb4a3353aa7a~mv2.jpg",
                "https://static.wixstatic.com/media/75a82e_a1bf5629c7ea4c7f9698c712b698b005~mv2.jpg/v1/fill/w_925,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75a82e_a1bf5629c7ea4c7f9698c712b698b005~mv2.jpg",
                "https://static.wixstatic.com/media/75a82e_0e47093848e64ee080084bd662d2c360~mv2.jpg/v1/fill/w_925,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75a82e_0e47093848e64ee080084bd662d2c360~mv2.jpg",
                "https://static.wixstatic.com/media/75a82e_1a2a4c79beb34a65be2d8dc365005187~mv2.jpg/v1/fill/w_925,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75a82e_1a2a4c79beb34a65be2d8dc365005187~mv2.jpg",
                "https://static.wixstatic.com/media/75a82e_a39e24f44ac34cb1847f3dbd8f0ff22e~mv2.jpg/v1/fill/w_694,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75a82e_a39e24f44ac34cb1847f3dbd8f0ff22e~mv2.jpg",
                "https://static.wixstatic.com/media/75a82e_478bf7d177d9477598e55858003d79d0~mv2.jpg/v1/fill/w_925,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75a82e_478bf7d177d9477598e55858003d79d0~mv2.jpg",
                "https://static.wixstatic.com/media/75a82e_85c2668711e3414d8057a09d5e7b0090~mv2.jpg/v1/fill/w_694,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75a82e_85c2668711e3414d8057a09d5e7b0090~mv2.jpg",
                "https://static.wixstatic.com/media/75a82e_2f8be10cf52c401eb9b120fea607c767.jpg/v1/fill/w_925,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75a82e_2f8be10cf52c401eb9b120fea607c767.jpg",
                "https://static.wixstatic.com/media/75a82e_321b3171ec0e410a9fc1c53d6465dca4.jpg/v1/fill/w_863,h_648,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75a82e_321b3171ec0e410a9fc1c53d6465dca4.jpg"
              ].map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.2 }}
                  className={`relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group ${
                    i % 5 === 0 ? 'col-span-2 row-span-2' : 
                    i % 3 === 0 ? 'col-span-2' : 
                    'col-span-1'
                  }`}
                >
                  <img 
                    src={src} 
                    alt={`Gallery image ${i + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
