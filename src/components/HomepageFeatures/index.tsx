import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Materi Terstruktur',
    image: require('@site/static/img/materi.png').default,
    description: (
      <>
        Materi setiap pertemuan praktikum yang disusun sedemikian rupa untuk bisa diakses kapan saja dan dimana saja
      </>
    ),
  },
  {
    title: 'Penugasan Mingguan',
    image: require('@site/static/img/tugas.png').default,
    description: (
      <>
        Tugas praktikum yang dirancang untuk mahasiswa praktek langsung lewat studi kasus yang relevan dengan materi yang dipelajari, sehingga dapat meningkatkan pemahaman dan keterampilan praktis.
      </>
    ),
  },
  {
    title: 'Sumber Belajar',
    image: require('@site/static/img/sumber-lainnya.png').default,
    description: (
      <>
        Akses ke berbagai referensi, contoh kode, dan tips praktis untuk
        mendukung proses pembelajaran yang efektif.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
