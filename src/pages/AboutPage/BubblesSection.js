import React from 'react';
import icons from '../../icons/icons.svg';
const Icon = ({ name, className }) => (
  <svg className={className}>
    <use href={`${icons}#${name}`} />
  </svg>
);
function BubblesSection() {
  return (
    <section id='section6' className='section-container container'>
      <h2 className='about-section-title'>
        Bubliny v epoxidovej živici: príčiny a riešenia
      </h2>
      <p>
        Bubliny v epoxidovej živici sú častým problémom, ktorý môže ovplyvniť
        vzhľad aj kvalitu hotového výrobku. Vznikajú z rôznych dôvodov, no
        existujú osvedčené metódy, ako im predísť alebo ich odstrániť.
      </p>
      <h3>Príčiny vzniku bublín v epoxidovej živici</h3>
      <ol className='num-menu'>
        <li>
          Nesprávne miešanie živice a tvrdidla
          <p>
            Ak sa živica a tvrdidlo miešajú príliš rýchlo alebo agresívne, do
            zmesi sa dostáva veľké množstvo vzduchu, ktorý následne vytvára
            bubliny.
          </p>
          <h4>Ako predísť problému?</h4>
          <ul className='checklist'>
            <li className='checklist__item'>
              <Icon name='icon-true' className='checklist__true' />
              Miešajte živicu pomaly a rovnomerne, aby sa do nej dostalo čo
              najmenej vzduchu.
            </li>
            <li className='checklist__item'>
              <Icon name='icon-true' className='checklist__true' />
              Používajte miešadlo so zaoblenými hranami, ktoré redukuje tvorbu
              bublín.
            </li>
            <li className='checklist__item'>
              <Icon name='icon-true' className='checklist__true' /> Po
              premiešaní nechajte zmes chvíľu odstáť, aby bubliny mohli vystúpiť
              na povrch.
            </li>
          </ul>
        </li>
        <li>
          Nevhodná teplota a vlhkosť prostredia
          <p>
            Epoxidová živica je citlivá na teplotu a vlhkosť. Pri nízkej teplote
            je hustejšia a zachytáva viac vzduchu. Pri vysokej vlhkosti môže
            absorbovať vodnú paru, čo vedie k vzniku mikro bublín.
          </p>
          <h4>Ako predísť problému?</h4>
          <ul className='checklist'>
            <li className='checklist__item'>
              <Icon name='icon-true' className='checklist__true' />
              Pracujte v miestnosti s teplotou medzi 20 – 25 °C.
            </li>
            <li className='checklist__item'>
              <Icon name='icon-true' className='checklist__true' />
              Zabezpečte, aby bola vlhkosť vzduchu pod 50 %.
            </li>
            <li className='checklist__item'>
              <Icon name='icon-true' className='checklist__true' />V prípade
              studenej živice ju mierne zahrejte vo vodnom kúpeli (bez kontaktu
              s vodou).
            </li>
          </ul>
        </li>
        <li>
          Nevhodný povrch alebo materiál formy
          <p>
            Niektoré porézne materiály, ako drevo alebo betón, môžu pri kontakte
            so živicou uvoľňovať vzduch, čím vytvárajú bubliny.
          </p>
          <h4>Ako predísť problému?</h4>
          <ul className='checklist'>
            <li className='checklist__item'>
              <Icon name='icon-true' className='checklist__true' />
              Uzatvorte povrch pred naliatím živice pomocou tenkej vrstvy
              epoxidového náteru alebo vhodného základného laku.
            </li>
            <li className='checklist__item'>
              <Icon name='icon-true' className='checklist__true' />
              Používajte silikónové formy vysokej kvality, ktoré sú hladké a
              minimalizujú zachytávanie vzduchu.
            </li>
          </ul>
        </li>
        <li>
          Príliš hrubá vrstva živice
          <p>
            Pri odlievaní hrubých vrstiev (nad 2 cm) môže živica zadržať viac
            vzduchu, ktorý nestihne uniknúť pred vytvrdnutím.
          </p>
          <h4>Ako predísť problému?</h4>
          <ul className='checklist'>
            <li className='checklist__item'>
              <Icon name='icon-true' className='checklist__true' />
              Odlievajte živicu v tenších vrstvách, maximálne 1 – 2 cm naraz.
            </li>
            <li className='checklist__item'>
              <Icon name='icon-true' className='checklist__true' />
              Medzi jednotlivými vrstvami nechajte čas na odvetranie bublín.
            </li>
          </ul>
        </li>
      </ol>
      <h3>Ako odstrániť bubliny zo živice?</h3>
      <ol className='num-menu'>
        <li>
          Použitie teplovzdušnej pištole alebo horáka
          <p>
            Teplovzdušná pištoľ alebo plynový horák pomáha uvoľniť bubliny tým,
            že jemne zahrieva povrch živice.
          </p>
          <h4>Postup:</h4>
          <p>1. Držte pištoľ vo vzdialenosti 10 – 15 cm od povrchu.</p>
          <p>2. Pomaly prechádzajte po povrchu, aby sa bubliny rozplynuli.</p>
          <p>
            3. Neprehrievajte živicu na jednom mieste, aby ste predišli
            poškodeniu.
          </p>
        </li>
        <li>
          Vákuová komora na odstránenie vzduchu
          <p>
            Ak pracujete s hrubšími vrstvami živice, vákuová komora môže pomôcť
            odstrániť vzduch pred odlievaním.
          </p>
          <h4>Ako to funguje?</h4>
          <ul className='checklist'>
            <li className='checklist__item'>
              <Icon name='icon-true' className='checklist__true' />
              Živica sa vloží do vákuovej komory, kde sa vytvorí podtlak, ktorý
              vytiahne vzduchové bubliny.
            </li>
            <li className='checklist__item'>
              <Icon name='icon-true' className='checklist__true' />
              Tento proces je ideálny pri odlievaní detailných foriem a šperkov.
            </li>
          </ul>
        </li>
        <li>
          Nechať živicu prirodzene odvzdušniť
          <p>
            Ak máte dostatok času, nechajte čerstvo zmiešanú živicu odstáť 5 –
            10 minút, aby bubliny mohli samé vystúpiť na povrch.
          </p>
          <p>
            Tip: Jemné poklepanie na nádobu so živicou môže urýchliť uvoľnenie
            vzduchu.
          </p>
        </li>
      </ol>
      <h3>Záver</h3>
      <p>
        Vzniku bublín v epoxidovej živici sa dá predísť správnou technikou
        miešania, udržiavaním vhodných podmienok v miestnosti a použitím
        správnych nástrojov. Ak sa bubliny predsa len objavia, ich odstránenie
        je možné teplovzdušnou pištoľou, vákuovou komorou alebo správnym
        vrstvením živice. Dodržiavaním týchto zásad získate krásny, hladký a
        profesionálne vyzerajúci povrch.{' '}
      </p>
    </section>
  );
}

export default BubblesSection;
