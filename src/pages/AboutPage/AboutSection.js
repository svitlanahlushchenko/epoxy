import React from 'react';

function AboutSection() {
  return (
    <section id='section1' className='section-container container'>
      <h2>Epoxidová živica: Čo to je a ako si vybrať tú správnu?</h2>
      <h3>Čo je epoxidová živica?</h3>
      <p>
        Epoxidová živica je dvojzložkový polymérny materiál, ktorý sa po
        zmiešaní s tvrdidlom vytvrdzuje a vytvára pevnú, priehľadnú alebo
        farebnú vrstvu. Používa sa v rôznych oblastiach, ako sú umenie, remeslá,
        priemyselná výroba a ochranné povlaky.
      </p>
      <p>Hlavné vlastnosti epoxidovej živice zahŕňajú:</p>
      <ul>
        <li className='dots-menu-item'>
          Vysoká odolnosť voči mechanickému poškodeniu a chemikáliám
        </li>
        <li className='dots-menu-item'>
          Priehľadnosť a možnosť farbenia pigmentami a prídavkami
        </li>
        <li className='dots-menu-item'>
          Dlhší čas vytvrdzovania, ktorý umožňuje presné spracovanie
        </li>
        <li className='dots-menu-item'>
          Schopnosť lepenia na rôzne povrchy (drevo, kov, betón, plast)
        </li>
      </ul>
      <h3>Ako si vybrať správnu epoxidovú živicu?</h3>
      <p>
        Pri výbere epoxidovej živice je dôležité zvážiť nasledujúce faktory:
      </p>
      <ol className='num-menu'>
        <li>
          Viskozita
          <ul>
            <li className='dots-menu-item'>
              Nízkoviskózna živica: Ideálna na zalievanie foriem, tvorbu tenkých
              vrstiev a penetráciu do materiálov.
            </li>
            <li className='dots-menu-item'>
              Vysokoviskózna živica: Lepšia na modelovanie, vrstvenie a
              povrchové úpravy.
            </li>
          </ul>
        </li>
        <li>
          Doba vytvrdzovania
          <ul>
            <li className='dots-menu-item'>
              Rýchlo vytvrdzujúce živice (4-6 hodín): Vhodné na menšie projekty,
              kde je potrebná rýchla manipulácia.
            </li>
            <li className='dots-menu-item'>
              Stredne rýchle živice (12-24 hodín): Bežná voľba pre remeselníkov.
            </li>
            <li className='dots-menu-item'>
              Dlhšie vytvrdzujúce živice (48+ hodín): Používané na hlboké
              odliatky a veľkoplošné aplikácie.
            </li>
          </ul>
        </li>
        <li>
          Priehľadnosť a UV stabilita{' '}
          <p>
            Ak pracujete s priesvitnou živicou, je dôležité skontrolovať, či
            obsahuje UV stabilizátory, aby sa zabránilo žltnutiu vplyvom
            slnečného žiarenia.
          </p>
        </li>
        <li>
          Tepelná odolnosť
          <p>Epoxidové živice majú rôzne stupne tepelnej odolnosti:</p>
          <ul>
            <li className='dots-menu-item'>
              Na dekoratívne účely postačí teplotná odolnosť do 50-70 °C.
            </li>
            <li className='dots-menu-item'>
              Na pracovné povrchy a stoly sa odporúčajú živice s odolnosťou
              aspoň 90-120 °C.
            </li>
          </ul>
        </li>
        <li>
          Bezpečnosť a ekologické faktory
          <p>
            Niektoré živice obsahujú toxické prídavky, ktoré môžu poškodiť
            zdravie pri vdýchavaní. Pri práci v interiéri odporúčame voliť
            bezrozpúšťadlové a bezzápachové epoxidové systémy.
          </p>
        </li>
      </ol>
      <h3>Praktické rady pri výbere epoxidovej živice</h3>
      <ul>
        <li className='dots-menu-item'>
          Pre umelecké projekty: Voľte priesvitnú alebo farebnú živicu s nízkou
          viskozitou.
        </li>
        <li className='dots-menu-item'>
          Na drevené povrchy a nábytok: Použite UV stabilizované epoxidy s
          vysokou odolnosťou.
        </li>
        <li className='dots-menu-item'>
          Na hlboké odliatky: Vyberte epoxidovú živicu s dlhou dobou
          vytvrdzovania, aby sa minimalizovali bubliny.
        </li>
        <li className='dots-menu-item'>
          Na ochranné povlaky: Potrebujete tvrdšiu živicu s vysokou odolnosťou
          voči poškrabaniu a teplu.
        </li>
      </ul>
      <h3>Záver</h3>
      <p>
        Správna epoxidová živica závisí od vašich potrieb a druhu projektu. Pred
        kúpou je dôležité zvážiť jej vlastnosti, čas vytvrdzovania a bezpečnosť.
        Ak si nie ste istí, vyskúšajte menšie balenie na testovanie alebo sa
        poraďte s odborníkmi.
      </p>
    </section>
  );
}

export default AboutSection;
