import React from 'react';
import icons from '../../icons/icons.svg';
const Icon = ({ name, className }) => (
  <svg className={className}>
    <use href={`${icons}#${name}`} />
  </svg>
);
function SurfacesSection() {
  return (
    <section id='section4' className='section-container container'>
      <h2 className='about-section-title'>
        Pracovné povrchy pre epoxidovú živicu
      </h2>
      <p>
        Epoxidová živica je univerzálny materiál, ktorý možno aplikovať na rôzne
        typy povrchov. Každý materiál si však vyžaduje špeciálnu prípravu, aby
        sa zabezpečila dobrá priľnavosť, odolnosť a dlhá životnosť výsledného
        povlaku.
      </p>
      <ol className='num-menu'>
        <li>
          Typy povrchov vhodných pre epoxidovú živicu
          <h4>Drevo</h4>
          <ul>
            <li className='dots-menu-item'>
              Drevo je jedným z najpopulárnejších materiálov na zalievanie
              epoxidom, napríklad pri výrobe stolov alebo dekorácií.
            </li>
            <li className='dots-menu-item'>
              Príprava: Drevo musí byť dobre vysušené, obrúsené a zbavené
              prachu. Odporúča sa použiť penetračný náter, ktorý zabráni
              nadmernému vsiaknutiu živice.
            </li>
            <li className='dots-menu-item'>
              Pozor na: Príliš vlhké drevo môže spôsobiť bubliny alebo
              odlupovanie živice.
            </li>
          </ul>
          <h4>Kov</h4>
          <ul>
            <li className='dots-menu-item'>
              Epoxidová živica môže byť použitá na kove ako ochranný náter alebo
              dekoratívny prvok.
            </li>
            <li className='dots-menu-item'>
              Príprava: Povrch kovu je potrebné odmastiť (napr.
              izopropylalkoholom) a v prípade potreby zdrsniť brúsnym papierom.
              Na lepšiu priľnavosť je vhodné použiť základný náter.
            </li>
            <li className='dots-menu-item'>
              Pozor na: Korózia môže oslabiť adhéziu živice, preto je dôležité
              použiť antikorózny náter.
            </li>
          </ul>
          <h4>Betón</h4>
          <ul>
            <li className='dots-menu-item'>
              Epoxid sa často používa na zalievanie podláh alebo pracovných
              dosiek.
            </li>
            <li className='dots-menu-item'>
              Príprava: Betón musí byť úplne vyzretý (minimálne 28 dní), suchý a
              zbavený prachu či mastnoty. V prípade pórovitých povrchov sa
              odporúča základný epoxidový náter.
            </li>
            <li className='dots-menu-item'>
              Pozor na: Ak je betón príliš vlhký, môže dôjsť k odlupovaniu
              živice.
            </li>
          </ul>
          <h4>Sklo a keramika</h4>
          <ul>
            <li className='dots-menu-item'>
              Tieto povrchy umožňujú dosiahnuť hladký a lesklý vzhľad epoxidovej
              vrstvy.
            </li>
            <li className='dots-menu-item'>
              Príprava: Sklo a keramiku je potrebné dôkladne odmastiť a mierne
              zdrsniť brúsnym papierom na zlepšenie adhézie.
            </li>
            <li className='dots-menu-item'>
              Pozor na: Na extrémne hladkých povrchoch môže živica stekať alebo
              nepriliehať rovnomerne.
            </li>
          </ul>
          <h4>Plasty</h4>
          <ul>
            <li className='dots-menu-item'>
              Nie všetky plasty sú kompatibilné s epoxidovou živicou. Najlepšie
              fungujú polykarbonát alebo akrylát.
            </li>
            <li className='dots-menu-item'>
              Príprava: Povrch je potrebné zdrsniť a odmastiť, pri niektorých
              plastoch sa odporúča test priľnavosti.
            </li>
            <li className='dots-menu-item'>
              Pozor na: Niektoré plasty môžu obsahovať zmäkčovadlá, ktoré môžu
              negatívne ovplyvniť tvrdnutie epoxidu.
            </li>
          </ul>
        </li>
        <li>Dôležité kroky pre prípravu povrchu</li>
        <p>
          Bez ohľadu na typ materiálu, vždy je dôležité dodržať tieto kroky:
        </p>
        <ul className='checklist'>
          <li className='checklist__item'>
            <Icon name='icon-true' className='checklist__true' />
            Čistenie – Odstránenie prachu, mastnoty a iných nečistôt.
          </li>
          <li className='checklist__item'>
            <Icon name='icon-true' className='checklist__true' />
            Odmastenie – Použitie alkoholu alebo acetónu na elimináciu mastných
            zvyškov.
          </li>
          <li className='checklist__item'>
            <Icon name='icon-true' className='checklist__true' />
            Brúsenie – Zdrsnenie povrchu zlepší priľnavosť epoxidu.
          </li>
          <li className='checklist__item'>
            <Icon name='icon-true' className='checklist__true' />
            Penetračný náter – V prípade poréznych povrchov zabraňuje
            nasiaknutiu živice.
          </li>
        </ul>
        <li>
          Najčastejšie chyby pri aplikácii na rôzne povrchy
          <ul className='checklist'>
            <li className='checklist__item '>
              <Icon name='icon-false' className='checklist__false' />
              Nedostatočné čistenie – Prach a mastnota môžu spôsobiť odlupovanie
              živice.
            </li>
            <li className='checklist__item'>
              <Icon name='icon-false' className='checklist__false' />
              Príliš hladký povrch – Epoxid nemusí správne priľnúť, preto je
              potrebné brúsenie.
            </li>
            <li className='checklist__item '>
              <Icon name='icon-false' className='checklist__false' />
              Vlhké materiály – Drevo alebo betón s vysokou vlhkosťou môžu
              spôsobiť tvorbu bublín alebo odlupovanie.
            </li>
            <li className='checklist__item'>
              <Icon name='icon-false' className='checklist__false' />
              Nesprávny výber základného náteru – Napríklad nevhodný základný
              náter na kove môže znížiť adhéziu epoxidu.
            </li>
          </ul>
        </li>
      </ol>
    </section>
  );
}

export default SurfacesSection;
