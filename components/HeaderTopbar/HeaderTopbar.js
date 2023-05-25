import React from 'react'
import { langs } from '../../utils';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import { usePathname } from 'next/navigation';

const HeaderTopbar = () => {
    const pathname = usePathname();
    const { t, i18n } = useTranslation('common');

    const currentLocale = i18n.language;
    return(	
        <div className="topbar">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-7 col-md-5 col-sm-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                <li><i><img src='/images/icon/1.png' alt=""/></i>Sun - Fri   ||   8:00 - 7:00</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-5 col-md-7 col-sm-12 col-12">
                        <div className="contact-info">
                            <ul>
                                <li><a legacyBehavior href="tel:+6494461709"><i><img src='/images/icon/2.png' alt=""/></i> +00 56 98 46</a></li>
                                <li className='lan-sec'>


                                {/* {langs?.map((link) => (
                              <Link
                                  key={link.name}
                                   href={pathname}
                                  className='block px-4 py-3 mx-2 rounded-md text-sm md:text:lg text-gray font-medium capitalize transition-colors duration-300 transform hover:bg-cyan'
                                  locale={link.locale}
                                  onClick={() => {
                                     // document.dir = link.dir;
                                    //   setOpenHamburger(
                                    //       (prevState) => !prevState
                                    //   );
                                      //i18n.changeLanguage(link.locale);
                                      i18n.language === link.name

                                  }}
                              >
                                  {link.name}
                              </Link>
                          ))
                                } */}







                                    {/* <select name="" id="">
                                        <option value="">English</option>
                                        <option value="">Spain</option>
                                        <option value="">France</option>
                                        <option value="">Italy</option>
                                    </select> */}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar;