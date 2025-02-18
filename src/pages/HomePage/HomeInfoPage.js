import React from 'react';
import { Link } from 'react-router-dom';

const sections = [
  {
    title: 'Epoxidová živica: Čo to je a ako si vybrať tú správnu?',
    description:
      'Epoxidová živica je dvojzložkový materiál, ktorý sa používa na tvorbu dekorácií, nábytku a ochranných povlakov. Pri výbere správnej živice je dôležité zvážiť jej viskozitu, dobu vytvrdzovania a odolnosť voči vonkajším vplyvom.',
    image: './images/first.jpg',
    link: '/about#section1',
  },
  {
    title: 'Epoxidová živica v umení a tvorbe',
    description:
      'Epoxidová živica ponúka nekonečné možnosti pre umeleckú tvorbu, od abstraktných obrazov až po realistické dekorácie. Vďaka jej priehľadnosti a možnosti kombinácie s pigmentmi či inými materiálmi vznikajú jedinečné a odolné diela.',
    image: '',
    link: '/about#section2',
  },
  {
    title: 'Materiály potrebné na prácu s epoxidovou živicou',
    description:
      'Na prácu s epoxidovou živicou sú nevyhnutné kvalitné zložky – samotná živica a tvrdidlo, ako aj vhodné farbivá a prísady. Okrem toho sú dôležité ochranné pomôcky, miešacie nádoby a správne pracovné náradie pre dosiahnutie profesionálnych výsledkov.',
    image: '',
    link: '/about#section3',
  },
  {
    title: 'Pracovné povrchy pre epoxidovú živicu',
    description:
      'Epoxidová živica sa dá aplikovať na rôzne povrchy, ako je drevo, kov, betón či sklo, no každý z nich vyžaduje špeciálnu prípravu. Správne očistenie, odmastenie a v niektorých prípadoch aj základný náter zabezpečia lepšiu priľnavosť a dlhú životnosť živicového povlaku.',
    image: '',
    link: '/about#section4',
  },
  {
    title: 'Farbivá a pigmenty na epoxidovú živicu',
    description:
      'Farbivá a pigmenty umožňujú vytvárať jedinečné odtiene a efekty v epoxidovej živici, od priehľadných až po metalické či perleťové. Pri výbere je dôležité použiť kompatibilné farbivá, aby sa zachovala správna konzistencia a vlastnosti živice.',
    image: './images/fifth.jpg',
    link: '/about#section5',
  },
  {
    title: 'Bubliny v epoxidovej živici: príčiny a riešenia',
    description:
      'Bubliny v epoxidovej živici môžu vzniknúť v dôsledku nesprávneho miešania, vysokej vlhkosti alebo nevhodnej teploty pri odlievaní. Aby ste im predišli, odporúča sa pomalé miešanie, použitie teplovzdušnej pištole na odstránenie bublín a práca v suchom prostredí s kontrolovanou teplotou.',
    image: '',
    link: '/about#section6',
  },
  {
    title: 'Bezpečnostné opatrenia pri práci s epoxidovou živicou',
    description:
      'Pri práci s epoxidovou živicou je dôležité používať ochranné rukavice, respirátor a pracovať v dobre vetranom priestore. Pri kontakte s pokožkou alebo vdychovaní výparov môže živica spôsobiť podráždenie alebo alergické reakcie. Dodržiavanie bezpečnostných pokynov zabezpečí ochranu vášho zdravia.',
    image: '',
    link: '/about#section7',
  },
  {
    title: 'Oprava chýb pri práci s epoxidovou živicou',
    description:
      'Chyby pri práci s epoxidovou živicou, ako bubliny či nerovnosti, sa dajú opraviť brúsením, opätovným zalievaním alebo teplom. Dôležité je dodržiavať správne postupy.',
    image: '',
    link: '/about#section8',
  },
  {
    title: 'Údržba hotových výrobkov z epoxidovej živice',
    description:
      'Hotové výrobky z epoxidovej živice je potrebné chrániť pred priamym slnečným žiarením a chemikáliami. Na čistenie stačí jemná handrička a mydlová voda.',
    image: '',
    link: '/about#section9',
  },
  {
    title: 'Galéria hotových diel',
    description:
      'Pozrite si inšpiratívne hotové diela z epoxidovej živice. Kreatívne možnosti sú nekonečné – od šperkov až po nábytok.',
    image: '',
    link: '/galery#section10',
  },
];

const Section = ({ title, description, image, link, reverse }) => {
  return (
    <div className={`home-info-section__container ${reverse ? 'reverse' : ''}`}>
      {image && (
        <img src={image} alt={title} className='home-info-section__image' />
      )}
      <div className='home-info-section__text-container'>
        <h2 className='home-info-section__title'>{title}</h2>
        {description && (
          <p className='home-info-section__text'>{description}</p>
        )}
        {link && (
          <Link to={link} className='button'>
            Zistiť viac
          </Link>
        )}
      </div>
    </div>
  );
};

const SectionsList = () => {
  return (
    <div className='home-info-section'>
      {sections.map((section, index) => (
        <Section key={index} {...section} reverse={index % 2 !== 0} />
      ))}
    </div>
  );
};

export default SectionsList;
