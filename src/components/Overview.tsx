import { overviewBanner } from '@/assets';
import { overviewData } from '@/constants';
import { DialogTrigger } from '@radix-ui/react-dialog';
import { Play } from 'lucide-react';
import { motion } from 'motion/react';
import ReactPlayer from 'react-player';
import * as variant from '../lib/motionVariants';
import { AspectRatio } from './ui/aspect-ratio';
import { Button } from './ui/button';
import { Dialog, DialogContent } from './ui/dialog';

const Overview = () => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='section-head'>
          <motion.p
            variants={variant.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-subtitle'
          >
            {overviewData.sectionSubtitle}
          </motion.p>
          <motion.h2
            variants={variant.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-title'
          >
            {overviewData.sectionTitle}
          </motion.h2>
          <motion.p
            variants={variant.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-text'
          >
            {overviewData.sectionText}
          </motion.p>
        </div>
        <div className=''>
          <motion.div
            variants={variant.fadeInScale}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='relative max-w-4xl mx-auto shadow-xl'
          >
            <figure>
              <img
                src={overviewBanner}
                alt='Overview Banner'
                width={900}
                height={601}
              />
            </figure>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant='secondary'
                  size='icon'
                  className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150'
                >
                  <Play
                    fill='#ffffff'
                    size={50}
                  />
                </Button>
              </DialogTrigger>
              <DialogContent className='p-0 max-w-[640px] overflow-hidden xl:max-w-[1000px]'>
                <AspectRatio ratio={16 / 9}>
                  <ReactPlayer
                    url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
                    style={{
                      minWidth: ' 100%',
                      maxWidth: ' 100%',
                      minHeight: ' 100%',
                      maxHeight: ' 100%',
                    }}
                  />
                </AspectRatio>
              </DialogContent>
            </Dialog>
          </motion.div>

          <div className='max-w-4xl mx-auto grid grid-cols-1 gap-5 mt-8 md:mt-16 xl:grid-cols-[3fr_2.5fr] xl:items-center'>
            <motion.p
              variants={variant.fadeInRight}
              initial='start'
              whileInView='end'
              viewport={{ once: true }}
              className='section-title text-center lg:max-w-[30ch] lg:mx-auto xl:text-left'
            >
              {overviewData.listTitle}
            </motion.p>
            <motion.div
              variants={variant.staggerContainer}
              initial='start'
              whileInView='end'
              viewport={{ once: true }}
              className='flex flex-wrap justify-center gap-5 md:gap-10 xl:gap-8'
            >
              {overviewData.list.map(({ title, text }, index) => (
                <motion.div
                  variants={variant.fadeInLeft}
                  key={index}
                  className='text-center'
                >
                  <h3 className='text-3xl'>{title}</h3>
                  <p className='text-muted-foreground'>{text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
