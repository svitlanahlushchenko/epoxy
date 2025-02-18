import React from 'react';

function CareSection() {
  return (
    <section id='section9' className='section-container container'>
      <h2 className='about-section-title'>
        Údržba hotových výrobkov z epoxidovej živice
      </h2>
      <p>
        Epoxidová živica je odolný materiál, no aby si hotové výrobky zachovali
        svoj vzhľad a kvalitu po dlhé roky, je dôležité im venovať správnu
        starostlivosť.
      </p>
      <ol className='num-menu'>
        <li>
          Ochrana pred poškodením
          <ul>
            <li className='dots-menu-item'>
              Epoxidová živica je citlivá na UV žiarenie, ktoré môže spôsobiť
              jej zožltnutie alebo stratu lesku. Ak je to možné, umiestnite
              výrobky mimo priameho slnečného svetla alebo použite UV ochranné
              laky.
            </li>
            <li className='dots-menu-item'>
              Vyvarujte sa kontaktu s agresívnymi chemikáliami, ako sú
              rozpúšťadlá, acetón či silné čistiace prostriedky, ktoré môžu
              poškodiť povrch živice.
            </li>
          </ul>
        </li>
        <li>
          Čistenie a údržba povrchu
          <ul>
            <li className='dots-menu-item'>
              Na bežné čistenie stačí jemná handrička a mydlová voda. Vyhnite sa
              abrazívnym hubkám, ktoré by mohli poškriabať povrch.
            </li>
            <li className='dots-menu-item'>
              Ak sa na povrchu objavia drobné škrabance, je možné ich vyleštiť
              pomocou jemnej brúsnej pasty a mäkkej handričky.
            </li>
          </ul>
        </li>
        <li>
          Dlhodobá starostlivosť
          <ul>
            <li className='dots-menu-item'>
              Pri častom používaní sa odporúča povrch pravidelne ošetrovať
              špeciálnymi leštiacimi prípravkami určenými na epoxidovú živicu.
            </li>
            <li className='dots-menu-item'>
              Ak sa výrobok poškodí alebo stratí svoj pôvodný lesk, je možné ho
              obnoviť nanesením novej vrstvy živice alebo ochranného laku.
            </li>
          </ul>
        </li>
      </ol>
      <p>
        Správnou údržbou si môžete byť istí, že vaše epoxidové diela si
        zachovajú svoj krásny vzhľad a funkčnosť na dlhý čas.
      </p>
    </section>
  );
}

export default CareSection;
