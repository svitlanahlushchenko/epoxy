import React from 'react';
import icons from '../../icons/icons.svg';
const Icon = ({ name, className }) => (
  <svg className={className}>
    <use href={`${icons}#${name}`} />
  </svg>
);

function MaterialsSection() {
  return (
    <section id='section3' className='section-container container'>
      <h2 className='about-section-title'>
        Materiály potrebné na prácu s epoxidovou živicou
      </h2>
      <p>
        Ak chcete dosiahnuť kvalitné a trvácne výsledky pri práci s epoxidovou
        živicou, je dôležité mať k dispozícii správne materiály a pomôcky. Každý
        komponent zohráva svoju úlohu pri správnom miešaní, aplikácii a finálnom
        vzhľade výrobku.
      </p>
      <ol className='num-menu'>
        <li>
          Základné zložky epoxidovej živice
          <p>Epoxidová živica sa skladá z dvoch hlavných komponentov:</p>
          <ul>
            <li className='dots-menu-item'>
              Živica – viskózna priehľadná kvapalina, ktorá po zmiešaní s
              tvrdidlom tuhne.
            </li>
            <li className='dots-menu-item'>
              Tvrdidlo – chemická látka, ktorá spúšťa proces polymerizácie a
              premieňa živicu na pevný materiál.
            </li>
          </ul>
          <p>Pri výbere živice je dôležité zohľadniť:</p>
          <ul className='checklist'>
            <li className='checklist__item'>
              <Icon name='icon-true' className='checklist__true' />
              Čas vytvrdzovania – niektoré živice tuhnú rýchlo (do niekoľkých
              hodín), iné potrebujú aj niekoľko dní.
            </li>
            <li className='checklist__item'>
              <Icon name='icon-true' className='checklist__true' />
              Viskozitu – tekutejšie živice sa hodia na zalievanie tenkých
              vrstiev, hustejšie na objemnejšie odliatky.
            </li>
            <li className='checklist__item'>
              <Icon name='icon-true' className='checklist__true' />
              UV odolnosť – kvalitné živice obsahujú UV stabilizátory, ktoré
              zabránia žltnutiu.
            </li>
          </ul>
        </li>
        <li>
          Farbivá a prísady
          <p>
            Na dosiahnutie rôznych efektov a farieb sa do epoxidovej živice
            pridávajú špeciálne prísady:
          </p>
          <ul>
            <li className='dots-menu-item'>
              Pigmentové pasty – husté farby s vysokou krycou schopnosťou.
            </li>
            <li className='dots-menu-item'>
              Alkoholové atramenty – vytvárajú efekt mramoru alebo dymových
              vzorov.
            </li>
            <li className='dots-menu-item'>
              Práškové pigmenty – perleťové, metalické alebo fluorescenčné
              efekty.
            </li>
            <li className='dots-menu-item'>
              Glitre a dekoračné vločky – pridávajú živici trblietavý efekt.
            </li>
          </ul>
          <p className='checklist__item'>
            <Icon name='icon-light' className='checklist__light' />
            Dôležité: Používajte iba farbivá kompatibilné s epoxidovou živicou,
            aby sa zachovala správna konzistencia a tvrdosť.
          </p>
        </li>

        <li>
          Pracovné pomôcky a náradie
          <p>
            Aby bola práca s epoxidovou živicou presná a bezpečná, sú potrebné
            tieto nástroje:
          </p>
          <ul className='checklist'>
            <li className='checklist__item'>
              <Icon name='icon-tools' className='checklist__tools' />
              Miešacie nádoby – plastové alebo silikónové nádoby odolné voči
              chemikáliám.
            </li>
            <li className='checklist__item'>
              <Icon name='icon-tools' className='checklist__tools' />
              Miešacie tyčinky – drevené alebo plastové paličky na dôkladné
              premiešanie zložiek.
            </li>
            <li className='checklist__item'>
              <Icon name='icon-tools' className='checklist__tools' />
              Pipety a dávkovače – pomáhajú presne odmerať malé množstvá farbív
              či prísad.
            </li>
            <li className='checklist__item'>
              <Icon name='icon-tools' className='checklist__tools' />
              Teplovzdušná pištoľ alebo horák – slúži na odstránenie bublín z
              povrchu živice.
            </li>
            <li className='checklist__item'>
              <Icon name='icon-tools' className='checklist__tools' />
              Brúsny papier a leštiace pasty – na úpravu povrchu po vytvrdnutí.
            </li>
          </ul>
        </li>

        <li>
          Ochranné pomôcky
          <ul className='checklist'>
            <li className='checklist__item'>
              <Icon name='icon-shield' className='checklist__shield' />
              Nitrilové rukavice – chránia pokožku pred priamym kontaktom s
              chemikáliami.
            </li>
            <li className='checklist__item'>
              <Icon name='icon-shield' className='checklist__shield' />
              Respirátor s uhlíkovým filtrom – odporúčaný pri práci v uzavretých
              priestoroch.
            </li>
            <li className='checklist__item'>
              <Icon name='icon-shield' className='checklist__shield' />
              Ochranné okuliare – zabraňujú náhodnému kontaktu živice s očami.
            </li>
            <li className='checklist__item'>
              <Icon name='icon-shield' className='checklist__shield' />
              Pracovná zástera alebo staré oblečenie – živica sa ťažko
              odstraňuje z textilu.
            </li>
          </ul>
        </li>
      </ol>
      <h3>Záver</h3>
      <p>
        Použitím kvalitných materiálov a správnych pomôcok zabezpečíte, že vaša
        práca s epoxidovou živicou bude efektívna, bezpečná a výsledky budú
        profesionálne. Ak chcete dosiahnuť najlepší efekt, vždy dodržiavajte
        odporúčania výrobcu a experimentujte s rôznymi technikami a prísadami.
      </p>
    </section>
  );
}

export default MaterialsSection;
